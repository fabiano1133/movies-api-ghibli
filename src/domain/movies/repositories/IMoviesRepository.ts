import { IMovie, IMovieDocument } from '../models/movies-schema';
export interface IMoviesRepository {
    save(films: IMovie): Promise<void>;
    getFilms(limit: number, page: number): Promise<IMovie[]>;
}
