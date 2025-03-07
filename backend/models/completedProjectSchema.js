import mongoose from "mongoose";

const completedProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    youtubeUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CompletedProject = mongoose.model("CompletedProject", completedProjectSchema);

export default CompletedProject;