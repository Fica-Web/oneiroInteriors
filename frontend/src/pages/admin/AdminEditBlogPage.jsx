import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleBlogApi } from "../../utils/api/blogApi";

const AdminEditBlogPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        slug: "",
        author: "",
        category: "",
        tags: "",
        coverImage: "",
        content: [{ contentTitle: "", contentDescription: "" }],
    });

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await getSingleBlogApi(id);
                if (response.blog) {
                    setFormData({
                        title: response.blog.title,
                        description: response.blog.description || "",
                        slug: response.blog.slug,
                        author: response.blog.author,
                        category: response.blog.category,
                        tags: response.blog.tags.join(", "),
                        coverImage: response.blog.coverImage || "",
                        content: response.blog.content || [{ contentTitle: "", contentDescription: "" }],
                    });
                } else {
                    setError("Blog not found");
                }
            } catch (err) {
                setError("Error fetching blog data");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContentChange = (index, field, value) => {
        const updatedContent = [...formData.content];
        updatedContent[index][field] = value;
        setFormData({ ...formData, content: updatedContent });
    };

    const addContentSection = () => {
        setFormData({ ...formData, content: [...formData.content, { contentTitle: "", contentDescription: "" }] });
    };

    const removeContentSection = (index) => {
        const updatedContent = [...formData.content];
        updatedContent.splice(index, 1);
        setFormData({ ...formData, content: updatedContent });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateBlogApi(id, {
                ...formData,
                tags: formData.tags.split(",").map(tag => tag.trim()), // Convert tags to array
            });
            alert("Blog updated successfully!");
            navigate("/admin/blogs");
        } catch (err) {
            alert("Error updating blog");
        }
    };

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="title" value={formData.title} onChange={handleInputChange}
                    placeholder="Blog Title" required className="w-full border border-gray-400 p-2 rounded-md" />

                <input type="text" name="slug" value={formData.slug} onChange={handleInputChange}
                    placeholder="Slug (URL identifier)" required className="w-full border border-gray-400 p-2 rounded-md" />

                <input type="text" name="author" value={formData.author} onChange={handleInputChange}
                    placeholder="Author" required className="w-full border border-gray-400 p-2 rounded-md" />

                <input type="text" name="category" value={formData.category} onChange={handleInputChange}
                    placeholder="Category" required className="w-full border border-gray-400 p-2 rounded-md" />

                <input type="text" name="tags" value={formData.tags} onChange={handleInputChange}
                    placeholder="Tags (comma separated)" className="w-full border border-gray-400 p-2 rounded-md" />

                <textarea name="description" value={formData.description} onChange={handleInputChange}
                    placeholder="Short Description" rows="3" className="w-full border border-gray-400 p-2 rounded-md"></textarea>

                {/* Cover Image */}
                <div className="flex flex-col">
                    <label className="text-gray-600">Cover Image URL</label>
                    <input type="text" name="coverImage" value={formData.coverImage} onChange={handleInputChange}
                        placeholder="Cover Image URL" className="w-full border border-gray-400 p-2 rounded-md" />
                    {formData.coverImage && (
                        <img src={formData.coverImage} alt="Cover Preview"
                            className="w-full h-40 object-cover mt-3 rounded-lg shadow-md" />
                    )}
                </div>

                {/* Content Sections */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Content Sections</h3>
                    {formData.content.map((section, index) => (
                        <div key={index} className="border p-4 rounded-lg bg-gray-100">
                            <input type="text" value={section.contentTitle} onChange={(e) => handleContentChange(index, "contentTitle", e.target.value)}
                                placeholder="Content Title" className="w-full border border-gray-400 p-2 rounded-md" />

                            <textarea value={section.contentDescription} onChange={(e) => handleContentChange(index, "contentDescription", e.target.value)}
                                placeholder="Content Description" rows="3" className="w-full border border-gray-400 p-2 rounded-md mt-2"></textarea>

                            {index > 0 && (
                                <button type="button" className="text-red-500 mt-2 hover:text-red-700" onClick={() => removeContentSection(index)}>
                                    Remove Section
                                </button>
                            )}
                        </div>
                    ))}

                    <button type="button" onClick={addContentSection}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                        + Add Section
                    </button>
                </div>

                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md">
                    Update Blog
                </button>
            </form>
        </div>
    );
};

export default AdminEditBlogPage;