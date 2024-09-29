import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import userRoute from './routes/user.route.js';
import { users } from './controllers/user.controller.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res) =>
	res.json({ message: 'you are in home page navigate to register' }),
);

app.use('/register', userRoute);

app.get('/users', users);

app.listen(5000, () => {
	console.log(`App is listening at port 5000`);
});
