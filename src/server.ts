import express from 'express';
import * as dotenv from 'dotenv';
import { getFilms } from './jobs';

dotenv.config();

const app = express();

getFilms();

app.get('/', (req, res) => {
    res.send('Aplication running');
});

app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
