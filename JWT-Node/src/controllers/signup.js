import userService from '../services/signup.js';

async function createUser(req, res){
    try {
        const userData = req.body;
        const user = await userService.createUser(userData);
        res.status(201).json({ user: user, message: 'User created successfully' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}

export default {createUser};