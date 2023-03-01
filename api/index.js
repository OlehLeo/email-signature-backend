import express from 'express';
import cors from 'cors';

import router from './router.js';

const app = express();

app.get('/api/test', (req, res) => {
  res.end('Welcome from test endpoint');
});

app.use(cors());
app.use(router);

module.exports = app;
