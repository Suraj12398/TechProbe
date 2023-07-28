import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

let feedback = localStorage.getItem("feedback");
let rating = localStorage.getItem("rating");
let areasOfImprovement = localStorage.getItem("areasOfImprovement");

const Feedback = () => {
    return (
        <div className="bg-white p-12 m-auto w-8/12 rounded-2xl">
        {/* Feedback */}
        <h1 className="text-2xl">{rating}</h1>
        <h3>`Feedback : ${feedback}`</h3>
        <p>`Areas of improvement : ${areasOfImprovement}`</p>
      </div>
    )
}

export default Feedback;