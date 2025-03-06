import mongoose from "mongoose";

const completedProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String, // Thumbnail URL (optional)
        required: false
    },
    youtubeUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^https:\/\/(www\.)?youtube\.com\/embed\/[a-zA-Z0-9_-]+$/.test(value);
            },
            message: "Invalid YouTube Embed URL"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CompletedProject = mongoose.model("CompletedProject", completedProjectSchema);

export default CompletedProject;