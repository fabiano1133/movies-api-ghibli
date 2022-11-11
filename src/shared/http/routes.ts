import { Router } from 'express';
import { MoviesFindAllController } from '../../domain/infra/http/controllers/MoviesFindAllController';

export const movieRouter = Router();

const moviesFindAllController = new MoviesFindAllController();

movieRouter.get('/movies', moviesFindAllController.handle);
