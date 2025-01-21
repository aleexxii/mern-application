import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { JWT_SECRET } from '../config/config'

export const verifyToken = (req : Request, res : Response, next : NextFunction) => {
    const token = req.cookies.access_token

    if(!token){
        return res.status(401).json({message : "No token provided, access denied!"})
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET!)
        req.user = decoded
        next()
    } catch (error){
        return res.status(401).json({message : 'Invalid token!'})
    }
}