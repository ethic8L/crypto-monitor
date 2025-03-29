import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/jwtUtils.js';

async function login(email, password){
    try{
        const existingUser = await User.findOne({ email });
        if (!existingUser){
            throw new Error('User not found');
        }
        const isPasswordValid = bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid){
            throw new Error('Invalid password');
        }
        const token = generateToken(existingUser);
        return token;

    } catch (error){
        console.error("Login error:", error.message);
        throw new Error('Invalid credentials');
    }
}

export default { login };