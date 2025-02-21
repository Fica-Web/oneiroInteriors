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

export {
    getBlogs,
}