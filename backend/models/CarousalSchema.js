import mongoose from "mongoose";

const carousalSchema = new mongoose.Schema(
    {
        ImageUrl: {
            type: String, 
            required: true,
        },
        imageId: {
            type: String, 
            unique: true,

        },
    },
    { timestamps: true }
);

const Carousal = mongoose.model("Carousal", carousalSchema);

export default Carousal;