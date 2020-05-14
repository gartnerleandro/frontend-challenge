import express from 'express';
import cors from 'cors';

import categories from './db/categories.json';

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/categories', (req, res) => res.json(categories));

app.listen(port, () => console.log(`Server running on port ${port}! 🚀`));
