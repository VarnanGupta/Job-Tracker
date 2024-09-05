import express from 'express'
import { Create, UpdateJob, DeleteJob, GetJob } from '../controllers/Jobs.js'
import { Verificationtoken } from '../middlewares/Verificationtoken.js'

const JobsRoutes = express.Router()

JobsRoutes.post('/createjob',Verificationtoken, Create)
JobsRoutes.put('/updatejob/:id', Verificationtoken, UpdateJob)
JobsRoutes.delete('/deletejob/:id',Verificationtoken, DeleteJob)
JobsRoutes.get('/getjob',Verificationtoken, GetJob)

export default JobsRoutes