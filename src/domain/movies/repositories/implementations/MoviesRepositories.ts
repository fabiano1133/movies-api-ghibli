import { IMovie, Movie } from '../../models/movies-schema';
import { IMoviesRepository } from '../IMoviesRepository';
import { api } from '../../../../config/api/api';

export class MoviesRepositories implements IMoviesRepository {
    async getFilms(): Promise<IMovie[]> {
        const films = await Movie.find();

        return films;
    }

    async save(films: IMovie): Promise<void> {
        await Movie.insertMany(films);
    }
}
