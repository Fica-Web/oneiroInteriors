import express from 'express';
const router = express.Router();
import verifyAdminToken from '../middlewares/adminAuthMiddleware.js';
import {
    adminSignup,
    adminLogin,
    isAdminProtected,
} from "../controllers/adminController.js";

router.post('/login', adminLogin);

// This middleware will be applied to all the route below this middleware
router.use(verifyAdminToken);
router.get('/is-admin-protected', isAdminProtected);

export default router;