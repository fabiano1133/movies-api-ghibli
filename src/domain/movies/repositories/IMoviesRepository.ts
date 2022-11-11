import { IMovie } from '../models/movies-schema';

export interface IMoviesRepository {
    getFilmsAPI(): Promise<void>;
    getFilms(): Promise<IMovie[]>;
}
