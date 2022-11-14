import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IMovie {
    title: string;
    originalTitle: string;
    description: string;
    releaseDate: string;
    rate_score: string;
}
const movieSchema = new mongoose.Schema<IMovie>({
    title: {
        type: String,
        required: true,
    },

    originalTitle: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    releaseDate: {
        type: String,
        required: true,
    },
    rate_score: {
        type: String,
        required: true,
    },
});

movieSchema.plugin(paginate);

export interface IMovieDocument extends mongoose.Document, IMovie {}

export const Movie = mongoose.model<IMovie, mongoose.PaginateModel<IMovieDocument>>(
    'Movie',
    movieSchema
);
