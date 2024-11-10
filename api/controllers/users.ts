import knex from 'knex';
import { Request, Response } from 'express';
import knexConfig from '../knexfile'; // Import your Knex config directly

// Initialize Knex with the appropriate environment configuration
const db = knex(knexConfig.development); // or use knexConfig[process.env.NODE_ENV || 'development'] if you're working with multiple environments

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await db('users').select('*'); // Ensure 'users' is the correct table name
    console.log(users);
    
    res.status(200).json(users); // Uncomment this line to send response back to the client
  } catch (err: any) {
    res.status(400).send(`Error retrieving user: ${err.message}`);
  }
};

export { getUsers };