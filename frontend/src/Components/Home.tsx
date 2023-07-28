import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { CourseDiv } from "./CourseDiv";

export const Home = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleGetStartedClick = () => {
    if (email.trim() === "" || name.trim() === "") {
      setShowToast(true);
    } else {
      // Save name and email in local storage
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      navigate("/coursediv");
    }
  };

  return (
    <div className="bg-blue-100 mt-9 flex items-center justify-center ">
      <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)">
        <h1 className="text-3xl font-semibold mb-4">
          Join Our Interview Warm-up Program
        </h1>
        <p className="text-gray-700 mb-6">
          Prepare for your upcoming interviews with our comprehensive warm-up
          program.
        </p>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="email"
            id="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-red py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
        {showToast && (
          <div className="text-red-500 mt-2">
            Please fill all boxes before clicking Get Started.
          </div>
        )}
      </div>
    </div>
  );
};
