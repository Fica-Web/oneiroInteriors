import express from 'express';
const router = express.Router();
import verifyAdminToken from '../middlewares/adminAuthMiddleware.js';
import upload from '../middlewares/multer.js';
import {
    getCarousel,
    getCarouselById,
    createCarousel,
    updateCarousel,
    deleteCarousel
} from '../controllers/CarousalController.js';

router.get('/', getCarousel);
router.get('/:id', getCarouselById);

// This middleware will be applied to all the route below this middleware
router.use(verifyAdminToken);

router.post('/', upload.single('image'), createCarousel);
router.put('/:id', upload.single('image'), updateCarousel);
router.delete('/:id', deleteCarousel);

export default router;