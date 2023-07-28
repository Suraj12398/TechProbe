import React from "react";
import {useNavigate} from "react-router-dom"

export const CourseDiv = () => {

  const navigate = useNavigate();
  
  const handleGetStartedClick = (field: any, level: any) => {
    // Save field and level in local storage
    localStorage.setItem("field", field);
    localStorage.setItem("level", level);
    // Navigate to the CourseDiv component or perform any other action
    // depending on your requirement

    navigate("/start-interview")

  };

  return (
    <div className="bg-blue-100 mt-9 flex items-center justify-center space-x-4">
      {/* / */}
      <div className="bg-blue-100 mt-9 flex items-center justify-center mt-2 ">
        <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg shadow-[0_35px_60px_-15px_rgba(0,1,5,0.3)]">
          <h1 className="text-3xl font-semibold mb-4">
            Join Our Node JS Interview
          </h1>
          <p className="text-gray-700 mb-6">
            Prepare for your upcoming interviews with our comprehensive warm-up
            program.
          </p>
          <div className="mb-6 justify-center items-center ml-8">
            <button
              className="bg-blue-500 text-red py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 transform h-10 bg-blue-400 w-60 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center ml-10"
              onClick={() => handleGetStartedClick("Node JS", "Low Level")}
            >
              Get Started Low Level →
            </button>
          </div>

          <div className="mb-6 justify-center items-center ml-8">
            <button
              className="bg-blue-500 text-red py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 transform h-10 bg-blue-400 w-60 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center ml-10"
              onClick={() => handleGetStartedClick("Node JS", "Medium Level")}
            >
              Get Started Medium Level →
            </button>
          </div>

          <div className="mb-6 justify-center items-center ml-8">
            <button
              className="bg-blue-500 text-red py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 transform h-10 bg-blue-400 w-60 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center ml-10"
              onClick={() => handleGetStartedClick("Node JS", "Hard Level")}
            >
              Get Started Hard Level →
            </button>
          </div>
          <div className="mt-9">Best of Luck for your Interview</div>
        </div>
      </div>

      {/* 2 */}
      <div className="bg-blue-100 mt-9 flex items-center justify-center mt-2 ">
        <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <h1 className="text-3xl font-semibold mb-4">
            Join Our JAVA Interview
          </h1>
          <p className="text-gray-700 mb-6">
            Prepare for your upcoming interviews with our comprehensive warm-up
            program.
          </p>
          <div className="mb-6 justify-center items-center ml-8">
            <button
              className="bg-blue-500 text-red py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 transform h-10 bg-blue-400 w-60 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center ml-10"
              onClick={() => handleGetStartedClick("JAVA", "Low Level")}
            >
              Get Started Low Level →
            </button>
          </div>

          <div className="mb-6 justify-center items-center ml-8">
            <button
              className="bg-blue-500 text-red py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 transform h-10 bg-blue-400 w-60 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center ml-10"
              onClick={() => handleGetStartedClick("JAVA", "Medium Level")}
            >
              Get Started Medium Level →
            </button>
          </div>

          <div className="mb-6 justify-center items-center ml-8">
            <button
              className="bg-blue-500 text-red py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 transform h-10 bg-blue-400 w-60 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center ml-10"
              onClick={() => handleGetStartedClick("JAVA", "Hard Level")}
            >
              Get Started Hard Level →
            </button>
          </div>
          <div className="mt-9">Best of Luck for your Interview</div>
        </div>
      </div>

      {/* 3 */}
      <div className="bg-blue-100 mt-9 flex items-center justify-center mt-2 ">
        <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <h1 className="text-3xl font-semibold mb-4">
            Join Our MERN Interview
          </h1>
          <p className="text-gray-700 mb-6">
            Prepare for your upcoming interviews with our comprehensive warm-up
            program.
          </p>
          <div className="mb-6 justify-center items-center ml-8">
            <button
              className="bg-blue-500 text-red py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 transform h-10 bg-blue-400 w-60 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center ml-10"
              onClick={() => handleGetStartedClick("MERN", "Low Level")}
            >
              Get Started Low Level →
            </button>
          </div>

          <div className="mb-6 justify-center items-center ml-8">
            <button
              className="bg-blue-500 text-red py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 transform h-10 bg-blue-400 w-60 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center ml-10"
              onClick={() => handleGetStartedClick("MERN", "Medium Level")}
            >
              Get Started Medium Level →
            </button>
          </div>

          <div className="mb-6 justify-center items-center ml-8">
            <button
              className="bg-blue-500 text-red py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border border-blue-500 transform h-10 bg-blue-400 w-60 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center ml-10"
              onClick={() => handleGetStartedClick("MERN", "Hard Level")}
            >
              Get Started Hard Level →
            </button>
          </div>
          <div className="mt-9">Best of Luck for your Interview</div>
        </div>
      </div>
    </div>
  );
};
