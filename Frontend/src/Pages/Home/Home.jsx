import React from "react";

function Home() {
  return (
    <>
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Job Tracking Website</h1>
      <p className="text-lg mb-8">Welcome to our job tracking website! Find your dream job or post a job to find the perfect candidate.</p>
      <div className="flex flex-wrap justify-center mb-4">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Post a Job
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
          Search Jobs
        </button>
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <h2 className="text-2xl font-bold mb-2">Recent Jobs</h2>
          <ul>
            <li>
              <img src="https://picsum.photos/200/300" alt="Job 1" className="w-12 h-12 rounded-full mr-4" />
              <span>Job 1: Software Engineer</span>
            </li>
            <li>
              <img src="https://picsum.photos/200/301" alt="Job 2" className="w-12 h-12 rounded-full mr-4" />
              <span>Job 2: Marketing Manager</span>
            </li>
            <li>
              <img src="https://picsum.photos/200/302" alt="Job 3" className="w-12 h-12 rounded-full mr-4" />
              <span>Job 3: Data Analyst</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <h2 className="text-2xl font-bold mb-2">Top Categories</h2>
          <ul>
            <li>
              <img src="https://picsum.photos/200/303" alt="Category 1" className="w-12 h-12 rounded-full mr-4" />
              <span>Category 1: Technology</span>
            </li>
            <li>
              <img src="https://picsum.photos/200/304" alt="Category 2" className="w-12 h-12 rounded-full mr-4" />
              <span>Category 2: Marketing</span>
            </li>
            <li>
              <img src="https://picsum.photos/200/305" alt="Category 3" className="w-12 h-12 rounded-full mr-4" />
              <span>Category 3: Finance</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;
