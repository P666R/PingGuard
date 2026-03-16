import cors from 'cors';
import express from 'express';

const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    service: 'pingguard-api',
    time: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`API → http://localhost:${port}`);
  console.log(`Health check: http://localhost:${port}/api/health`);
});
