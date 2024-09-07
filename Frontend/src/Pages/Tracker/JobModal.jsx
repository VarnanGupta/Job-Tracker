import { useState } from "react";
import { Button, Modal } from "antd";

function JobModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button
        type="primary"
        className=" bg-black text-white rounded-3xl p-3 px-4 mt-5 mx-5"
        onClick={showModal}
      >
        + Add Job
      </Button>
      <Modal
        title="New Job Applied In:"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="mb-4 flex items-center mt-5">
          <label
            className="text-gray-700 text-sm font-bold mr-2"
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
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <label
            className="text-gray-700 text-sm font-bold mr-2"
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
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <label
            className="text-gray-700 text-sm font-bold mr-2 "
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
            
          />
        </div>

        <div className="mb-4 flex items-center">
          <label
            className="text-gray-700 text-sm font-bold mr-2"
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
              id="worktype"         
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

        <div className="mb-4 flex items-center">
          <label
            className="text-gray-700 text-sm font-bold mr-2"
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
    </div>
  );
}

export default JobModal;
