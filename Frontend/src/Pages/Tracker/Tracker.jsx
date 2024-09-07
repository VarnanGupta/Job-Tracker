// import React, { useEffect, useState } from "react";
import Table from "./Table";
import JobModal from './JobModal.jsx'


function Tracker() {

  

  return (
  <>
  <div className="w-full">
      <JobModal />
      <Table />
    </div>
  </>
    
  );
}

export default Tracker;
