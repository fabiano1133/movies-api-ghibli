import { IMovie, Movie } from '../../models/movies-schema';
import { IMoviesRepository } from '../IMoviesRepository';

export class MoviesRepositories implements IMoviesRepository {
    async getFilms(): Promise<IMovie[]> {
        const films = await Movie.find();

        return films;
    }

    async save(films: IMovie): Promise<void> {
        await Movie.insertMany(films);
    }
}
