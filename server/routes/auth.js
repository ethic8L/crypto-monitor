import router from 'express';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import { User } from '../models/user.js';

router.post('/', async (req, res) => {
    try{
        const{ error } = validate(req.body);
        if(error)
             return res.status(400).send({message: error.details[0].message});
        
        const user = await User.findOne({ email: req.body.email });
        if(!user)
            return res.status(401).send({message: 'Invalid email or password'});

        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );
        if (!validPassword)
            return res.status(401).send({message: 'Invalid email or password'});

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: 'Login successful' });
    } catch (error){
        console.log(error);
        res.status(500).send({message: 'Something went wrong'});
    }
});

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password'),
    });
    return schema.validate(data);
}