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

router.get('/', getBlogs);
router.get('/:id', getSingleBlog);

// This middleware will be applied to all the route below this middleware
router.use(verifyAdminToken);

router.post('/', upload.single('coverImage'), createBlog);
router.put('/:id', upload.single('coverImage'), updateBlog);
router.delete('/:id', deleteBlog);

export default router;