import { MoviesRepositories } from './repositories/implementations/MoviesRepositories';

export const getFilms = async () => {
    const moviesRepositories = new MoviesRepositories();

    await moviesRepositories.getFilms();
};
