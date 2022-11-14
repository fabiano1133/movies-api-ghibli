import { api } from './config/api/api';
import { MoviesRepositories } from './domain/movies/repositories/implementations/MoviesRepositories';

export const getFilms = async () => {
    try {
        const repositorie = new MoviesRepositories();

        const response = await api.get('/films?limit=200');

        const films = await response.data.map((film: any) => {
            return {
                title: film.title,
                originalTitle: film.original_title,
                description: film.description,
                releaseDate: film.release_date,
                rate_score: film.rt_score,
            };
        });
        console.log(`Films saved: ${films.length}`);
        await repositorie.save(films);
    } catch (error) {
        return error;
    }
};
