import express from 'express';
const router = express.Router();
import verifyAdminToken from '../middlewares/adminAuthMiddleware.js';
import {
    createCompletedProject, 
    deleteCompletedProject,
} from '../controllers/completedProjectController.js';


// This middleware will be applied to all the route below this middleware
router.use(verifyAdminToken);

router.post("/create", createCompletedProject); // Route to create a new completed project
router.delete("/delete/:id", deleteCompletedProject); // Route to delete a completed project

export default router;