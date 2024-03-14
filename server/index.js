import Express from 'express'
import connectMongoose from './config/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes/index.js'

dotenv.config()

const app = Express()

app.use(Express.json())
app.use(cors())
app.use(morgan('combined'))

app.use('/api/v1/', routes)

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

app.listen(PORT, async () => {
  console.log(`Server listening on port:  ${PORT}`)
  await connectMongoose(MONGO_URI)
})
