import express from 'express';
import { getUsers } from '../controllers/users';

const router = express.Router();

// Define the GET route for users
router.get('/users', getUsers);

export default router;