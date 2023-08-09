import express, { Router } from 'express'; // Correct the import of Router
import { createResidency, getAllResidencies, getResidency } from '../controllers/residencyController.js';

const router = Router(); // Use Router() with a capital "R"

router.post ("/create",createResidency)
router.get("/allresd", getAllResidencies)
router.get("/:id", getResidency)
export { router as residencyRoute };  