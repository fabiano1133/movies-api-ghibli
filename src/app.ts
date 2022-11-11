import * as dotenv from 'dotenv';
import express from 'express';
import { database } from './config/database';
import { getFilms } from './jobs';
import { movieRouter } from './shared/http/routes';

dotenv.config();
database();

export const app = express();
app.use(express.json());

app.use(movieRouter);

getFilms();

app.get('/', (req, res) => {
    res.send('Aplication running');
});
