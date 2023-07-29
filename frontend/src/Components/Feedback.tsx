import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { table } from "console";


const Feedback = () => {

  let [feedback, setFeedback] = useState<string | null>(localStorage.getItem("feedback"));
  let [rating, setRating] = useState<string | null>(localStorage.getItem("rating"));
  let [areasOfImprovement, setAreasOfImprovement] = useState<string | null>(localStorage.getItem("areasOfImprovement"));

  // return (
  //     <div className="bg-white p-12 m-auto w-8/12 rounded-2xl">
  //     {/* Feedback */}
  //     <h1 className="text-2xl">{rating}</h1>
  //     <h3>`Feedback : ${feedback}`</h3>
  //     <p>`Areas of improvement : ${areasOfImprovement}`</p>
  //   </div>
  // )

  return (
    <>
      <table className="w-8/12 mt-20 bg-[white] m-auto">
        <caption className="caption-top border border-gray-300 bg-[white] text-3xl font-bold p-6 rounded-t-xl">
          Summary Of Your Interview
        </caption>
        <tbody className="text-left">
          <tr className="border border-gray-300">
            <td className="py-5 px-4 font-bold bg-gray-100 border border-gray-300">Rating</td>
            <td className="py-5 px-4 border border-gray-300 text-2xl">{rating}</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="py-5 px-4 font-bold bg-gray-100 border border-gray-300">Feedback</td>
            <td className="py-5 px-4 border border-gray-300">{feedback}</td>
          </tr>
          <tr className="border rounded-b-xl border-gray-300">
            <td className="py-5 px-4 font-bold bg-gray-100 border rounded-bl-xl border-gray-300">Areas Of Improvement</td>
            <td className="py-5 px-4 border rounded-br-xl  border-gray-300">{areasOfImprovement}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Feedback;