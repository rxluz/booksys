import dotenv from 'dotenv'
import app from './config/express.mjs'

dotenv.config()

app.listen(process.env.API_PORT)
