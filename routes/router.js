import express from 'express';

import templateController from './template.js';

const router = express.Router();

router.use('/template', templateController);

export default router;
