import React from "react";
import { Route, Routes } from "react-router-dom";
import Interview from "../Components/Interview";
import StartInterview from "../Components/StartInterview";
import { CourseDiv } from "../Components/CourseDiv";
import { Home } from "../Components/Home";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coursediv" element={<CourseDiv />} />
      <Route path="/start-interview" element={<StartInterview />} />
      <Route path="/interview" element={<Interview />} />
    </Routes>
  );
};

