// Vercel Serverless Function: Groq AI Chatbot for Nirmal's Portfolio

// ============================================================================
// 🔑 GROQ AI API KEY CONFIGURATION:
// ============================================================================
const DEFAULT_GROQ_KEY = process.env.GROQ_API_KEY || '';

export default async function handler(req, res) {
  // CORS headers
  if (res && res.setHeader) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  if (req && req.method === 'OPTIONS') {
    if (res && res.status) return res.status(200).end();
    return;
  }

  if (req && req.method !== 'POST') {
    if (res && res.status) {
      return res.status(200).json({
        status: 'online',
        message: 'Nirmal AI Chat Endpoint Ready (POST messages to chat)',
        hasServerKey: Boolean(DEFAULT_GROQ_KEY),
      });
    }
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { messages, apiKey } = body;

    const activeKey = (apiKey && apiKey.trim()) || DEFAULT_GROQ_KEY;

    if (!activeKey) {
      if (res && res.status) {
        return res.status(200).json({
          status: 'needs_key',
          fallback: true,
          message: 'No GROQ_API_KEY configured.',
        });
      }
      return;
    }

    // Call Groq API with ultra-efficient openai/gpt-oss-20b model first (fast, smart reasoning)
    const candidateModels = [
      'openai/gpt-oss-20b',
      'openai/gpt-oss-120b',
      'qwen/qwen3.8-27b',
      'llama-3.3-70b-versatile',
      'llama-3.1-8b-instant',
    ];

    let response = null;
    let successfulModel = '';

    for (const model of candidateModels) {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${activeKey}`,
          },
          body: JSON.stringify({
            model,
            messages: messages || [],
            temperature: 0.3,
            max_tokens: 384,
          }),
        });

        if (res.ok) {
          response = res;
          successfulModel = model;
          break;
        }
        // If 429 or other error, try next candidate model immediately
      } catch {
        // Try next model
      }
    }

    if (!response || !response.ok) {
      throw new Error('All candidate Groq models failed or returned non-200');
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || '';

    if (res && res.status) {
      return res.status(200).json({
        status: 'success',
        reply,
        model: data?.model || 'openai/gpt-oss-120b',
      });
    }
    return { status: 'success', reply };
  } catch (error) {
    if (res && res.status) {
      return res.status(200).json({
        status: 'error',
        fallback: true,
        message: error.message || 'Error communicating with Groq API',
      });
    }
  }
}
