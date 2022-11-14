import { IMovie, IMovieDocument, Movie } from '../../models/movies-schema';
import { IMoviesRepository } from '../IMoviesRepository';

export class MoviesRepositories implements IMoviesRepository {
    async getFilms(limit: number, page: number): Promise<any> {
        const limitValue = limit || 5;

        const valuePage = page || 1;

        const movies = Movie.paginate(
            {},
            {
                limit: limitValue,
                page: valuePage,
                sort: { releaseDate: 'desc' },
                collation: { locale: 'en' },
            }
        );

        return movies;
    }

    async save(films: IMovie): Promise<void> {
        await Movie.insertMany(films);
    }
}
