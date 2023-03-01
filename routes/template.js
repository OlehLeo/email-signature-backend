import express from 'express';

import { templates } from '../templates/index.js';

const router = express.Router();

router.get('/', async function (req, res) {
  const defaultForm = {
    fullName: 'Full name',
    jobTitle: 'Job title',
    company: 'company',
    email: 'adress@email.com',
    phone: '+972435323043',
    address: 'My office address'
  };

  const allTemplates = templates.map((template) => {
    const title = template.title;
    const html = template.generate(defaultForm);
    return { title, html };
  });
  res.send(allTemplates);
});

router.post('/', async function (req, res) {
  const { form, templateTitle } = req.body;

  const template = templates.find((template) => template.title === templateTitle);
  const html = template.generate(form);
  res.send({ html });
});

export default router;
