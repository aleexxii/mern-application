import express from 'express'
import { verifyToken } from '../middleware/verifyToken'
import { isAdmin } from '../middleware/rolesMiddleware'


const router = express.Router()

router.get('/dashboard', verifyToken, isAdmin, (req,res) => {
    res.status(200).json({message : 'Welcome to admin dashboard'})
})

export default router