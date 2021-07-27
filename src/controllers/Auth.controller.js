
import {
    UserModel
} from '../models/model.index';

import { APIError } from '../utilities/APIError';

export const registerController = async(req, res, next) => {
    const data = req.body;

    

    const { firstName, lastName,email, password,confirmedPassword } = data;

    try {

        const result = await UserModel.findOne(email);

        if (result)
            return next(new APIError(400, 'USER_ALREADY_EXISTS'));

        if(password!==confirmedPassword){
            return next(new APIError(500, 'PASSWORD_DOES_NOT_MATCH'));
        }
        const hashedPassword = await Bcrypt.hash(password, parseInt(saltRound));

        const storeuser = new UserModel({
            firstName,
            lastName,
            email,
            password: hashedPassword
            
        });

        const savedUser= await storeuser.save();

        const token = JWT.sign({
                tokenType: 'LOGIN_STORE_TOKEN_TYPE',
                userId: savedUser._id
            },
            'jwtSecretKeyAuth', { expiresIn: 360000 }
        );

        res.cookie('AUTH_COOKIE_KEY', token, { httpOnly: true });

       

        res.send({ status: true });
    } catch (error) {
        
        return next(new APIError(500, error));
    }
};

