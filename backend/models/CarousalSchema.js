import mongoose from "mongoose";

const carousalSchema = new mongoose.Schema(
    {
        title: {  
            type: String,
            required: true,
        },
        imageUrl: {  
            type: String,
            required: true,
        },
        imageId: {  
            type: String,
            required: true, 
            unique: true,
        },
    },
    { timestamps: true }
);

const Carousal = mongoose.model("Carousal", carousalSchema);

export default Carousal;
