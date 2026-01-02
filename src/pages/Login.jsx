import googlelogo from "../../public/googlelogo.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import login from "../../public/login.jpg";
import emaillogo from "../../public/emaillogo.png";
import passlogo from "../../public/passlogo.png";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // HANDLE LOGIN
  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      setMessage("No user found. Please register first.");
      return;
    }

    if (
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      setMessage("Login Successful!");

      setTimeout(() => {
        navigate("/home");
      }, 800);
    } else {
      setMessage("Incorrect Email or Password");
    }

    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[4fr_6fr] font-[Poppins]">
      {/* LEFT SIDE - LOGIN FORM */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-[30px] font-semibold mb-6">Log In</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full mb-4 px-12 py-3 border-[1.6px] rounded-[8px] 
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
              className="w-full mb-4 px-12 py-3 border-[1.6px] rounded-[8px]
              focus:outline-none focus:ring-2 focus:ring-blue-500
              bg-no-repeat bg-[length:20px_20px] bg-[position:12px_center]"
              style={{ backgroundImage: `url(${passlogo})` }}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 border-[1.6px] rounded-[8px] font-semibold hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>

          {/* MESSAGE */}
          {message && (
            <p className="mt-3 text-center text-red-500 font-medium">
              {message}
            </p>
          )}

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <a
              href="#"
              className="text-[15px] font-semibold text-[#0062FF] hover:underline"
            >
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
              <img src={googlelogo} alt="Google" className="w-5 h-5" />
              Google
            </button>
          </div>

          {/* Sign Up */}
          <p className="text-center mt-6 text-[15px] font-normal text-[#969AB8]">
            Don’t have an account?
            <Link
              to="/"
              className="text-[15px] font-semibold text-[#0062FF] ml-2 hover:underline"
            >
              Sign Up
            </Link>
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

        <div className="absolute inset-0 bg-black/1 flex items-center justify-center">
          <div
            className="text-start px-10"
            style={{ position: "relative", top: "-200px" }}
          >
            <h2 className="text-[32px] tracking-[-2%] font-normal text-[#3A424A]-400 h-[90px] w-[580px] leading-[44px]">
              The future belongs to those who{" "}
              <span style={{ color: "#3062D4" }}>believe</span> in the{" "}
              <span style={{ color: "#3062D4" }}>
                beauty of their dreams
              </span>
            </h2>
            <p
              className="mt-4 font-medium text-gray/400 text-[24px]"
              style={{ marginLeft: "400px " }}
            >
              – Eleanor Roosevelt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
