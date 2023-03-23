
import { Request, Response } from 'express'
import { UserCreateModel } from '../models/user.create.model.js'
import { RequestWithBody } from '../types/request.types.js'

interface IAuthController {
	signUp(req: Request, res: Response): void
}

class AuthController implements IAuthController {
  signUp (req: RequestWithBody<UserCreateModel>, res: Response): void {
    try {
      const { userName, email, password } = req.body
    } catch (error) {}
  }
}

export default new AuthController()
