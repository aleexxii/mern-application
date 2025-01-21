import { Request, Response, NextFunction } from "express";


export const isAdmin = (req: Request, res : Response, next : NextFunction)=>{
    if(req.user.role !== 'admin'){
        return res.status(403).json({message : 'Access Denied, Admin only!'})
    }
    next()
}

export const isUser = (req : Request, res : Response, next : NextFunction) =>{
    if(req.user.role !== 'user'){
        return res.status(403).json({message : 'Access denied, User only!'})
    }
    next()
}