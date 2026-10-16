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

    // Call Groq API with ultra-efficient LLaMA 3.1 8B instant model first
    let response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${activeKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: messages || [],
        temperature: 0.3,
        max_tokens: 512,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        await new Promise((r) => setTimeout(r, 1000));
      }
      
      response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${activeKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: messages || [],
          temperature: 0.3,
          max_tokens: 512,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Groq API responded with HTTP ${response.status}: ${errorText}`);
      }
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
