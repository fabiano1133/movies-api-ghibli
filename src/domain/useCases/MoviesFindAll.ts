import { IMovie } from '../movies/models/movies-schema';

import { MoviesRepositories } from '../movies/repositories/implementations/MoviesRepositories';

export class MoviesFindAll {
    async execute(limit: number, page: number): Promise<IMovie[]> {
        const repositorie = new MoviesRepositories();

        const films = await repositorie.getFilms(limit, page);

        return films;
    }
}
