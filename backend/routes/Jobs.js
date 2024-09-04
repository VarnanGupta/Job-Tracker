import express from 'express'
import { Create } from '../controllers/Jobs.js'
import { Verificationtoken } from '../middlewares/Verificationtoken.js'

const JobsRoutes = express.Router()

JobsRoutes.post('/createjob',Verificationtoken, Create)

export default JobsRoutes