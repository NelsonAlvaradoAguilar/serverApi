import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import usersRoutes from './routes/usersRoutes'; // Corrected to include semicolon

// Load environment variables from a .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8989;

app.use(express.json());


app.use('/api', usersRoutes);

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});