import { sendEmail } from "../config/emailService.js";

export const submitMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const emailResponse = await sendEmail(name, email, message);

        if (emailResponse.success) {
            res.status(200).json({ success: true, message: "Message sent successfully!" });
        } else {
            res.status(500).json({ error: "Failed to send message." });
        }
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Something went wrong. Try again later." });
    }
};