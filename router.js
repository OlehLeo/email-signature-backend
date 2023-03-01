import express from 'express';
import bodyParser from 'body-parser';

import templateController from './controllers/template.js';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json({ limit: '50mb' }));

router.use('/template', templateController);

export default router;
