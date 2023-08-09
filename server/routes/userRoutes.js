import express, { Router } from 'express'; // Correct the import of Router
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavorites, toFav } from '../controllers/userController.js';

const router = Router(); // Use Router() with a capital "R"

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings",getAllBookings);
router.post("/removeBooking/:id",cancelBooking);
router.post("/addFev/:rid",toFav);
router.post("/allFev/",getAllFavorites);

export { router as userRoute };
