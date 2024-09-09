// import React, { useEffect, useState } from "react";
import Table from "./Table";
import JobModal from './JobModal.jsx'


function Tracker() {
  
  return (
  <>
  <div className="mt-[-14px] mx-auto w-full bg-gray-300 text-black overflow-y-auto">
      {/* <JobModal /> */}
      <Table />
    </div>
  </>
    
  );
}

export default Tracker;
