import express, { Router } from 'express'; // Correct the import of Router
import { bookVisit, cancelBooking, createUser, getAllBookings } from '../controllers/userController.js';

const router = Router(); // Use Router() with a capital "R"

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings",getAllBookings);
router.post("/removeBooking/:id",cancelBooking);
export { router as userRoute };
