import express from 'express';
import http from 'http';
import cors from 'cors';

import router from './router.js';
import { config } from './config.js';

const app = express();
app.use(cors());
app.use(router);

const httpServer = http.createServer({}, app);
httpServer.listen(config.port, () => console.log(`Api started on port ${config.port}`));
