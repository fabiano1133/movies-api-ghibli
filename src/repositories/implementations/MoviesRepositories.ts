import { Movie } from '../../domain/movies/models/movies-schema';
import { IMoviesRepository } from '../IMoviesRepository';
import { api } from '../../config/api/api';

export class MoviesRepositories implements IMoviesRepository {
    async getFilms(): Promise<void> {
        const response = await api.get('/films');

        const film = await response.data.map((film: any) => {
            return {
                title: film.title,
                originalTitle: film.original_title,
                description: film.description,
                releaseDate: film.release_date,
                rate_score: film.rt_score,
            };
        });
        await Movie.insertMany(film);
    }
}
