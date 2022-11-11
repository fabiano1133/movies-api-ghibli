import { IMovie } from '../models/movies-schema';

export interface IMoviesRepository {
    save(films: IMovie): Promise<void>;
    getFilms(): Promise<IMovie[]>;
}
