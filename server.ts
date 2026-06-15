import express from 'express';
import path from 'path';

const app = express();
const PORT = parseInt(process.env.PORT || '3001');

app.use(express.static(path.join(import.meta.dirname, 'dist')));

app.get('{*path}', (_req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`chill-mbti → http://localhost:${PORT}`);
});
