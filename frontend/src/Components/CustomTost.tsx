// CustomToast.tsx
import React, { useState } from "react";

export const CustomToast = () => {
  const [showToast, setShowToast] = useState(true);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    showToast && (
      <div className="fixed bottom-0 right-0 m-4 p-4 bg-blue-500 text-white rounded-md shadow-lg">
        <div>{"Please fill all boxes before clicking Get Started."}</div>
        <button
          className="ml-4 text-white font-bold"
          onClick={handleCloseToast}
        >
          Close
        </button>
      </div>
    )
  );
};

// export default CustomToast;
