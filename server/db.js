import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log('Connected to database');
    } catch (error) {
        console.error('Could not connect to database', error);
    }
};

export default connectDB;
