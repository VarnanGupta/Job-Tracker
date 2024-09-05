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
        enum: ["partTime", "fullTime","internship ","contract"],
        //default : "incomplete",
    },
    location : {
        type : String,
    },
    status : {
        type : String,
        enum: ["resumeScreening", "TechInterview1","TechInterview2","TechInterview3","HRinterview"],
        default : "incomplete",
    },
    // createdBy:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required : true
    // },
    // createdAt:{
    //     type : Date,
    //     default : Date.now,
    // },
},{
    timestamp:true
})

const JobsModel = mongoose.model("Jobs", JobsSchema)

export default JobsModel