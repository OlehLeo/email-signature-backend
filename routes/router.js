import express from 'express';
// import bodyParser from 'body-parser';

//import templateController from '../controllers/template.js';

const router = express.Router();

// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json({ limit: '50mb' }));

router.get('/', async function (req, res) {
  res.send(`<h1>Hello from homepage!</h1>`);
});

router.get('/test', async function (req, res) {
  res.send(`<h1>Hello from test endpoint!</h1>`);
});
// router.use('/template', templateController);

module.exports = router;
