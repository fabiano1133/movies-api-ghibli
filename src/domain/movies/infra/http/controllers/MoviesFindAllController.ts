import { Request, Response } from 'express';
import { MoviesFindAll } from '../../../../useCases/MoviesFindAll';

export class MoviesFindAllController {
    async handle(request: Request, response: Response): Promise<Response> {
        const moviesFindAll = new MoviesFindAll();

        const limtValue = Number(request.query.limit);

        const pageValue = Number(request.query.page);

        const films = await moviesFindAll.execute(limtValue, pageValue);

        return response.json(films);
    }
}
