import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../services/ApiEndPoint";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [value, setValue] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await post("/auth/login", value);
      const response = request.data;
      if (response.success) {
        toast.success(response.message);
        navigate("/");
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
      <div className="form-container w-[400px] border border-gray-200 shadow-2xl shadow-slate-800 rounded-2xl bg-white p-5">
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

          <button className="btn btn-success w-full mb-3 bg-green-500 text-white p-3 rounded-3xl mt-3 font-normal">
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
