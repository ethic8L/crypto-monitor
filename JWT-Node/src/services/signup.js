import User from '../models/user';
import bcrypt from 'bcryptjs';

async function createUser(userData){
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new User ({
        name,
        email,
        hashedPassword,
        role: 'customer'
    });

    const savedUser = await createdUser.save();
    return savedUser;
}

export default createUser;