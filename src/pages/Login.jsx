import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import login from "../../public/login.jpg";

export default function Login() {
 

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE - LOGIN FORM */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Log In</h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Your email"
            className="w-full mb-4 px-4 py-3 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-3 border rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Login Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Log In
          </button>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button
              className="flex-1 flex items-center justify-center gap-2 
                               border py-2 rounded-md hover:bg-gray-100"
            >
              <FcGoogle /> Google
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-2 
                               border py-2 rounded-md hover:bg-gray-100"
            >
              <FaFacebookF/> Facebook
            </button>
          </div>

          {/* Sign Up */}
          <p className="text-center text-sm mt-6">
            Don’t have an account?
            <a
              href="#"
              className="text-blue-600 font-semibold ml-1 hover:underline"
            >
              Sign Up
            </a >
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE + QUOTE */}
      <div className="hidden md:flex relative">
        <img
          src={login}
          alt="Login Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/1 flex items-center justify-center">
          <div className="text-center px-10" style={{position:"relative",top:"-200px"}}>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-400">
              The future belongs to those who <br />
              <span className="text-blue-400 font-bold">
                believe in the beauty of their dreams.
              </span>
            </h2>
            <p className="mt-4 text-gray/400">– Eleanor Roosevelt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
