import express from 'express';

const templateController = require('./template');

const router = express.Router();

router.use('/template', templateController);

module.exports = router;
