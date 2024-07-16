import bycrypt from 'bcryptjs';
import User from "../models/user.model.js";
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({ message: 'Password do not match' });
        }

        const user = await User.findOne({username});

        if(user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        //HASH PASSWORD
        const salt = await bycrypt.genSalt(10);
        const hashPassword = await bycrypt.hash(password, salt);

        const boyProfilePicture = `https://avatar.iran.liara.run/public/43?username=${username}`;
        const girlProfilePicture = `https://avatar.iran.liara.run/public/58?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            gender,
            profilePicture: gender === 'male' ? boyProfilePicture : girlProfilePicture
        })

        if(!newUser) {
            return res.status(400).json({ message: 'Invalid user data' });
        } else {
            // Generate a JWT token
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();

            res.status(201).json({ 
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePicture: newUser.profilePicture
            });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bycrypt.compare(password, user?.password || '');

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({ 
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePicture: user.profilePicture
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 0 });
        res.status(200).json({ message: 'Logout successfully' });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};