import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import logo from "../image/ai_logo.png"; // Import the logo image

export const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`flex items-center justify-between py-2 px-8 bg-blue-500 h-50 ${
        isDarkMode ? "text-white" : "text-black"
      }  sticky top-0 z-10 border-b-2 custom-silver-border`}
      style={{
        borderWidth: "3px", // Increase border width to make it extra bold
        borderStyle: "solid", // Ensure the border is visible
        borderColor: "silver", // Set the border color to silver
      }}
      
    >
      <div className="text-xl font-bold flex justify-center items-center">
        <img className="w-80" src={logo} alt="Logo" />{" "}
        {/* Use the imported logo */}
      </div>
      <div>
        <button className="px-2 py-1 rounded" onClick={toggleTheme}>
          {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </div>
    </nav>
  );
};
