import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/connectDB.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Connecting MongoDB
connectDB();

// CORS options to allow requests from specific origin
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174',], // Allow requests from this frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Include cookies in requests
};

// Middleware setup
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
// app.use(cookieParser()); // Parse cookies from incoming requests
app.use(morgan('tiny')); // Log HTTP requests using morgan's 'tiny' format
app.use(cors(corsOptions)); // Enable CORS using the specified options

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})