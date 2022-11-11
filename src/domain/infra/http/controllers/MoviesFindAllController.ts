import { Request, Response } from 'express';
import { MoviesFindAll } from '../../../useCases/MoviesFindAll';

export class MoviesFindAllController {
    async handle(request: Request, response: Response): Promise<Response> {
        const moviesFindAll = new MoviesFindAll();

        const films = await moviesFindAll.execute();

        return response.json(films);
    }
}
