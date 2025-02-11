
const adminSignup = async (req, res) => {
    try {
        
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