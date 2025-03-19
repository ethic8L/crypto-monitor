import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/jwt-db');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Failed to connect to MongoDB', err);
});

export default mongoose;

