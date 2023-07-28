import React from "react";
import { Route, Routes } from "react-router-dom";
import Interview from "../components/Interview";
import StartInterview from "../components/StartInterview";
import { CourseDiv } from "../components/CourseDiv";
import { Home } from "../components/Home";

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

