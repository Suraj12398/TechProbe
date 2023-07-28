import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CourseDiv } from "../Components/CourseDiv";
import { Home } from "../Components/Home";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursediv" element={<CourseDiv />} />
      </Routes>
    </BrowserRouter>
  );
};
