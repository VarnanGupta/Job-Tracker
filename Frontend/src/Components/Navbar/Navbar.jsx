
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { get } from "../../services/ApiEndPoint.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  const handleLogout=async()=>{
    try {
      const request = await get('/auth/logout')
      const response = request.data
      console.log(response)
      if(response.success){
        toast.success(response.message)
        navigate('/login')
      } 
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="md:h-full md:w-[250px] text-black bg-[#6D8A96] shadow-2xl shadow-slate-950 border-b-2 border-black flex md:flex-col justify-between">
      {/* <p className="text-2xl font-bold mt-7 ml-10
      ">jobTracker</p> */}
      <img src="/logo.png" alt="" className=""/>

      <nav className="flex md:flex-col gap-3 text-2xl font-semibold font-mono ml-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/tracker"}>Tracker</NavLink>
        <NavLink to={""}>Build Resume</NavLink>
      </nav>
      <nav className="flex md:flex-col gap-3 text-2xl font-semibold font-mono ml-5 mb-10">
        {/* <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink> */}
        <Button
        type="primary"
        onClick={handleLogout}
        className=" bg-black text-white font-mono flex justify-center rounded-3xl p-3 px-4 mt-2 mx-11"
        >
        Logout
      </Button>

      </nav>
      
    </div>
  );
}

export default Navbar;
