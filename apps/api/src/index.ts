import cors from 'cors';
import express from 'express';

const app = express();

const PORT = process.env['PORT'];
const NODE_ENV = process.env['NODE_ENV'];

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    service: 'pingguard-api',
    time: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`API → http://localhost:${PORT} [mode: ${NODE_ENV}]`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
