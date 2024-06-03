import express from 'express'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js'

const app = express();

app.use(morgan('dev'));

app.use(express.json());//convertir los requiest body en formato json
app.use(cookieParser());//convertir los requiest body en formato json para cookies

app.use("/api", authRoutes);


export default app;