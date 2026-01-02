import googlelogo from "../../public/googlelogo.png";
import emaillogo from "../../public/emaillogo.png";
import passlogo from "../../public/passlogo.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import signimg from "../../public/signup.jpg";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "", 
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.password !==formData.confirmPassword){
      alert('enter same password');
      return;
    }

    if (!formData.email && !formData.password && !formData.confirmPassword) {
      alert("All fields are required");
      return;
    }

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("userData", JSON.stringify(formData));
    console.log("User saved:", formData);

    navigate("/login");
  };

  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-[6fr_4fr] font-[Poppins]">
        <div className="hidden md:flex relative">
          <img src={signimg} alt="signup" />
          <div className="absolute inset-0 bg-blck/10 flex items-center justify-center">
            <div
              className="text-start px-10"
              style={{ position: "relative", top: "-200px" }}
            >
              <h2 className="text-[32px] tracking-[-2%] font-normal text-[#3A424A]-400 h-[90px] w-[580px] leading-[44px]">
                The only way to{" "}

                <span style={{ color: "#3062D4" }}>do great work</span> is to{" "}
                <span
                  style={{ color: "#3062D4" }}
                  className="ttext-[#3A424A]-400"
                >
                  love what you do.
                </span>
              </h2>
              <p
                className="mt-4 font-medium text-[24px] text-gray/400"
                style={{ marginLeft: "400px " }}
              >
                – Steve Jobs
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-6">
          <div className="w-full max-w-md">
            <h2 className="text-[30px] font-semibold mb-6">Sign up</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full mb-4 px-12 py-3 border rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              bg-no-repeat bg-[length:20px_20px] bg-[position:12px_center]"
                style={{ backgroundImage: `url(${emaillogo})` }}
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full mb-4 px-12 py-3 border rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              bg-no-repeat bg-[length:20px_20px] bg-[position:12px_center]"
                style={{ backgroundImage: `url(${passlogo})` }}
              />{" "}
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat Password"
                className="w-full mb-4 px-12 py-3 border rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              bg-no-repeat bg-[length:20px_20px] bg-[position:12px_center]"
                style={{ backgroundImage: `url(${passlogo})`}}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 border-[1.6px] rounded-[8px] font-semibold hover:bg-blue-700 transition"
              >
                Sign up
              </button>
            </form>

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
                Googles
              </button>
            </div>

            <p className="text-center mt-6 text-[15px] font-normal text-[#969AB8]">
              Already have an account?
              <Link
                to="/login"
                className="text-[15px] font-semibold text-[#0062FF] ml-2 hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
