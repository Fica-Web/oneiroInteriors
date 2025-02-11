import bcrypt from 'bcryptjs';
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
        res.send({ msg: 'Hello world' })
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ error: error.message });
    }
}

const isAdminProtected = async (req, res) => {
    try {
        res.status(200).json({ admin: req.user, isAuthenticated: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export {
    adminSignup,
    adminLogin,
    isAdminProtected,
}