import Carousal from "../models/CarousalSchema.js";

const getCarousal = async (req, res) => {
    try {
        const carousals = await Carousal.find();

        res.status(200).json({ carousals });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createCarousal = async (req, res) => {
    try {
        // const carousals = await Carousal.find();

        // res.status(200).json({ carousals });
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