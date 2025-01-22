import jwt from 'jsonwebtoken'
import { JWT_SECRET, JWT_EXPIRE } from '../config/config'
import { IUser } from '../models/User'

export const generateToken = (user : IUser) =>{
    console.log(JWT_EXPIRE , JWT_SECRET);
    return jwt.sign({ id : user.email, role : user.role}, JWT_SECRET! ,{expiresIn : JWT_EXPIRE})
}