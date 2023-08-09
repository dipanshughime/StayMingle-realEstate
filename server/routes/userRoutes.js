import express, { Router } from 'express'; // Correct the import of Router
import { createUser } from '../controllers/userController.js';

const router = Router(); // Use Router() with a capital "R"

router.post("/register", createUser);

export { router as userRoute };
