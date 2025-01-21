import express from 'express';
import { verifyToken } from '../middleware/verifyToken';
import { isUser } from '../middleware/rolesMiddleware';

const router = express.Router()

router.get('/home',verifyToken,isUser, (req, res)=>{
    res.status(200).json({message : 'Welcome to your home page'})
})

export default router