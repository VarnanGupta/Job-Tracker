import JobsModel from "../models/Jobs.js"

const Create = async(req, res)=>{
    try {
        const userId = req.userId  
        const {companyName, role, workType, location, status, appliedOn} = req.body 

        const NewJob = new JobsModel({
        companyName, role, workType, location, status, appliedOn,})
        
        await NewJob.save()
        res.status(200).json({success:true, message:"Job Created successfully", Job: NewJob})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message:"Internal server error"})
    }
}


const UpdateJob= async(req,res)=>{
    try {
        const { id } = req.params
        let Job = await JobsModel.findById(id) // task has the id of the job which we want to update
        if(!Job){
            return res.status(404).json({success:false, message:"Job not found"})
        }
        Job = await JobsModel .findByIdAndUpdate(id , req.body,{ // (from , to)
           new: true, // this is a mongoose option to return the updated document
           runValidators: true, // this is a mongoose option to run the validators on the updated document
           useFindAndModify : false,
         })
       
        // const userId = req.userId
        // //console.log(userId)

        // const jobId = req.params.id
        
        // const FindJob= await JobsModel.findById({_id:jobId})
        // //console.log(FindJob)

        // if(!FindJob){
        //     return res.status(404).json({success:false, message:"Job not found"})
        // }

        // const JobUserId = FindJob.userId
        // console.log(JobUserId)

        // if(userId.toString() !== JobUserId){
        //     return res.status(404).json({success:false, message:"Unauthorized User"})
        // }

        // const updatejob = await FindJob.findByIdAndUpdate(
        //     _id,
        //     req.body,
        //     {new: true,} // this is a mongoose option to return the updated document
        // )

        res.status(200).json({success:true, message:"Job Updated successfully", Job})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message:"Internal server error"})
    }
}

const DeleteJob = async(req,res)=>{
    try {
        
        const { id } = req.params
        const Job = await JobsModel.findById(id) // task has the id of the job which we want to delete
        if(!Job){
            return res.status(404).json({success:false, message:"Job not found"})
        }

        const deleteJob = await JobsModel.findByIdAndDelete(Job) // function to delete the job .. Since task has the id of the job we want to delete.

        res.status(200).json({success: true,message : "Job Deleted successfully!",deleteJob})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message:"Internal server error"})
    }
}


const GetJob = async(req,res)=>{
    try {
        const {id} = req.params
        const Job = await JobsModel.find({ id})

        if(!Job){
            return res.status(404).json({success:false, message:"Not data found"})
        }
        res.status(200).json({success:true, Job})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message:"Internal server error"})
    }
}

export {Create, UpdateJob, DeleteJob, GetJob}