import express from 'express';
const router = express.Router();
import verifyAdminToken from '../middlewares/adminAuthMiddleware.js';
import upload from '../middlewares/multer.js';
import {
    adminLogin,
    isAdminProtected,
    uploadCarousalImage,
    adminLogout,
    fetchAdminData,
    updateAdminData,
} from "../controllers/adminController.js";

router.post('/login', adminLogin);

// This middleware will be applied to all the route below this middleware
router.use(verifyAdminToken);
router.get('/is-admin-protected', isAdminProtected);
router.get('/logout', adminLogout);
router.get('/get-admin-data', fetchAdminData);
router.post('/update', updateAdminData);

// HomePage Carousal
router.post('/upload', upload.single('image'), uploadCarousalImage);

export default router;