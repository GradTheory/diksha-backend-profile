import Mongoose from 'mongoose';

import UserSchema from './user.schema';


export const UserModel = Mongoose.model('users', UserSchema);
