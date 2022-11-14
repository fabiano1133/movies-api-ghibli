import { Router } from 'express';
import { MoviesFindAllController } from '../../../domain/movies/infra/http/controllers/MoviesFindAllController';

export const movieRouter = Router();

const moviesFindAllController = new MoviesFindAllController();

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Return a list of movies
 *     tags: [Movies]
 *     parameters:
 *      - in: query
 *        name: limit
 *      - in: query
 *        name: page
 *     responses:
 *       200:
 *         description: the list of movies
 *         content:
 *            application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 * components:
 *  schemas:
 *    Movie:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       title:
 *         type: string
 *       originalTitle:
 *         type: string
 *       description:
 *         type: string
 *       releadeDate:
 *         type: string
 *       rate_score:
 *         type: string
 *
 */
movieRouter.get('/movies', moviesFindAllController.handle);
