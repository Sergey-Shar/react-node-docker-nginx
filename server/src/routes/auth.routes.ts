import express, { Router } from 'express'
import authController from '../controllers/auth.controller.js'
const router: Router = express.Router({ mergeParams: true })

router.post('/signUp', authController.signUp)
router.post('/signOut')
router.post('/token')

export default router
