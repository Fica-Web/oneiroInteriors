import express from 'express';
const router = express.Router();
import verifyAdminToken from '../middlewares/adminAuthMiddleware.js';
import upload from '../middlewares/multer.js';
import {
    getBlogs,
    createBlog,
    getSingleBlog,
    updateBlog,
    deleteBlog,
} from '../controllers/blogsController.js';

// This middleware will be applied to all the route below this middleware
router.use(verifyAdminToken);

router.get('/', getBlogs);
router.post('/', createBlog);
router.get('/:id', getSingleBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;