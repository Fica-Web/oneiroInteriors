import express from 'express';
const router = express.Router();
import verifyAdminToken from '../middlewares/adminAuthMiddleware.js';
import upload from '../middlewares/multer.js';
import {
    adminLogin,
    isAdminProtected,
    uploadImage,
} from "../controllers/adminController.js";

router.post('/login', adminLogin);

// This middleware will be applied to all the route below this middleware
router.use(verifyAdminToken);
router.get('/is-admin-protected', isAdminProtected);
router.post('/upload', upload.single('image'), uploadImage);

export default router;