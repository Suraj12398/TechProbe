import React from 'react'
import { Route, Routes } from "react-router-dom"
import Interview from '../components/Interview'
import StartInterview from '../components/StartInterview'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/start-interview" element={<StartInterview />} />
        <Route path="/interview" element={<Interview />} />
    </Routes>
  )
}

export default AllRoutes