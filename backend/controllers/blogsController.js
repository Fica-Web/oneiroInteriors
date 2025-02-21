import Blog from "../models/blogSchema.js";

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
        const { title, description, slug, content, author, category, tags, coverImage, publishedAt } = req.body;

        // Validate required fields
        if (!title || !slug || !content || !author || !category) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newBlog = new Blog({
            title,
            description,
            slug,
            content,
            author,
            category,
            tags,
            coverImage,
            publishedAt
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        console.error("Error during blog creation:", error);
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
        
        const deletedBlog = await Blog.findByIdAndDelete(id); // Find and delete the blog

        if (!deletedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully", blog: deletedBlog });
    } catch (error) {
        console.error("Error during blog deletion:", error);
        res.status(500).json({ error: error.message });
    }
};

export {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
}