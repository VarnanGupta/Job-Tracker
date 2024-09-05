import express from 'express'
import dotenv from 'dotenv'
import AuthRoutes from './routes/Auth.js'
import DbCon from './utils/db.js'
import JobsRoutes from './routes/Jobs.js'
import cookieParser from 'cookie-parser' 

dotenv.config()

//mongodb connection here 
//DbCon()


const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())


app.use('/auth', AuthRoutes)
app.use('/jobs',JobsRoutes)

app.get('/',(req,res)=>{
    res.send("Active Here")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})