
import { NavLink } from "react-router-dom";
import { Button } from "antd";

function Navbar() {
  
  return (
    <div className="md:h-full md:w-[200px] bg-slate-300 shadow-xl border-b-2 border-black flex md:flex-col justify-between">
      {/* <p className="text-2xl font-bold mt-7 ml-10
      ">jobTracker</p> */}
      <img src="/logo.png" alt="" className=""/>

      <nav className="flex md:flex-col gap-2 text-2xl font-bold ml-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/tracker"}>Tracker</NavLink>
        <NavLink to={""}>Build Resume</NavLink>
      </nav>
      <nav className="flex md:flex-col gap-2 text-2xl font-bold ml-5 mb-10">
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <Button
        type="primary"
        className=" bg-black text-white rounded-3xl p-3 px-4 mt-2 mx-11"
        >
        Logout
      </Button>

      </nav>
      
    </div>
  );
}

export default Navbar;
