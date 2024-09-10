import mongoose from 'mongoose'

const JobsSchema = mongoose.Schema({
    companyName : {
        type : String,
    },
    role: {
        type :String,
    },
    workType :{
        type : String,
        enum: ["partTime", "fullTime","freelancer","internship","contract"],
        default : "partTime",
    },
    location : {
        type : String,
    },
    status : {
        type : String,
        enum: ["resumeScreening", "TechInterview1","TechInterview2","TechInterview3","TechInterview4","HRinterview","rejected","selected"],
        default : "resumeScreening",
        required:true
    },
    
},{
    timestamps:true
})

const JobsModel = mongoose.model("Jobs", JobsSchema)

export default JobsModel