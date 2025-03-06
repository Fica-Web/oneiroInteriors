import Carousal from "../models/CarousalSchema.js";

const getCarousal = async (req, res) => {
    try {
        const carousels = await Carousal.find();

        res.status(200).json({ carousels });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createCarousal = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "File upload failed" });
        }
        
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "carousals", // Optional: Organizes images in Cloudinary
        });

        console.log("Cloudinary Upload Result:", result);

        // Save image data to MongoDB
        const carousal = new Carousal({
            imageUrl: result.secure_url, // Cloudinary URL
            imageId: result.public_id,   // Cloudinary Image ID
        });

        await carousal.save();

        res.status(201).json({
            message: "Image uploaded successfully!",
            carousal
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCarousal = async (req, res) => {
    try {
        const carousals = await Carousal.find();

        res.status(200).json({ carousals });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCarousal = async (req, res) => {
    try {
        const carousals = await Carousal.find();

        res.status(200).json({ carousals });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export {
    getCarousal,
    createCarousal,
    updateCarousal,
    deleteCarousal,
}