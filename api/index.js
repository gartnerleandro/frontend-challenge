import express from 'express';

import categories from './db/categories.json';

const app = express();
const port = 3001;

app.get('/api/categories', (req, res) => res.status(200).send(categories));

app.listen(port, () => console.log(`Server running on port ${port}! 🚀`));
