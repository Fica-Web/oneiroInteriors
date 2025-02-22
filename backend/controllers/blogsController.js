import Blog from "../models/blogSchema.js";
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).json({ blogs });
    } catch (error) {
        console.error('Error during fetching blogs:', error);
        res.status(500).json({ error: error.message });
    }
}

const createBlog = async (req, res) => {
    try {
        const { title, description, content, author, category, tags, publishedAt } = req.body;

        // Ensure content is an array
        const parsedContent = typeof content === "string" ? JSON.parse(content) : content;

        // Validate required fields
        if (!title || !parsedContent || !author || !category || !req.file) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        console.log('Content Type:', typeof parsedContent);

        // Upload image to Cloudinary
        const coverImage = await cloudinary.uploader.upload(req.file.path);

        // Create new blog entry with Cloudinary URL
        const newBlog = new Blog({
            title,
            description,
            content: parsedContent, // ✅ Correct field name
            author,
            category,
            tags,
            coverImage: coverImage.secure_url,
            coverImageId: coverImage.public_id,
            publishedAt
        });

        await newBlog.save();
        return res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        console.error("Error during blog creation:", error);
        res.status(500).json({ error: error.message });
    }
};

const getSingleBlog = async (req, res) => {
    try {
        const { id } = req.params; // Extract blog ID from request params

        // Find and update the blog
        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        res.status(200).json({ blog });
    } catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).json({ error: error.message });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params; // Extract blog ID from request params
        const updateData = req.body; // Get update data from request body

        // Find and update the blog
        const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        if (!updatedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
    } catch (error) {
        console.error("Error during updating blog:", error);
        res.status(500).json({ error: error.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params; // Extract blog ID from request params

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid blog ID format" });
        }

        // Find the blog first to get coverImageId
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        // Delete the cover image from Cloudinary
        if (blog.coverImageId) {
            await cloudinary.uploader.destroy(blog.coverImageId, (err, res) => {
                if (err) {
                    console.error('Error deleting image:', err);
                } else {
                    console.log('Image deleted successfully:', res);
                }
            });
        }

        // Delete the blog from database
        await Blog.findByIdAndDelete(id);

        res.status(200).json({ message: "Blog and cover image deleted successfully" });
    } catch (error) {
        console.error("Error during blog deletion:", error);
        res.status(500).json({ error: error.message });
    }
};

export {
    getBlogs,
    createBlog,
    getSingleBlog,
    updateBlog,
    deleteBlog,
}