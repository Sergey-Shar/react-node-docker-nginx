import express, { Application, Request, Response } from 'express'
import config from 'config'
import cors from 'cors'
import dotenv from 'dotenv'
import chalk from 'chalk'
import routes from './routes/index.js'
dotenv.config()

const PORT = config.get('port') ?? 4001
const app: Application = express()

app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 204,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  })
)
app.use(express.json())
app.use('/api/v1', routes)

interface IReq {
userName: string
password: string
}

app.post('/api/auth', (req: Request, res: Response<JSON | unknown>) => {
  try {
    const { userName } = req.body as IReq
    res.status(200).json({ message: `Привет ${userName}` })
    res.end()
  } catch (error) {
    res.status(400).send(error)
    res.end()
  }
})

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`)
})

if (process.env.NODE_ENV === 'production') {
  console.log(chalk.green('prod'))
} else {
  console.log(chalk.blue('dev'))
}
