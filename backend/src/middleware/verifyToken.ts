import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'



export const verifyToken = (req : Request, res : Response, next : NextFunction) => {
    const token = req.cookies.access_token;
    console.log('verify token >> ', token)

    if(!token){
        return res.status(403).json({message : 'Access denied. No token provided'})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET!)
        console.log('request >> ', req);
        // req.user = decoded
        // next()
    }catch(error){
        return res.status(400).json({message : 'Invalid token'})
    }
}