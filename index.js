import express from 'express';
import cors from 'cors';

import config from './config.js';
import authRoute from './routes/authRoute.js';
import productRoute from './routes/productRoute.js';
import memberRoute from './routes/memberRoute.js';
import taskRoute from './routes/taskRoute.js';
import memberTaskRoute from './routes/memberTaskRoute.js'

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/members', memberRoute);
app.use('/api/tasks', taskRoute);
app.use('/api/member-task', memberTaskRoute);

console.log(app)

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
