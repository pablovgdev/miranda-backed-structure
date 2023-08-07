import { bookingsController } from './controllers/booking'
import { loginController } from './controllers/login'

import authMiddleware from './middlewares/auth'
import express from 'express'
import cors from 'cors'

export const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// public routes
app.use('/login', loginController)

// private routes
app.use('/booking', authMiddleware, bookingsController)
