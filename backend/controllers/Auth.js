import UserModel from "../models/User.js"
import bycript from 'bcrypt'
import jwt from "jsonwebtoken"

//*******************#######__________REGISTER__________########*******************

const Register = async(req, res)=>{
    try {
        const {userName,email,password}=req.body
        if (!userName || !email || !password) {
          return res.status(303).json({success:true,message:" All feilds are required"})
        }
        const ExistingUser= await UserModel.findOne({email})
        if (ExistingUser) {
          return res.status(303).json({success: true, message: "User already exists"});    
        }

        const hashPassword= await bycript.hashSync(password,10)
        
         const NewUser= new UserModel({
          userName,email,password:hashPassword
         })
         await NewUser.save()
         res.status(200).json({success:true,message:"User Register Successfully",User:NewUser})
  } catch (error) {
      console.log(error)
      return res.status(500).json({success:true,message:" Internal server error"})
      
      
  }
}

//*******************#######__________LOGIN__________########*******************

const Login = async(req,res)=>{
    try {
        const {email, password} = req.body

        const FindUser = await UserModel.findOne({ email })// data base mai saved
        if(!FindUser){
           return res.status(404).json({success:false,message:"User not found . Please Register"})
        }

        const comaprePassword = await bycript.compare(password, FindUser.password)
        if(!comaprePassword){
            return res.status(404).json({success:false,message:"Invalid Password"})
        }

        //token generate karenge for authentication - loggedIn or not 
        const token = await jwt.sign({ userId: FindUser._id }, process.env.JWT_SECRET_KEY, {expiresIn:"5d"})
        res.cookie("token", token,{
            httpOnly:true,
            secure: false,
            maxAge: 5 * 24 * 60 * 60 * 1000 
        })

        res.status(200).json({success:true,message:"Logged-In Successfully",User:FindUser, token})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:" Internal server error"})
    }

}


//*******************#######__________LOGOUT__________########*******************

const Logout = async (req, res)=>{
    try {
        res.clearCookie('token')
        res.status(200).json({success:true,message:"Logged-out Successfully"})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:" Internal server error"})
    }
}



export  {Register, Login, Logout}