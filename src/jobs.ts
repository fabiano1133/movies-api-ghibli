import { api } from './config/api/api';
import { MoviesRepositories } from './domain/movies/repositories/implementations/MoviesRepositories';

export const getFilms = async () => {
    const repositorie = new MoviesRepositories();

    const response = await api.get('/films');

    const films = await response.data.map((film: any) => {
        return {
            title: film.title,
            originalTitle: film.original_title,
            description: film.description,
            releaseDate: film.release_date,
            rate_score: film.rt_score,
        };
    });
    await repositorie.save(films);
};
