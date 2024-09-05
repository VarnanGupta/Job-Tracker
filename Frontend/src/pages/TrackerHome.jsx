import Sidebar from "../components/Sidebar/Sidebar.jsx"
import MainLayoutTracker from "../components/MainLayout/MainLayoutTracker.jsx"
import Jobs  from "../components/Jobs/Jobs.jsx"


export default function TrackerHome  () {
  return (
     <>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-lg-2 col-md-2 min-vh-100 shadow-lg">
            <Sidebar />
          </div>
          <div className="col-lg-10 col-md-10">
            <MainLayoutTracker />
            <div className="mt-5 mx-4">
            <h1 className="fs-1  fw-bold">JOBS</h1>
            </div>
            <div className="row">
              <div className="col-md-4 col-lg-4 mt-5 mx-4">
                <Jobs />
              </div>
            </div>
          </div> 
        </div>
      </div>
     </>
  )
}
