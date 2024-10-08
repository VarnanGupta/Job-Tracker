import { useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from 'react-router-dom'
import { post, get } from "../../services/ApiEndPoint.js";
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';  // Import from react-redux
import {logout} from '../../features/AuthSlice.js'

function JobModal({ getjobs }) {
  const dispatch = useDispatch() 
  const navigate=useNavigate()
  const initialFormData = {
    // Define initial form data separately
    companyName: "",
    role: "",
    location: "",
    workType: "" ||"fullTime",
    status: "" ||"resumeScreening",
  };
  // const [refresh, setRefresh] = useState(false)
  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    location: "",
    workType: "",
    status: "",
  });

  const handleOnChange = (e) => {
    const { value, id } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const showModal = () => {
    setAddSection(true);
  };

  const handleOk = async (e) => {
    e.preventDefault;
    try {
      const request = await post("/jobs/createjob", formData);
      const response = request.data;
      console.log(response);
      if (response.success) {
        setAddSection(false);
        getjobs();
        setFormData(initialFormData);
        toast.success(response.message);
        // setRefresh(!refresh);
        // window.location.reload();
        // alert(response.success)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    // setAddSection(false);
  };
  const handleCancel = () => {
    setAddSection(false);
    setFormData(initialFormData);
  };

  const handleLogout = async () => {
    try {
      const request = await get("/auth/logout");
      const response = request.data;
      console.log(response);
      if (response.success) {
        toast.success(response.message);
        dispatch(logout()); // Dispatch the logout action
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  return (
    <div className="mt-[-31px] flex">
      {/* Add job button */}
      <Button
        type="primary"
        className=" bg-green-500 text-white px-6 py-3 rounded-full text-lg shadow-lg shadow-slate-600 hover:bg-green-400 transition duration-300 p-3 font-mono"
        onClick={showModal}
      >
        + Add Job
      </Button>
      {/* Logout button */}
      <Button
          type="primary"
          onClick={handleLogout}
          className="mx-[1370px]  bg-red-500 text-white font-mono flex justify-center px-6 py-3 rounded-full text-lg shadow-lg shadow-slate-600 hover:bg-green-400 transition duration-300"
        >
          Logout
        </Button>

      <Modal
        title={
          <span className="text-3xl font-mono font-semibold">
            New Job Applied In :
          </span>
        }
        open={addSection}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* COMPANY NAME */}
        <div className="font-mono mb-4 flex items-center mt-5">
          <label
            className="text-gray-700 text-lg font-medium mr-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <label
            className="text-gray-700 text-sm font-bold mr-2"
            htmlFor="companyName"
          >
            :
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            id="companyName"
            type="text"
            placeholder="Enter company name"
            onChange={handleOnChange}
            required
          />
        </div>

        {/* LOCATION */}
        <div className="font-mono mb-4 flex items-center">
          <label
            className="text-gray-700 text-lg font-medium mr-2 "
            htmlFor="location"
          >
            Location
          </label>
          <label
            className="text-gray-700 text-sm font-bold mr-2"
            htmlFor="location"
          >
            :
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            id="location"
            type="text"
            placeholder="Enter location"
            onChange={handleOnChange}
          />
        </div>

        {/* ROLE */}
        <div className="font-mono mb-4 flex items-center">
          <label
            className="text-gray-700 text-lg font-medium mr-2"
            htmlFor="role"
          >
            Role
          </label>
          <label
            className="text-gray-700 text-sm font-bold mr-2"
            htmlFor="role"
          >
            :
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            id="role"
            type="text"
            placeholder="Enter role"
            onChange={handleOnChange}
            required
          />
        </div>

        {/* STATUS */}
        <div className="font-mono mb-4 flex items-center">
          <label
            className="text-gray-700 text-lg font-medium mr-2"
            htmlFor="status"
          >
            Status
          </label>
          <label
            className="text-gray-700 text-sm font-bold mr-2"
            htmlFor="status"
          >
            :
          </label>
          <select
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            id="status"
            onChange={handleOnChange}
          >
            <option value="">Select status</option>
            <option value="resumeScreening">Resume Screening</option>
            <option value="TechInterview1">Technical Interview-I</option>
            <option value="TechInterview2">Technical Interview-II</option>
            <option value="TechInterview3">Technical Interview-III</option>
            <option value="TechInterview4">Technical Interview-IV</option>
            <option value="HRinterview">HR Interview</option>
            <option value="rejected">Rejected</option>
            <option value="selected">Selected</option>
          </select>
        </div>

        {/* WORK TYPE */}
        <div className="font-mono mb-4 flex items-center">
          <label
            className="text-gray-700 text-lg font-medium mr-2"
            htmlFor="worktype"
          >
            Work Type
          </label>
          <label
            className="text-gray-700 text-lg font-bold mr-2"
            htmlFor="worktype"
          >
            :
          </label>
          <div className="relative">
            <select
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="workType"
              onChange={handleOnChange}
            >
              <option value="">Select work type</option>
              <option value="partTime">Part Time</option>
              <option value="fullTime">Full Time</option>
              <option value="freelancer">Freelancer</option>
              <option value="internship">Internship</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>

      </Modal>
    </div>
  );
}

export default JobModal;
