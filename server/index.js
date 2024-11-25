import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from "./Routes/authRoutes.js"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = 8080;
const databaseURL = process.env.DATABASE_URL;



app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());

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
