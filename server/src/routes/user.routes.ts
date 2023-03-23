import express, { Router } from 'express'
const router: Router = express.Router({ mergeParams: true })

router.get('/user')

export default router
