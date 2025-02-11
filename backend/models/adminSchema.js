import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    username: {
        type: String,    
        required: [true, 'username is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
})

const Admin = model('Admin', adminSchema)

export default Admin;