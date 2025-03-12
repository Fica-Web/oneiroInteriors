import express from 'express';
const router = express.Router();
import { submitMessage } from "../controllers/messageController.js";

router.post('/', submitMessage);

export default router;