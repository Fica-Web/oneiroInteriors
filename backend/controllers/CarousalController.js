import Carousel from "../models/CarousalSchema.js";
import cloudinary from "../config/cloudinary.js";

const getCarousal = async (req, res) => {
    try {
        const carousels = await Carousel.find();

        res.status(200).json({ carousels });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCarouselById = async (req, res) => {
    try {
        const id = req.params.id;

        const carousel = await Carousel.findById(id);

        if (!carousel) {
            return res.status(404).json({ error: 'Carousel not found'})
        }

        res.status(200).json({ carousel });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createCarousal = async (req, res) => {
    try {
        const { title } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "File upload failed" });
        }
        
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "carousels", // Optional: Organizes images in Cloudinary
        });

        console.log("Cloudinary Upload Result:", result);

        // Save image data to MongoDB
        const carousel = new Carousel({
            title,
            imageUrl: result.secure_url, // Cloudinary URL
            imageId: result.public_id,   // Cloudinary Image ID
        });

        await carousel.save();

        res.status(201).json({
            message: "Carousel added successfully!",
            carousel
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCarousal = async (req, res) => {
    try {
        const carousals = await Carousel.find();

        res.status(200).json({ carousals });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCarousal = async (req, res) => {
    try {
        const carousals = await Carousel.find();

        res.status(200).json({ carousals });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export {
    getCarousal,
    getCarouselById,
    createCarousal,
    updateCarousal,
    deleteCarousal,
}