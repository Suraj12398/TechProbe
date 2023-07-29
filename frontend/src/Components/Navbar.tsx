import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import logo from "../image/ai_logo.png"; // Import the logo image
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);

    if(isDarkMode){
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    else{
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
    // document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`flex items-center justify-between py-2 px-8 h-50 ${
        isDarkMode ? "text-white bg-[#254b61]" : "text-black bg-[white]"
      }  sticky top-0 z-10`}
    >
      <Link to={'/'}>
      <div className="text-xl font-bold flex justify-center items-center">
        <img className="w-80" src={logo} alt="Logo" />{" "}
        {/* Use the imported logo */}
      </div>
      </Link>
      <div>
        <button className="px-2 py-1 rounded" onClick={toggleTheme}>
          {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </div>
    </nav>
  );
};
