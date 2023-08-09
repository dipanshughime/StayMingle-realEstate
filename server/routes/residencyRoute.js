import express, { Router } from 'express'; // Correct the import of Router
import { createResidency } from '../controllers/residencyController.js';

const router = Router(); // Use Router() with a capital "R"

router.post ("/create",createResidency)
export { router as residencyRoute };  