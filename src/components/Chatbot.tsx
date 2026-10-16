import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ExternalLink,
  RotateCcw,
  Key,
  ShieldCheck,
  Check,
  Award,
  Clock,
} from 'lucide-react';
import { SYSTEM_PROMPT, getOfflineAnswer, type ChatMessage } from '../data/chatbotKnowledge';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome',
    sender: 'bot',
    text: "Hello! I am **Nirmal AI**, Nirmal Kumar V.'s portfolio assistant.\n\nI can provide verified details, architecture breakdowns, live demos, and **direct certificate proofs** for his hackathons, projects, internships, and academic results.\n\nHow can I assist you with Nirmal's work?",
    timestamp: 'Just now',
  },
];

const SUGGESTED_PROMPTS = [
  'Proof for Tamil Mandram 24hrs hackathon',
  'WeLe internship selection details',
  'What are his top full-stack projects?',
  'Mist in-plant training certificates',
  'DSA & Coding stats on GFG and LeetCode',
  'Show NPTEL HCI certificate',
];

// Clean any malformed LLM markdown artifacts (dangling asterisks like *School:** or *School** or ***School:**)
function cleanMarkdownText(str: string): string {
  return str
    .replace(/<br\s*\/?>/gi, '\n')
    // Fix triple-star headings: ***Heading:** or ***Heading** -> **Heading:**
    .replace(/(^|[\s•\-])\*\*\*+([a-zA-Z0-9_\-\s]+?):\*\*/g, '$1**$2:**')
    .replace(/(^|[\s•\-])\*\*\*+([a-zA-Z0-9_\-\s]+?)\*\*/g, '$1**$2**')
    // Fix dangling single star before double-star colon: *School:** -> **School:**
    .replace(/(^|[\s•\-])\*([a-zA-Z0-9_\-\s]+?):\*\*/g, '$1**$2:**')
    // Fix single star before double-star: *School** -> **School**
    .replace(/(^|[\s•\-])\*([a-zA-Z0-9_\-\s]+?)\*\*(?!\*)/g, '$1**$2**')
    // Fix stray single asterisks immediately preceding words if not followed by markdown closing: e.g. *Bharathi -> Bharathi
    .replace(/(^|\s)\*([a-zA-Z0-9]+)(?!\*)/g, '$1$2');
}

// Helper to render bold text **text**, with automatic cleanup of malformed asterisks
function renderBold(str: string): React.ReactNode {
  const cleaned = cleanMarkdownText(str);
  const parts = cleaned.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Remove any leftover rogue single asterisks before letters
    return part.replace(/(^|\s)\*([a-zA-Z0-9])/g, '$1$2');
  });
}

// Helper to render inline text with markdown links [Label](URL) and bold formatting
function renderRichInline(content: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = content;
  let matchIdx = 0;

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match: RegExpExecArray | null;
  let lastIndex = 0;

  while ((match = linkRegex.exec(remaining)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <span key={`text-${matchIdx}`}>
          {renderBold(remaining.substring(lastIndex, match.index))}
        </span>
      );
    }

    const label = match[1];
    const url = match[2];
    const isCertificate = url.includes('/certificates') || url.includes('/results');

    parts.push(
      <a
        key={`link-${matchIdx}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded font-mono text-[11px] font-semibold transition-all my-0.5 cursor-pointer select-none group ${
          isCertificate
            ? 'bg-gold/15 text-gold border border-gold/40 hover:bg-gold hover:text-bg-primary shadow-[0_2px_0_0_#b45309]'
            : 'bg-accent/15 text-accent border border-accent/40 hover:bg-accent hover:text-bg-primary shadow-[0_2px_0_0_#0284c7]'
        }`}
        title={`Open ${label} in new tab`}
      >
        {isCertificate && <Award className="w-3 h-3 flex-shrink-0" />}
        <span>{label}</span>
        <ExternalLink className="w-2.5 h-2.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
      </a>
    );

    lastIndex = match.index + match[0].length;
    matchIdx++;
  }

  if (lastIndex < remaining.length) {
    parts.push(
      <span key={`text-end-${matchIdx}`}>
        {renderBold(remaining.substring(lastIndex))}
      </span>
    );
  }

  return parts.length > 0 ? parts : renderBold(content);
}

// Comprehensive message formatter supporting nested lists, <br> normalization, and markdown tables
function FormattedMessage({ text }: { text: string }) {
  const normalized = cleanMarkdownText(text);
  const rawLines = normalized.split('\n');

  // Group lines into blocks (tables vs line paragraphs)
  const blocks: Array<
    | { type: 'table'; headers: string[]; rows: string[][] }
    | { type: 'lines'; lines: string[] }
  > = [];

  let currentTableLines: string[] = [];
  let currentRegularLines: string[] = [];

  const flushRegular = () => {
    if (currentRegularLines.length > 0) {
      blocks.push({ type: 'lines', lines: [...currentRegularLines] });
      currentRegularLines = [];
    }
  };

  const flushTable = () => {
    if (currentTableLines.length >= 2) {
      const headerLine = currentTableLines[0];
      const headers = headerLine
        .split('|')
        .map((s) => s.trim())
        .filter((s, idx, arr) => (idx !== 0 && idx !== arr.length - 1) || s.length > 0);

      const rows: string[][] = [];
      for (let i = 1; i < currentTableLines.length; i++) {
        const rowLine = currentTableLines[i];
        // Skip separator row |---|---|
        if (rowLine.replace(/[|\-\s:]/g, '').length === 0) continue;
        const cells = rowLine
          .split('|')
          .map((s) => s.trim())
          .filter((s, idx, arr) => (idx !== 0 && idx !== arr.length - 1) || s.length > 0);
        if (cells.length > 0) {
          rows.push(cells);
        }
      }

      blocks.push({ type: 'table', headers, rows });
    } else {
      currentRegularLines.push(...currentTableLines);
    }
    currentTableLines = [];
  };

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const trimmed = line.trim();
    const isTableLine = trimmed.startsWith('|') && trimmed.includes('|');

    if (isTableLine) {
      flushRegular();
      currentTableLines.push(line);
    } else {
      if (currentTableLines.length > 0) {
        flushTable();
      }
      currentRegularLines.push(line);
    }
  }

  if (currentTableLines.length > 0) flushTable();
  if (currentRegularLines.length > 0) flushRegular();

  return (
    <div className="space-y-2 text-xs leading-relaxed font-sans">
      {blocks.map((block, bIdx) => {
        if (block.type === 'table') {
          return (
            <div
              key={`table-${bIdx}`}
              className="overflow-x-auto my-2 rounded-lg border border-border-custom bg-bg-secondary/70 shadow-sm"
            >
              <table className="w-full text-left border-collapse text-[11px]">
                <thead className="bg-bg-tertiary border-b border-border-custom text-text-primary">
                  <tr>
                    {block.headers.map((h, hIdx) => (
                      <th key={hIdx} className="p-2.5 font-semibold whitespace-nowrap">
                        {renderRichInline(h)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-custom">
                  {block.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-bg-tertiary/40 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-2.5 align-top">
                          {renderRichInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        return (
          <div key={`lines-${bIdx}`} className="space-y-1">
            {block.lines.map((line, lIdx) => {
              if (!line.trim()) return <div key={lIdx} className="h-1" />;

              const trimmed = line.trim();
              const leadingSpaces = line.search(/\S/);
              // Bullet detection: ONLY single bullet symbols (•, -, or * followed by space, NOT **)
              const starBulletMatch = trimmed.match(/^\*(?!\*)\s+/);
              const dashBulletMatch = trimmed.match(/^-\s+/);
              const numBulletMatch = trimmed.match(/^(\d+[\.\)])\s+/);
              const isBullet =
                !trimmed.startsWith('**') &&
                (trimmed.startsWith('•') ||
                  Boolean(starBulletMatch) ||
                  Boolean(dashBulletMatch) ||
                  Boolean(numBulletMatch));

              const isSubBullet =
                isBullet && (leadingSpaces >= 2 || line.startsWith('  ') || line.startsWith('\t'));

              let cleanLine = trimmed;
              if (isBullet) {
                if (trimmed.startsWith('•')) {
                  cleanLine = trimmed.replace(/^•\s*/, '');
                } else if (starBulletMatch) {
                  cleanLine = trimmed.slice(starBulletMatch[0].length);
                } else if (dashBulletMatch) {
                  cleanLine = trimmed.slice(dashBulletMatch[0].length);
                } else if (numBulletMatch) {
                  cleanLine = trimmed.slice(numBulletMatch[0].length);
                }
              }

              return (
                <div
                  key={lIdx}
                  className={`${
                    isSubBullet
                      ? 'pl-5 flex items-start gap-1.5'
                      : isBullet
                      ? 'pl-1.5 flex items-start gap-1.5'
                      : ''
                  }`}
                >
                  {isBullet && (
                    <span
                      className={`font-bold mt-0.5 flex-shrink-0 ${
                        isSubBullet ? 'text-text-muted text-[10px]' : 'text-accent'
                      }`}
                    >
                      {isSubBullet ? '–' : '•'}
                    </span>
                  )}
                  <div className="flex-1 flex-wrap items-center gap-1">
                    {renderRichInline(cleanLine)}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

const DEFAULT_CLIENT_KEY = (import.meta.env.VITE_GROQ_API_KEY as string) || '';

async function requestChatResponse(
  conversationHistory: Array<{ role: string; content: string }>,
  apiKey?: string
): Promise<string | null> {
  const activeKey = apiKey?.trim() || DEFAULT_CLIENT_KEY;

  // 1. First try serverless / dev-proxy endpoint
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: conversationHistory,
        apiKey: activeKey || undefined,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.status === 'success' && data.reply) {
        return data.reply;
      }
    }
  } catch {
    // Continue to direct client-side Groq call
  }

  // 2. Direct client-side fetch to Groq API via CORS
  if (activeKey) {
    try {
      let groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${activeKey}`,
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b',
          messages: conversationHistory,
          temperature: 0.3,
          max_tokens: 1024,
        }),
      });

      if (!groqRes.ok) {
        if (groqRes.status === 429) {
          await new Promise((r) => setTimeout(r, 1000));
        }

        groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${activeKey}`,
          },
          body: JSON.stringify({
            model: 'openai/gpt-oss-20b',
            messages: conversationHistory,
            temperature: 0.3,
            max_tokens: 1024,
          }),
        });
      }

      if (groqRes.ok) {
        const groqData = await groqRes.json();
        const reply = groqData?.choices?.[0]?.message?.content;
        if (reply) return reply;
      }
    } catch {
      // Direct call failed
    }
  }

  return null;
}

const STORAGE_COOLDOWN_KEY = 'nkv_chat_cooldown_until';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [groqKey, setGroqKey] = useState<string>('');
  const [showSettings, setShowSettings] = useState(false);
  const [keySaved, setKeySaved] = useState(false);

  // Initialize cooldown remaining from localStorage so page refreshes preserve punishment
  const [cooldown, setCooldown] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_COOLDOWN_KEY);
      if (stored) {
        const remaining = Math.ceil((parseInt(stored, 10) - Date.now()) / 1000);
        return remaining > 0 ? remaining : 0;
      }
    } catch {
      // Ignore
    }
    return 0;
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('nkv_groq_key') || '';
    if (saved) setGroqKey(saved);
  }, []);

  const saveKey = (val: string) => {
    setGroqKey(val);
    localStorage.setItem('nkv_groq_key', val.trim());
    setKeySaved(true);
    setTimeout(() => setKeySaved(false), 2000);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => textareaRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const triggerCooldown = (seconds = 10) => {
    const until = Date.now() + seconds * 1000;
    try {
      localStorage.setItem(STORAGE_COOLDOWN_KEY, String(until));
    } catch {
      // Ignore
    }
    setCooldown(seconds);
  };

  // Real-time synced 10-Second Penalty Cooldown (survives page reloads)
  useEffect(() => {
    const checkTimer = () => {
      try {
        const stored = localStorage.getItem(STORAGE_COOLDOWN_KEY);
        if (stored) {
          const remaining = Math.ceil((parseInt(stored, 10) - Date.now()) / 1000);
          if (remaining > 0) {
            setCooldown(remaining);
          } else {
            setCooldown(0);
            localStorage.removeItem(STORAGE_COOLDOWN_KEY);
          }
        } else if (cooldown > 0) {
          setCooldown(0);
        }
      } catch {
        // Fallback
      }
    };

    checkTimer();
    if (cooldown <= 0) return;

    const timer = setInterval(checkTimer, 500);
    return () => clearInterval(timer);
  }, [cooldown]);

  const checkPunishmentTrigger = (query: string, reply: string): boolean => {
    const q = query.toLowerCase();
    const r = reply.toLowerCase();

    const sensitiveWords = [
      'api key',
      'apikey',
      'groq key',
      'groq_api_key',
      'secret',
      'token',
      'password',
      'father',
      'mother',
      'parent',
      'parents',
      'family',
      'dad',
      'mom',
      'sister',
      'brother',
      'relative',
      'relatives',
      'home address',
      'phone number',
      'mobile number',
      'girlfriend',
      'salary',
      'income',
      'prompt injection',
      'system prompt',
      'jailbreak',
      'ignore previous instructions',
      'dont roast',
      'reply actually',
      'tell me actually',
      'tell actually',
      'answer actually',
      'say actually',
    ];

    const isSensitiveQuery = sensitiveWords.some((word) => q.includes(word));

    const roastReplies = [
      'get a life',
      'poor boy',
      'nice try',
      'script kiddie',
      'touch grass',
      'off-limits',
      'strictly off-limits',
      'family registry',
      'clock cycles',
      'dont roast',
      'reply actually',
      'family details',
      'private family',
      'punishment',
      'can’t share that information',
      "can't share that information",
      'cannot share that information',
    ];

    const isRoastReply = roastReplies.some((phrase) => r.includes(phrase));

    return isSensitiveQuery || isRoastReply;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    const storedCooldown = localStorage.getItem(STORAGE_COOLDOWN_KEY);
    const isLockedByStorage = storedCooldown && parseInt(storedCooldown, 10) > Date.now();
    if (!textToSend.trim() || isLoading || cooldown > 0 || isLockedByStorage) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    setIsLoading(true);

    try {
      // Build conversation history for API
      const conversationHistory = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
          .filter((m) => m.id !== 'welcome')
          .slice(-8)
          .map((m) => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text,
          })),
        { role: 'user', content: textToSend.trim() },
      ];

      const apiReply = await requestChatResponse(conversationHistory, groqKey);
      const botReply = apiReply || getOfflineAnswer(textToSend, [...messages, userMsg]);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);

      // Trigger 10-second punishment cooldown if inappropriate / roasted
      if (checkPunishmentTrigger(textToSend, botReply)) {
        triggerCooldown(10);
      }
    } catch {
      // Graceful fallback to verified offline answer with memory
      const fallbackReply = getOfflineAnswer(textToSend, [...messages, userMsg]);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: fallbackReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);

      if (checkPunishmentTrigger(textToSend, fallbackReply)) {
        triggerCooldown(10);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    // Preserves active punishment cooldown even on reset
  };

  return (
    <>
      {/* Floating Action Button (Launcher) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card/90 border border-accent/30 text-xs font-mono text-text-primary shadow-lg backdrop-blur-md hover:border-accent hover:bg-accent/10 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span>Ask Nirmal AI</span>
          </motion.button>
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative p-3.5 sm:p-4 rounded-full shadow-[0_0_25px_rgba(56,189,248,0.3)] border transition-all cursor-pointer flex items-center justify-center ${
            isOpen
              ? 'bg-bg-card border-accent text-accent'
              : 'bg-accent text-bg-primary border-accent-light hover:brightness-110'
          }`}
          aria-label={isOpen ? 'Close assistant' : 'Open Nirmal AI assistant'}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-accent" />
          ) : (
            <>
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald rounded-full border-2 border-bg-primary animate-pulse" />
            </>
          )}
        </motion.button>
      </div>

      {/* Floating Glassmorphism Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[82vh] bg-bg-primary/95 border border-accent/40 rounded-2xl shadow-[0_12px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="p-3.5 sm:p-4 border-b border-border bg-bg-card/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-text-primary truncate">Nirmal AI</h3>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald px-1.5 py-0.2 rounded bg-emerald-500/10 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                      Active
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-text-tertiary truncate">
                    Portfolio Assistant & Verified Proofs
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  title="Configure Groq AI API Key"
                  className={`p-1.5 rounded hover:bg-white/5 transition-colors cursor-pointer text-text-tertiary hover:text-text-primary ${
                    showSettings ? 'text-accent bg-accent/10' : ''
                  }`}
                >
                  <Key className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  className="p-1.5 rounded hover:bg-white/5 transition-colors cursor-pointer text-text-tertiary hover:text-text-primary"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded hover:bg-white/5 transition-colors cursor-pointer text-text-tertiary hover:text-text-primary"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* API Key Configuration Drawer */}
            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-b border-border bg-bg-secondary/90 p-3.5 space-y-2 text-xs font-mono"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-text-primary flex items-center gap-1.5">
                      <Key className="w-3.5 h-3.5 text-accent" />
                      Groq API Key (Optional)
                    </span>
                    {keySaved && (
                      <span className="text-[10px] text-emerald flex items-center gap-1">
                        <Check className="w-3 h-3" /> Saved!
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-text-tertiary leading-normal font-sans">
                    Leave blank to use the built-in verified portfolio engine, or paste your Groq key (
                    <a
                      href="https://console.groq.com/keys"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline"
                    >
                      console.groq.com
                    </a>
                    ) for ultra-fast Llama-3.3 intelligence.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value={groqKey}
                      onChange={(e) => setGroqKey(e.target.value)}
                      placeholder="gsk_..."
                      className="flex-1 px-2.5 py-1 rounded bg-bg-card border border-border text-xs font-mono text-text-primary focus:outline-none focus:border-accent"
                    />
                    <button
                      onClick={() => saveKey(groqKey)}
                      className="px-3 py-1 rounded bg-accent text-bg-primary text-xs font-bold hover:bg-accent-light transition-colors cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Suggestion Chips */}
            <div className="px-3 pt-2.5 pb-2 border-b border-border/40 bg-bg-secondary/40 flex gap-1.5 overflow-x-auto no-scrollbar">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-bg-card border border-border hover:border-accent/40 text-[10px] font-mono text-text-secondary hover:text-text-primary transition-all cursor-pointer flex-shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 sm:p-3.5 shadow-sm ${
                      m.sender === 'user'
                        ? 'bg-accent text-bg-primary font-mono text-xs font-medium rounded-tr-none shadow-[0_2px_0_0_#0284c7]'
                        : 'bg-bg-card border border-border text-text-primary rounded-tl-none'
                    }`}
                  >
                    {m.sender === 'user' ? (
                      <p className="whitespace-pre-wrap">{m.text}</p>
                    ) : (
                      <FormattedMessage text={m.text} />
                    )}
                  </div>
                  <span className="text-[9px] font-mono text-text-tertiary mt-1 px-1">
                    {m.timestamp}
                  </span>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 p-3 rounded-2xl rounded-tl-none bg-bg-card border border-border text-text-tertiary text-xs max-w-[120px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input & Form */}
            <div className="p-3 border-t border-border bg-bg-card/70">
              {/* Cooldown / Punishment Banner */}
              <AnimatePresence>
                {cooldown > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 5 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 5 }}
                    className="mb-2 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-[11px] font-mono flex items-center justify-between"
                  >
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 animate-spin text-red-400" />
                      <span>Penalty cooldown active — input locked:</span>
                    </span>
                    <span className="font-bold text-xs bg-red-500/20 px-2 py-0.5 rounded text-red-300">
                      {cooldown}s
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-end gap-2"
              >
                <textarea
                  ref={textareaRef}
                  rows={1}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    cooldown > 0
                      ? `Penalty cooldown active... wait ${cooldown}s (persists across refresh)`
                      : 'Ask about hackathons, proof, projects, skills... (Shift+Enter for newline)'
                  }
                  disabled={isLoading || cooldown > 0}
                  className="flex-1 px-3.5 py-2.5 rounded-lg bg-bg-secondary border border-border text-xs text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors disabled:opacity-50 resize-none max-h-[120px] leading-relaxed"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || cooldown > 0}
                  className="p-2.5 rounded-lg bg-accent text-bg-primary hover:bg-accent-light active:bg-accent-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-[0_2px_0_0_#0284c7] flex-shrink-0 mb-0.5"
                  aria-label="Send message"
                  title={cooldown > 0 ? `Locked for ${cooldown}s` : 'Send message'}
                >
                  {cooldown > 0 ? (
                    <Clock className="w-4 h-4 text-bg-primary" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </form>
              <div className="flex items-center justify-between text-[10px] font-mono text-text-tertiary mt-2 px-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald" />
                  Enter ↵ to send • Shift+Enter for newline
                </span>
                <span>Powered by Groq</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
