import { IMovie } from '../movies/models/movies-schema';

import { MoviesRepositories } from '../movies/repositories/implementations/MoviesRepositories';

export class MoviesFindAll {
    async execute(): Promise<IMovie[]> {
        const repositorie = new MoviesRepositories();

        const films = await repositorie.getFilms();

        return films;
    }
}
