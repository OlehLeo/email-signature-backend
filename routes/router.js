import express from 'express';

import templateController from './template';

const router = express.Router();

router.use('/template', templateController);

export default router;
