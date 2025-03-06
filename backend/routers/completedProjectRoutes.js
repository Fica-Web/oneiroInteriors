import express from 'express';
const router = express.Router();
import verifyAdminToken from '../middlewares/adminAuthMiddleware.js';
import {
    getCompletedProject,
    createCompletedProject, 
    deleteCompletedProject,
} from '../controllers/completedProjectController.js';

router.get('/', getCompletedProject)

// This middleware will be applied to all the route below this middleware
router.use(verifyAdminToken);

router.post("/", createCompletedProject); // Route to create a new completed project
router.delete("/:id", deleteCompletedProject); // Route to delete a completed project

export default router;