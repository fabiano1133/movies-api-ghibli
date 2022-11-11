import { MoviesRepositories } from './domain/movies/repositories/implementations/MoviesRepositories';

export const getFilms = async () => {
    const moviesRepositories = new MoviesRepositories();

    await moviesRepositories.getFilmsAPI();
};
