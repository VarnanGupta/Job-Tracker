import { useState, useEffect } from "react";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import {get ,dele} from '../../services/ApiEndPoint.js'

// const jobs = [
//   {
//     company: "Tech Solutions Inc.",
//     role: "Software Engineer",
//     workType: "Full-time",
//     location: "New York, NY",
//     appliedOn: "2024-08-15",
//     status: "Scheduled",
//   },
//   {
//     company: "Creative Minds LLC",
//     role: "Graphic Designer",
//     workType: "Part-time",
//     location: "San Francisco, CA",
//     appliedOn: "2024-07-22",
//     status: "Reviewing",
//   },
//   {
//     company: "Global Enterprises",
//     role: "Project Manager",
//     workType: "Contract",
//     location: "Chicago, IL",
//     appliedOn: "2024-09-01",
//     status: "Offered",
//   },
//   {
//     company: "Innovate Tech",
//     role: "Data Scientist",
//     workType: "Remote",
//     location: "Austin, TX",
//     appliedOn: "2024-08-30",
//     status: "Pending",
//   },
  
// ];



function Table() {
  //Adding data from +Add Job button

  // const[task,setTask]= 

  //Normal fetching data in table
  const [show, setShow] = useState(false);

  const [jobs,setJob]= useState([])
  if(jobs){
    console.log(jobs)
  }

  const getjobs = async()=>{
    try {
      const request = await get('/jobs/getjob')
      console.log(request)
      const response = request.data
      setJob(response.Job)
      // console.log(response.Job)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    
    getjobs()

  },[])


  const handleDelete=async(id)=>{
    
    try {
      const request = await dele('/jobs/deletejob/'+id)
      console.log(request.data)
      const response = request.data
      if(response.message){
        getjobs()
        alert(request.data.message)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  const formatDate= (dateString)=>{
    return new Date(dateString).toLocaleDateString('en-GB',{
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="p-4 overflow-auto">
      {jobs.length ? (
        <table className=" border-2 border-zinc-300 rounded-xl w-full text-sm">
          <thead className="bg-teal-300 text-xl font-medium">
            <tr>
              <td className="py-1 px-2 border ">Company Name</td>
              <td className="py-1 px-2 border ">Role</td>
              <td className="py-1 px-2 border ">Work-Type</td>
              <td className="py-1 px-2 border ">Location</td>               
              <td className="py-1 px-2 border ">Applied-On</td>
              <td className="py-1 px-2 border ">Status</td>
              <td className="py-1 px-2 border ">Actions</td>
            </tr>
          </thead>
          <tbody className="text-lg">
            {jobs.map((data, index) => (
              <tr key={index} >
                <td className="py- px-2 border ">{data.companyName}</td>
                <td className="py- px-2 border ">{data.role}</td>
                <td className="py- px-2 border ">{data.workType}</td>
                <td className="py- px-2 border ">{data.location}</td>
                <td className="py- px-2 border ">{formatDate(data.createdAt)}</td>
                <td className="py- px-2 border ">
                  <span className="bg-green-200 p-1 rounded-xl text-green-800 border-green-800 border text-xs">
                    {data.status}
                  </span>
                </td>

                {/* *********************ACTIONS**************** */}
                <td className="py-1 px-2 border flex ">
                  {/* <BsThreeDots onClick={handleShow} size={20} cursor={'pointer'}/>
                  {show && ( */}
                    <div className="flex ">
                      <MdEdit size={20} className="text-black" cursor={'pointer'} onClick={handleShow}  />
                      <MdDelete size={20} className="text-red-500" cursor={'pointer'} onClick={()=>handleDelete(data._id)} />
                    </div>
                  {/* )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
        <h1 className="font-semibold text-5xl flex justify-center mt-[250px] text-slate-400">From Applications to Offers : </h1>
        <h2 className="font-semibold text-5xl flex justify-center mt-[30px] text-slate-700">Track Your Journey to Your Dream Job!</h2>
        </>
      )}
    </div>
  );
}

export default Table;
