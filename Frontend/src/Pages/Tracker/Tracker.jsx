// import React, { useEffect, useState } from "react";
import Table from "./Table";
import JobModal from './JobModal.jsx'


function Tracker() {
  
  return (
  <>
  <div className="container mx-auto w-full bg-[#fffdfd] text-black">
      <JobModal />
      <Table />
    </div>
  </>
    
  );
}

export default Tracker;
