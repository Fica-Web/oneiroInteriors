import express from 'express';
const router = express.Router();
import verifyAdminToken from '../middlewares/adminAuthMiddleware.js';
import upload from '../middlewares/multer.js';
import {
    getCarousal,
    createCarousal,
    updateCarousal,
    deleteCarousal
} from '../controllers/CarousalController.js';

router.get('/', getCarousal)

// This middleware will be applied to all the route below this middleware
router.use(verifyAdminToken);

router.post('/', upload.single('image'), createCarousal);
router.put('/:id', upload.single('image'), updateCarousal);
router.delete('/:id', deleteCarousal);

export default router;