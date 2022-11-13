import mongoose from 'mongoose';

export const database = async () => {
    mongoose.connect(`${process.env.MONGO_URL}/movies_api_mongodb`);

    mongoose.connection.on('connected', () => {
        console.log('############### Connected to database ###############');
    });

    mongoose.connection.on('error', err => {
        console.log(`ERROR: ${err}`);
    });
};
