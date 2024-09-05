import Sidebar from "../components/Sidebar/Sidebar.jsx"
import MainLayoutTracker from "../components/MainLayout/MainLayoutTracker.jsx"


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
          </div>
        </div>
      </div>
     </>
  )
}
