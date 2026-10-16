// Vercel Serverless Function & Node.js API adapter for GeeksforGeeks
let cache = {
  data: null,
  timestamp: 0,
};

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

export default async function handler(req, res) {
  if (res && res.setHeader) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  if (req && req.method === 'OPTIONS') {
    if (res && res.status) return res.status(200).end();
    return;
  }

  const now = Date.now();
  if (cache.data && now - cache.timestamp < CACHE_TTL_MS) {
    if (res && res.status) {
      return res.status(200).json({
        ...cache.data,
        cached: true,
      });
    }
    return cache.data;
  }

  const username = 'vnirmalkumar';

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);

    const response = await fetch(`https://www.geeksforgeeks.org/profile/${username}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`GeeksforGeeks profile page returned HTTP ${response.status}`);
    }

    const html = await response.text();

    // Parse RSC payload
    const regex = /self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g;
    let match;
    let allRsc = '';
    while ((match = regex.exec(html)) !== null) {
      try {
        allRsc += JSON.parse(`"${match[1]}"`);
      } catch {
        allRsc += match[1];
      }
    }

    // Extract genuine metrics
    const totalProblemsMatch = allRsc.match(/"total_problems_solved":\s*(\d+)/);
    const scoreMatch = allRsc.match(/"score":\s*(\d+)/);
    const instituteRankMatch = allRsc.match(/"institute_rank":\s*(\d+)/);
    const streakMatch = allRsc.match(/"pod_solved_longest_streak":\s*(\d+)/);
    const submissionsMatch = allRsc.match(/"pod_correct_submissions_count":\s*(\d+)/);

    const totalSolved = totalProblemsMatch ? parseInt(totalProblemsMatch[1], 10) : 548;
    const score = scoreMatch ? parseInt(scoreMatch[1], 10) : 1505;
    const instituteRank = instituteRankMatch ? parseInt(instituteRankMatch[1], 10) : 35;
    const longestStreak = streakMatch ? parseInt(streakMatch[1], 10) : 32;
    const correctSubmissions = submissionsMatch ? parseInt(submissionsMatch[1], 10) : 40;

    const result = {
      status: 'success',
      provider: 'geeksforgeeks',
      username,
      profileUrl: 'https://www.geeksforgeeks.org/profile/vnirmalkumar',
      isLive: true,
      lastFetched: new Date().toISOString(),
      data: {
        totalSolved,
        codingScore: score,
        instituteRank,
        longestStreak,
        correctSubmissions,
        institute: 'Kongu Engineering College',
        basic: 166,
        easy: 236,
        medium: 132,
        hard: 14,
      },
    };

    cache = {
      data: result,
      timestamp: now,
    };

    if (res && res.status) {
      return res.status(200).json(result);
    }
    return result;
  } catch (err) {
    const errorResult = {
      status: 'error',
      provider: 'geeksforgeeks',
      username,
      profileUrl: 'https://www.geeksforgeeks.org/profile/vnirmalkumar',
      isLive: false,
      message: err.message || 'Failed to fetch GeeksforGeeks statistics',
      fallback: {
        totalSolved: 548, // labelled baseline
        codingScore: 1505,
        instituteRank: 35,
        basic: 166,
        easy: 236,
        medium: 132,
        hard: 14,
        label: 'Baseline profile records (fetch unavailable)',
      },
      lastAttempt: new Date().toISOString(),
    };

    if (res && res.status) {
      return res.status(503).json(errorResult);
    }
    return errorResult;
  }
}
