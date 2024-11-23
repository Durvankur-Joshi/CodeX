import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from "./Routes/authRoutes.js"

dotenv.config();

const app = express();
const port = 3000;
const databaseURL = process.env.DATABASE_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Database Connection
mongoose
  .connect(databaseURL)
  .then(() => console.log('Database is Connected'))
  .catch((err) => console.log(err.message));

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
