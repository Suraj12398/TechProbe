import React from 'react'
import { Route, Routes } from "react-router-dom"
import Interview from '../components/Interview'

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/interview" element={<Interview />} />
    </Routes>
  )
}

export default AllRoutes