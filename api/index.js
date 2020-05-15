import express from 'express';
import cors from 'cors';

import categories from './db/categories.json';

const app = express();
const port = 3001;
const emailRegex = /^([a-zA-Z0-9_.+]+)@([a-zA-Z0-9]+)(\.+[a-zA-Z]{2,})$/i;
const hotmailRegex = /^([a-zA-Z0-9_.+]+)@(hotmail)(\.+[a-zA-Z]{2,})$/i;

app.use(cors());

app.get('/api/categories', (req, res) => res.json(categories));

app.get('/api/validateEmail', (req, res) => {
  if (
    req?.query?.email
    && emailRegex.test(req.query.email)
    && !hotmailRegex.test(req.query.email)
  ) {
    return res.json({ isValid: true });
  }

  return res.json({ isValid: false });
});

app.listen(port, () => console.log(`Server running on port ${port}! 🚀`));
