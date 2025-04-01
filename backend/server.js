import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

import authRoutes from './Routes/authRoutes.js'
import connection from './Config/D.js'
dotenv.config();

connection();


const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});