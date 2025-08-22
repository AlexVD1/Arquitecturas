import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    name: {
        type : String, required: true,trim:true
    },
    phone: {
        type : String, required: false
    },
    email: {
        type : String, required: true,unique: true,trim: true
    },
    password: {
        type : String, required: true, minlength: 6
    },
    status: {
        type : String, required: true, default: 'Active', enum: ['Active', 'Inactive']
    }
},{timestamps:true});

export default mongoose.model('users', userSchema);