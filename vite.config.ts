import { defineConfig, Plugin } from 'vite';
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
            res.end(JSON.stringify({ error: err.message }));
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    apiDevServerPlugin(),
  ],
});
