import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function apiDevServerPlugin(): Plugin {
  return {
    name: 'api-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/api/leetcode') {
          try {
            const { default: handler } = await import('./api/leetcode.js');
            // Mock express-like json response helper for connect middleware
            (res as any).json = (data: any) => {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            };
            (res as any).status = (code: number) => {
              res.statusCode = code;
              return res;
            };
            return handler(req, res);
          } catch (err: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
            return;
          }
        }
        if (url === '/api/geeksforgeeks') {
          try {
            const { default: handler } = await import('./api/geeksforgeeks.js');
            (res as any).json = (data: any) => {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            };
            (res as any).status = (code: number) => {
              res.statusCode = code;
              return res;
            };
            return handler(req, res);
          } catch (err: any) {
            res.statusCode = 500;
            return;
          }
        }
        if (url === '/api/chat') {
          try {
            let bodyStr = '';
            req.on('data', (chunk) => {
              bodyStr += chunk;
            });
            req.on('end', async () => {
              try {
                (req as any).body = bodyStr ? JSON.parse(bodyStr) : {};
              } catch {
                (req as any).body = {};
              }
              const { default: handler } = await import('./api/chat.js');
              (res as any).json = (data: any) => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
              };
              (res as any).status = (code: number) => {
                res.statusCode = code;
                return res;
              };
              await handler(req, res);
            });
            return;
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message }));
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (env.GROQ_API_KEY && !process.env.GROQ_API_KEY) {
    process.env.GROQ_API_KEY = env.GROQ_API_KEY;
  }
  return {
    plugins: [
      react(),
      tailwindcss(),
      apiDevServerPlugin(),
    ],
  };
});
