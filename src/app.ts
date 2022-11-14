import * as dotenv from 'dotenv';
import express from 'express';
import { database } from './config/database';
import { getFilms } from './jobs';
import { movieRouter } from './shared/http/routes/routes';
import swaggerUI from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from './config/swagger/swagger-options';

dotenv.config();

database();

export const app = express();
app.use(express.json());

app.use(movieRouter);

getFilms();

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.get('/', (req, res) => {
    res.send('Aplication running');
});
