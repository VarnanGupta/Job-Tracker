import { useState, useEffect } from "react";
import JobUpdateModal from "./JobUpdateModal.jsx";

import { MdEdit } from "react-icons/md";
// import { RiPencilLine } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
// import { MdDelete } from "react-icons/md";
// import { FcFullTrash } from "react-icons/fc";

import { get, dele ,put } from "../../services/ApiEndPoint.js";
import toast from "react-hot-toast";
import JobModal from "./JobModal.jsx";

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
  const [jobs, setJob] = useState([]);// State to track all jobs

  const [selectedJob, setSelectedJob] = useState(null); // State for the job to be edited
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // if (jobs) {
  //   console.log(jobs);
  // }
  // GETTING ALL JOBS FROM BACKEND AND DISPLAYING IN TABLE
  const getjobs = async () => {
    try {
      const request = await get("/jobs/getjob");
      console.log(request);
      const response = request.data;
      setJob(response.Job);
      // console.log(response.Job)
    } catch (error) {
      console.log(error);
    }
  };

  //LOADING PAGE WHEN CLICKED ON TRACKER
  useEffect(() => {
    getjobs();
  }, []);

  // DELETING JOB FROM TABLE 
  const handleDelete = async (id) => {
    try {
      const request = await dele("/jobs/deletejob/" + id);
      console.log(request.data);
      const response = request.data;
      if (response.message) {
        getjobs();
        toast.success(request.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };


  // Handle opening the edit modal
  const handleEdit = (job) => {
    setSelectedJob(job); // Set the job to be edited
    setIsModalOpen(true); // Open the modal
  };

  // Handle modal close
  const handleModalClose = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  // Handle updating job from modal
  const handleUpdateJob = async (updatedJob) => {
    try {
      const request = await put(`/jobs/updatejob/${selectedJob._id}`, updatedJob);
      const response = request.data;
      if (response.message) {
        getjobs(); // Refresh the job list
        handleModalClose(); // Close modal
        toast.success(request.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  // FORMATTING DATE IN THE TABLE  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  

  return (
    <div className="p-[70px] overflow-auto h-screen ">
      <JobModal getjobs={getjobs} className=""/>
      {jobs.length ? (
        <table className="mt-10 border-none bg-blue-700 shadow-slate-600 shadow-2xl rounded-3xl w-full text-sm ">
          <thead className="bg-[#0E131F] border-none text-white font-mono text-xl font-semibold">
            <tr>
              <td className="py-1 px-4  ">S.No.</td> {/* Serial Number Column */}
              <td className="py-1 px-4  ">Company Name</td>
              <td className="py-1 px-4  ">Role</td>
              <td className="py-1 px-4  ">Work-Type</td>
              <td className="py-1 px-4  ">Location</td>
              <td className="py-1 px-4  ">Applied-On</td>
              <td className="py-1 px-4  ">Status</td>
              <td className="py-1 px-4  ">Actions</td>
            </tr>
          </thead>
          <tbody className="font-mono text-lg bg-gray-100 border-none">
            {jobs.map((data, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-slate-200">{index + 1}</td> {/* Serial Number */}
                <td className="py-2 px-4 border-b border-slate-200">{data.companyName}</td>
                <td className="py-2 px-4 border-b border-slate-200">{data.role}</td>
                <td className="py-2 px-4 border-b border-slate-200">{data.workType}</td>
                <td className="py-2 px-4 border-b border-slate-200">{data.location}</td>
                <td className="py-2 px-4 border-b border-slate-200">
                  {formatDate(data.createdAt)}
                </td>
                <td className="py-2 px-4 border-b border-slate-200 ">
                  <span className="bg-green-200 p-1 rounded-xl text-green-800 border-green-800 border text-xs">
                    {data.status}
                  </span>
                </td>

                {/* *********************ACTIONS**************** */}
                <td className="py-1 px-4 border-b border-slate-200">
                  {/* <BsThreeDots onClick={handleShow} size={20} cursor={'pointer'}/>
                  {show && ( */}
                  <div className="flex gap-6">
                    <MdEdit
                      size={25}
                      className="text-slate-600"
                      cursor={"pointer"}
                      onClick={() => handleEdit(data)} // Open modal with selected job
                    />
                    
                    {/* <MdDelete
                      size={20}
                      className="text-red-500"
                      cursor={"pointer"}
                      onClick={() => handleDelete(data._id)}
                    /> */}
                    
                    <TiDelete 
                      size={25}
                      className="text-red-500"
                      cursor={"pointer"}
                      onClick={() => handleDelete(data._id)}/>
                  </div>
                  {/* )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <h1 className="font-semibold font-mono text-5xl flex justify-center mt-[300px] text-slate-400">
            From Applications to Offers :{" "}
          </h1>
          <h2 className="font-semibold font-mono text-5xl flex justify-center mt-[30px] text-slate-400">
            Track Your Journey to Your<span className="text-slate-700 mx-5"> Dream Job!</span>
          </h2>
        </>
      )}
      {/* Job Update Modal */}
      {isModalOpen && selectedJob && (
        <JobUpdateModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleUpdateJob}
          job={selectedJob} // Pass the selected job to the modal
        />
      )}
       
    </div>
  );
}

export default Table;
