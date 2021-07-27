import express from 'express';
import { createValidator } from 'express-joi-validation';
import {
    registerValidator,
   
} from '../validators/Auth.validator';

import {
    registerController
    
} from '../controllers/Auth.controller';

import JwtMiddleware from '../middlewares/authMiddleware';

const validator = createValidator({ passError: true });

const authRouter = express.Router();

authRouter
    .route('/register')
    .post(validator.body(registerValidator), registerController);

export default authRouter;