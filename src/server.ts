import * as dotenv from 'dotenv';
import express from 'express';
import { getFilms } from './jobs';

dotenv.config();

const app = express();
app.use(express.json());

getFilms();

app.get('/', (req, res) => {
    res.send('Aplication running');
});

app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
