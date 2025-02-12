import jwt from 'jsonwebtoken';
import Admin from '../models/adminSchema.js';

const verifyAdminToken = async (req, res, next) => {
    // Get token from cookies or headers
    const adminToken = req.cookies.adminToken || req.headers['authorization']?.split(' ')[1];

    if (!adminToken) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token (replace with your own secret key)
        const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);

        // Find the user (assuming userId is stored in the token)
        const admin = await Admin.findById(decoded.id);

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found.' });
        }
        
        // Attach user to the request for use in subsequent middleware or route handler
        admin.password = undefined; // Ensure password is not saved in req.admin
        req.admin = admin;
        
        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.status(400).json({ message: 'Invalid token.', error: error.message });
    }
};

export default verifyAdminToken;