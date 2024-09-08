import { Modal } from 'antd'
import { useState, useEffect } from 'react';

const JobUpdateModal = ({ open, onClose, onSubmit, job }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    location: "",
    workType: "",
    status: "",
  });

  // Initialize form data when job changes
  useEffect(() => {
    if (job) {
      setFormData({
        companyName: job.companyName || "",
        role: job.role || "",
        location: job.location || "",
        workType: job.workType || "",
        status: job.status || "",
      });
    }
  }, [job]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    onSubmit(formData); // Call the parent component's submit function
  };

  return (
    <Modal
        title={
          <span className="text-3xl font-mono font-normal">New Job Applied In :</span>
        }
        open={open}
      onOk={handleSubmit}
      onCancel={onClose}

      >
        {/* COMPANY NAME */}
        <div className="mb-4 flex items-center mt-5">
          <label
            className="text-gray-700 text-sm font-medium mr-2"
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
            value={formData.companyName}
          onChange={handleInputChange}
            required
          />
        </div>

        {/* ROLE */}
        <div className="mb-4 flex items-center">
          <label
            className="text-gray-700 text-sm font-medium mr-2"
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
            value={formData.role}
          onChange={handleInputChange}
            required
          />
        </div>

        {/* LOCATION */}
        <div className="mb-4 flex items-center">
          <label
            className="text-gray-700 text-sm font-medium mr-2 "
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
            value={formData.location}
          onChange={handleInputChange}
          />
        </div>

        {/* WORK TYPE */}
        <div className="mb-4 flex items-center">
          <label
            className="text-gray-700 text-sm font-medium mr-2"
            htmlFor="worktype"
          >
            Work Type
          </label>
          <label
            className="text-gray-700 text-sm font-bold mr-2"
            htmlFor="worktype"
          >
            :
          </label>
          <div className="relative">
            <select
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="workType"
              value={formData.workType}
          onChange={handleInputChange}
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

        {/* STATUS */}
        <div className="mb-4 flex items-center">
          <label
            className="text-gray-700 text-sm font-medium mr-2"
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
            value={formData.status}
          onChange={handleInputChange}
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
      </Modal>
  )
}

export default JobUpdateModal
