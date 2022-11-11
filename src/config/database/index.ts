import mongoose from 'mongoose';

export const database = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/movies_api_mongodb', () =>
            console.log('Database connected')
        );
    } catch (error) {
        console.log(error);
    }
};
