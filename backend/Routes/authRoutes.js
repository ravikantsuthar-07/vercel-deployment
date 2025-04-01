import express from 'express'
import { createAuthController, getAuthController } from '../Controllers/authController.js'

const router = express.Router();

router.post('/create', createAuthController)
router.get('/get', getAuthController)


export default router