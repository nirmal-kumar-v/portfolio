// Vercel Serverless Function & Node.js API adapter for LeetCode
let cache = {
  data: null,
  timestamp: 0,
};

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

export default async function handler(req, res) {
  // Enable CORS if accessed externally
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

  const username = 'nirmal-kumar-v';
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          ranking
          reputation
        }
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)',
        Referer: 'https://leetcode.com',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`LeetCode GraphQL responded with HTTP ${response.status}`);
    }

    const json = await response.json();
    const matchedUser = json?.data?.matchedUser;

    if (!matchedUser) {
      throw new Error('LeetCode user profile not found or private');
    }

    const subs = matchedUser.submitStatsGlobal?.acSubmissionNum || [];
    const allCount = subs.find((s) => s.difficulty === 'All')?.count ?? 269;
    const easyCount = subs.find((s) => s.difficulty === 'Easy')?.count ?? 162;
    const mediumCount = subs.find((s) => s.difficulty === 'Medium')?.count ?? 100;
    const hardCount = subs.find((s) => s.difficulty === 'Hard')?.count ?? 7;
    const ranking = matchedUser.profile?.ranking ?? null;

    const result = {
      status: 'success',
      provider: 'leetcode',
      username,
      profileUrl: 'https://leetcode.com/u/nirmal-kumar-v/',
      isLive: true,
      lastFetched: new Date().toISOString(),
      data: {
        totalSolved: allCount,
        easy: easyCount,
        medium: mediumCount,
        hard: hardCount,
        ranking,
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
      provider: 'leetcode',
      username,
      profileUrl: 'https://leetcode.com/u/nirmal-kumar-v/',
      isLive: false,
      message: err.message || 'Failed to fetch LeetCode statistics',
      fallback: {
        totalSolved: 250, // labelled baseline
        easy: 150,
        medium: 93,
        hard: 7,
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
