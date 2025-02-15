import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cloudinary from '../config/cloudinary.js';
import Admin from "../models/adminSchema.js";

const adminSignup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Validate the input data
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 8);
    
        // Create new Admin
        const admin = await Admin.create({
            username,
            email,
            password: hashedPassword
        })
        
        // Remove password from the response
        admin.password = undefined;
        
        res.status(200).json({ admin })
    } catch (error) {
        console.error('Error during admin signup:', error);
        res.status(500).json({ error: error.message });
    }
}

const adminLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate the input data
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        // Find the admin by username
        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(400).json({ error: 'Invalid username' });
        }

        // Compare the password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        // Generate a JWT token
        const adminToken = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: '15d' }
        );

        // Set the JWT token as a secure cookie
        res.cookie('adminToken', adminToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Only send cookie over HTTPS in production
            sameSite: 'strict', // Prevent CSRF attacks
            maxAge: 15 * 24 * 60 * 60 * 1000 // Set cookie expiration to 15 days in milliseconds
        });

        // Respond with a success message or user data (without password)
        admin.password = undefined; // Ensure password is not returned in the response
        res.status(200).json({ admin });

    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ error: 'Server error during login. Please try again later.' });
    }
};

const isAdminProtected = async (req, res) => {
    try {
        res.status(200).json({ admin: req.user, isAuthenticated: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "File upload failed" });
        }
        
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log('req.file:', result)

        res.json({
            message: "File uploaded successfully!",
            imageUrl: req.file.path, // Cloudinary URL
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const adminLogout = async (req, res) => {
    try {
        res.clearCookie('adminToken');
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateAdminData = async (req, res) => {
    try {
        const { id } = req.admin;
        const { email, mobile, instagram, facebook, twitter } = req.body;

        // Find admin and update details
        const updatedAdmin = await Admin.findByIdAndUpdate(
            id,
            { email, mobile, instagram, facebook, twitter },
            { new: true, runValidators: true }
        );

        if (!updatedAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        updatedAdmin.password = undefined;
        res.status(200).json({ message: "Data updated successfully", admin: updatedAdmin });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export {
    adminSignup,
    adminLogin,
    isAdminProtected,
    uploadImage,
    adminLogout,
    updateAdminData,
}