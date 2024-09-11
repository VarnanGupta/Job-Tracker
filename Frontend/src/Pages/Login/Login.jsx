import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../services/ApiEndPoint";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {login} from '../../features/AuthSlice.js'

function Login() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get auth state
  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated, navigating to /tracker...");
      navigate('/tracker'); // Redirect to /tracker when authenticated
    }
  }, [isAuthenticated, navigate]); // Dependency array to watch for changes in isAuthenticated
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await post("/auth/login", value);
      console.log("Attempting to login...");
      const response = request.data;
      if (response.success) {
        toast.success(response.message);
        dispatch(login({ username: 'user' })); // Example payload to authenticate user
        console.log("Dispatching login action...");
        navigate("/tracker");
        console.log("Redirecting to /tracker");
      }
      console.log(response);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center font-mono bg-gray-300">
      <img src="/login.png" alt="" />
      <div className="form-container mx-10 w-[400px] border border-gray-200 shadow-2xl shadow-slate-800 rounded-2xl bg-white p-5">
        <h1 className="text-center mb-4 font-bold text-2xl ">Login</h1>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label font-semibold">
              Email :
            </label>

            <input
              type="email"
              className="form-control block w-full mt-3 px-3 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="email"
              value={value.email}
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label font-semibold">
              Password :
            </label>
            <input
              type="password"
              className="form-control block w-full mt-3 px-3 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="password"
              value={value.password}
              placeholder="Enter your password"
              id="password"
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-success w-full mb-3 bg-green-500 text-white p-3 rounded-3xl mt-3 hover:bg-green-400 transition duration-300">
            Login
          </button>

          <div className="text-center">
            <p>
              Don't have an account ?{" "}
              <a href="/register" className="text-blue-600 hover:text-blue-900">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
