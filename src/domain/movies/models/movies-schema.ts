import mongoose from 'mongoose';

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

export const Movie = mongoose.model<IMovie>('Movie', movieSchema);
