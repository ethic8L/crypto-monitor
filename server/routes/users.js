import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Zapewnia unikalność adresu e-mail
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWTPRIVATEKEY,
        { expiresIn: '7d' }
    );
    return token;
};

const User = mongoose.model('User', userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label('First name'),
        lastName: Joi.string().required().label('Last name'),
        email: Joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Password'),
    });
    return schema.validate(data);
}

export { User, validate };  // Eksport modelu i funkcji validate
