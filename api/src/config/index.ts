import dotenv from 'dotenv'
import path from 'path'

import { IConfigInterface } from '../data/interfaces'

const environment = process.env.NODE_ENV || 'production'
dotenv.config({ path: path.resolve(__dirname, `./environments/${environment}.env`) })

const config: IConfigInterface = {
  api: {
    port: parseInt(process.env.PORT || '3000', 10),
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME || 'booksys',
    password: process.env.DB_PASSWORD || 'booksys',
    database: process.env.DB_DATABASE || 'booksys',
  },
  event: {
    startHour: '08:00',
    endHour: '19:00',
  },
}

export default config
