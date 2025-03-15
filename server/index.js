import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connection from './db.js'; // Dodaj `.js`, bo w ES module rozszerzenie jest wymagane
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

dotenv.config();

// db connection
connection();

// middleware
const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
