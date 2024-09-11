import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { get } from "../../services/ApiEndPoint.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
// import { useDispatch } from 'react-redux';  // Import from react-redux
// import {logout} from '../../features/AuthSlice.js'

function Navbar() {
  const navigate = useNavigate();
  // const dispatch = useDispatch() 
  const handleLogout = async () => {
    try {
      const request = await get("/auth/logout");
      const response = request.data;
      console.log(response);
      if (response.success) {
        toast.success(response.message);
        dispatch(logout()); // Dispatch the logout action
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:h-full md:w-[250px] z-10 overflow-y-auto text-white bg-[#141411] shadow-2xl shadow-black border-b-2 border-black flex md:flex-col justify-between">
      <p className="text-4xl font-bold mt-[40px] ml-10">Job Tracker</p>
      {/* <img src="/logo.png" alt="" className=""/> */}

      <nav className="flex md:flex-col gap-3 text-2xl font-semibold font-mono ml-5">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${isActive ? "text-yellow-400" : "text-white"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/tracker"}
          className={({ isActive }) =>
            `${isActive ? "text-[#1B9AAA]" : "text-white"}`
          }
        >
          Tracker
        </NavLink>
        {/* <NavLink to={""}>Build Resume</NavLink> */}
        <a
          className="flex items-center gap-2"
          href="https://pro-khar.github.io/resume-builder/"
          target="_blank"
          
        >
          Build Resume <BiLinkExternal />{" "}
        </a>
      </nav>
      <nav className="flex md:flex-col gap-3 text-2xl font-semibold font-mono ml-5 mb-10">
        {/* <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink> */}
        {/* <Button
          type="primary"
          onClick={handleLogout}
          className=" bg-red-500 text-white font-mono flex justify-center rounded-3xl p-3 px-4 mt-2 mx-11 hover:bg-green-400 transition duration-300"
        >
          Logout
        </Button> */}
      </nav>
    </div>
  );
}

export default Navbar;
