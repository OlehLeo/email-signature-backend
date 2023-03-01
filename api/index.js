import express from 'express';
import cors from 'cors';

import router from './router.js';

const app = express();

app.use(cors());
app.use(router);

module.exports = app;
