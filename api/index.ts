import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import usersRoutes from './routes/usersRoutes'; // Corrected to include semicolon
import path = require('path');
import cors from 'cors';
// Load environment variables from a .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8989;
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
};

app.use(cors(corsOptions)); 
app.use('/api', usersRoutes);

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});