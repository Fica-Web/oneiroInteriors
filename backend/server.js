import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import adminRouter from './routers/adminRouter.js';
import blogsRouter from './routers/blogsRouter.js';
import carousalRouter from './routers/carousalRouter.js';
import completedProjectRouter from './routers/completedProjectRoutes.js';
import messageRouter from './routers/messageRouter.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Connecting MongoDB
connectDB();

// CORS options to allow requests from specific origin
const corsOptions = {
    origin: ['http://localhost:5173', 'http://oneirointeriors.in', 'https://oneirointeriors.in', 'https://www.oneirointeriors.in',], // Allow requests from this frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Include cookies in requests
};

// Middleware setup
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser()); // Parse cookies from incoming requests
app.use(morgan('tiny')); // Log HTTP requests using morgan's 'tiny' format
app.use(cors(corsOptions)); // Enable CORS using the specified options

// Define route handlers
app.use('/api/admin', adminRouter); // Routes for admin-specific functionalities
app.use('/api/blogs', blogsRouter); // Routes for blogs-specific functionalities
app.use('/api/carousel', carousalRouter); // Routes for carousal-specific functionalities
app.use('/api/projects', completedProjectRouter); // Routes for completed works
app.use('/api/messages', messageRouter); // Routes for completed works

app.get('/', (req, res) => {
    res.send('server is running')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})