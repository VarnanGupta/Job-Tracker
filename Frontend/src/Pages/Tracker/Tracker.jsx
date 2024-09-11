// import React, { useEffect, useState } from "react";
import Table from "./Table";
// import { Button } from "antd";
// import { useNavigate } from "react-router-dom";
// import { get } from "../../services/ApiEndPoint.js";
// import { useDispatch } from "react-redux";

// import toast from "react-hot-toast";


function Tracker() {
  // const navigate = useNavigate();
  
  // const handleLogout = async () => {
  //   try {
  //     const request = await get("/auth/logout");
  //     const response = request.data;
  //     console.log(response);
  //     if (response.success) {
  //       toast.success(response.message);
        
  //       navigate("/login");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  return (
  <>
  <div className="mt-[px] mx-auto w-full bg-gray-300 text-black overflow-y-auto">
      {/* <JobModal /> */}
      {/* <Button
          type="primary"
          onClick={handleLogout}
          className="mx-[1540px] bg-red-500 text-white font-mono flex justify-center rounded-3xl p-3 px-4 mt-2  hover:bg-green-400 transition duration-300"
        >
          Logout
        </Button> */}
      <Table />
    </div>
  </>
    
  );
}

export default Tracker;
