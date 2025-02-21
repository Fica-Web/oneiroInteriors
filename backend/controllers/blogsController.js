import Blog from "../models/blogSchema";

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

export {
    getBlogs,
    createBlog,
}