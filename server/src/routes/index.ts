import express, { Router } from 'express'
import authRoutes from './auth.routes.js'
import userRoutes from './auth.routes.js'

const routes:Router = express.Router({ mergeParams: true })

routes.use('/auth', authRoutes)
routes.use('/user', userRoutes)

export default routes
