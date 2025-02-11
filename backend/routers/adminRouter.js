import express from 'express';
const router = express.Router();
import {
    adminSignup,
    adminLogin,
    isAdminProtected,
} from "../controllers/adminController.js";

router.post('/login', adminLogin);

export default router;