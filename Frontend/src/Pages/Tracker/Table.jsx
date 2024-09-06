import React, { useState, useEffect } from "react";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import {get} from '../../services/ApiEndPoint.js'

const tableData = [
  {
    company: "Tech Solutions Inc.",
    role: "Software Engineer",
    workType: "Full-time",
    location: "New York, NY",
    appliedOn: "2024-08-15",
    status: "Scheduled",
  },
  {
    company: "Creative Minds LLC",
    role: "Graphic Designer",
    workType: "Part-time",
    location: "San Francisco, CA",
    appliedOn: "2024-07-22",
    status: "Reviewing",
  },
  {
    company: "Global Enterprises",
    role: "Project Manager",
    workType: "Contract",
    location: "Chicago, IL",
    appliedOn: "2024-09-01",
    status: "Offered",
  },
  {
    company: "Innovate Tech",
    role: "Data Scientist",
    workType: "Remote",
    location: "Austin, TX",
    appliedOn: "2024-08-30",
    status: "Pending",
  },
  
];

function Table() {
  const [show, setShow] = useState(false);

  const [jobs,setJob]= useState([])
  if(jobs){
    console.log(jobs)
  }
  useEffect(()=>{
    const getjobs = async()=>{
      try {
        const request = await get('/jobs/getjob')
        const response = request.data
        // setJob(response.Job)
        console.log(response.Job)

      } catch (error) {
        console.log(error)
      }
    }
    getjobs()

  })

  const formatDate= (dateString)=>{
    const options = {year : 'numeric', month:'long', day:'muneric'}
    return new Date(dateString).toLocaleDateString('en-US',options)
  }
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="p-4 overflow-auto">
      {tableData.length ? (
        <table className=" border-2 rounded-xl w-full text-sm">
          <thead className="bg-gray-300">
            <tr>
              <td className="py-1 px-2 border ">Company Name</td>
              <td className="py-1 px-2 border ">Role</td>
              <td className="py-1 px-2 border ">Work type</td>
              <td className="py-1 px-2 border ">Location</td>
              <td className="py-1 px-2 border ">Applied on</td>
              <td className="py-1 px-2 border ">Status</td>
              <td className="py-1 px-2 border ">Actions</td>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="py- px-2 border ">{data.company}</td>
                <td className="py- px-2 border ">{data.role}</td>
                <td className="py- px-2 border ">{data.workType}</td>
                <td className="py- px-2 border ">{data.location}</td>
                <td className="py- px-2 border ">{data.appliedOn}</td>
                <td className="py- px-2 border">
                  <span className="bg-green-200 p-1 rounded-xl text-green-800 border-green-800 border text-xs">
                    {data.status}
                  </span>
                </td>

                {/* *********************ACTIONS**************** */}
                <td className="py-1 px-2 border flex ">
                  <BsThreeDots onClick={handleShow} size={20} cursor={'pointer'}/>
                  {show && (
                    <div className="flex ">
                      <MdEdit size={20} className="text-black" cursor={'pointer'} />
                      <MdDelete size={20} className="text-red-500" cursor={'pointer'} />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}

export default Table;
