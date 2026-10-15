import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [2, "Name must contain at least 2 characters"],
        maxLength: [60, "Name cannot exceed 60 characters"],
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 254,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please provide a valid email address",
        ],
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        select: false,
    },

    bio: {
        type: String,
        default: " ",
        maxLength: 500,
        trim: true,
    },

    skills: {
        type: [String],
        default: [],
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    }
}, { timeseries: true }); 

const User = mongoose.model('User', userSchema);