import React from "react";
import googlelogo from "../../public/googlelogo.png";
import emaillogo from "../../public/emaillogo.png";
import passlogo from "../../public/passlogo.png";

import { FaFacebookF } from "react-icons/fa";
import signimg from "../../public/signup.jpg";

function Signup() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-[6fr_4fr]">
        <div className="hidden md:flex relative">
          <img src={signimg} alt="signup" />
          <div className="absolute inset-0 bg-blck/10 flex items-center justify-center">
            <div
              className="text-start px-10"
              style={{ position: "relative", top: "-200px" }}
            >
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-400">
                The only way to do gret work is ot <br />
                <span className="text-blue  -400 font-bold">
                  love what you do.
                </span>
              </h2>
              <p
                className="mt-4 text-gray/400"
                style={{ marginLeft: "400px " }}
              >
                – steve jobs
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-6">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Sign up</h2>

            <input
              type="email"
              placeholder="Your email"
              className="w-full mb-4 px-12 py-3 border rounded-md 
             focus:outline-none focus:ring-2 focus:ring-blue-500
             bg-no-repeat bg-[length:20px_20px] bg-[position:12px_center]"
              style={{
                backgroundImage: `url(${emaillogo})`,
              }}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-12 py-3 border rounded-md 
             focus:outline-none focus:ring-2 focus:ring-blue-500
             bg-no-repeat bg-[length:20px_20px] bg-[position:12px_center]"
              style={{
                backgroundImage: `url(${passlogo})`,
              }}
            />

            <input
              type="password"
              placeholder="Repeat Password"
              className="w-full mb-4 px-12 py-3 border rounded-md 
             focus:outline-none focus:ring-2 focus:ring-blue-500
             bg-no-repeat bg-[length:20px_20px] bg-[position:12px_center]"
              style={{
                backgroundImage: `url(${passlogo})`,
              }}
            />
          

            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Sign up
            </button>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-3 text-gray-400">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex gap-4">
              <button
                className="flex-1 flex items-center justify-center gap-2 
                               border py-2 rounded-md hover:bg-gray-100"
              >
                <img src={googlelogo} alt="Google" className="w-5 h-5" />
                Google
              </button>
            </div>

            <p className="text-center text-sm mt-6">
              Already have an account?
              <a
                href="login"
                className="text-blue-600 font-semibold ml-2 hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
