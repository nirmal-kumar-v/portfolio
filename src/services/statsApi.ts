export interface LeetCodeStats {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number | null;
}

export interface GeeksforGeeksStats {
  totalSolved: number;
  codingScore: number;
  instituteRank: number;
  longestStreak: number;
  correctSubmissions: number;
  institute: string;
}

export interface ProviderStats<T> {
  provider: 'leetcode' | 'geeksforgeeks';
  username: string;
  profileUrl: string;
  isLive: boolean;
  status: 'idle' | 'loading' | 'success' | 'error';
  lastUpdated: string;
  data: T;
  error?: string;
}

// Baseline records strictly supplied in Nirmal's profile
export const LEETCODE_BASELINE: LeetCodeStats = {
  totalSolved: 250,
  easy: 150,
  medium: 93,
  hard: 7,
  ranking: 599257,
};

export const GFG_BASELINE: GeeksforGeeksStats = {
  totalSolved: 500,
  codingScore: 1505,
  instituteRank: 35,
  longestStreak: 32,
  correctSubmissions: 40,
  institute: 'Kongu Engineering College',
};

// Client cooldown: minimum 20 seconds between manual retries
const COOLDOWN_MS = 20 * 1000;
let lastLeetCodeFetchTime = 0;
let lastGfgFetchTime = 0;

/**
 * LeetCode Adapter
 */
export async function fetchLeetCodeStats(force = false): Promise<ProviderStats<LeetCodeStats>> {
  const now = Date.now();
  if (!force && now - lastLeetCodeFetchTime < COOLDOWN_MS) {
    const cached = localStorage.getItem('nkv_leetcode_cache');
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {
        // ignore
      }
    }
  }

  const username = 'nirmal-kumar-v';
  const profileUrl = 'https://leetcode.com/u/nirmal-kumar-v/';

  try {
    const res = await fetch('/api/leetcode', {
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`API returned HTTP ${res.status}`);
    }

    const payload = await res.json();
    if (payload.status === 'success' && payload.data) {
      lastLeetCodeFetchTime = now;
      const result: ProviderStats<LeetCodeStats> = {
        provider: 'leetcode',
        username,
        profileUrl,
        isLive: true,
        status: 'success',
        lastUpdated: payload.lastFetched || new Date().toISOString(),
        data: payload.data,
      };
      localStorage.setItem('nkv_leetcode_cache', JSON.stringify(result));
      return result;
    }

    throw new Error(payload.message || 'Malformed API response');
  } catch (err: any) {
    // Graceful fallback to verified baseline with clear label
    return {
      provider: 'leetcode',
      username,
      profileUrl,
      isLive: false,
      status: 'error',
      lastUpdated: new Date().toISOString(),
      data: LEETCODE_BASELINE,
      error: err.message || 'Live fetch temporarily unavailable',
    };
  }
}

/**
 * GeeksforGeeks Adapter
 */
export async function fetchGeeksforGeeksStats(force = false): Promise<ProviderStats<GeeksforGeeksStats>> {
  const now = Date.now();
  if (!force && now - lastGfgFetchTime < COOLDOWN_MS) {
    const cached = localStorage.getItem('nkv_gfg_cache');
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {
        // ignore
      }
    }
  }

  const username = 'nirmalkumar33';
  const profileUrl = 'https://www.geeksforgeeks.org/profile/nirmalkumar33';

  try {
    const res = await fetch('/api/geeksforgeeks', {
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`API returned HTTP ${res.status}`);
    }

    const payload = await res.json();
    if (payload.status === 'success' && payload.data) {
      lastGfgFetchTime = now;
      const result: ProviderStats<GeeksforGeeksStats> = {
        provider: 'geeksforgeeks',
        username,
        profileUrl,
        isLive: true,
        status: 'success',
        lastUpdated: payload.lastFetched || new Date().toISOString(),
        data: payload.data,
      };
      localStorage.setItem('nkv_gfg_cache', JSON.stringify(result));
      return result;
    }

    throw new Error(payload.message || 'Malformed API response');
  } catch (err: any) {
    return {
      provider: 'geeksforgeeks',
      username,
      profileUrl,
      isLive: false,
      status: 'error',
      lastUpdated: new Date().toISOString(),
      data: GFG_BASELINE,
      error: err.message || 'Live fetch temporarily unavailable',
    };
  }
}
