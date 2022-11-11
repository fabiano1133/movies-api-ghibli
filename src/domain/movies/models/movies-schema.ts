import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
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

export const Movie = mongoose.model('Movie', movieSchema);
