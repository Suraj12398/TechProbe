import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const field: any = localStorage.getItem("field");
const level: any = localStorage.getItem("level");
const promptVar: string = `send me five questions on ${field} of difficulty ${level} in the format {
    question1:  output question,
    question2:  output question,
    question3:  output question,
    question4:  output question,
    question5:  output question
}`;

const StartInterview = () => {
  const [interviewQuestions, setInterviewQuestions] = useState<string[]>([]);

  const fetchQuestions = async () => {
    const url = "http://localhost:8080/bot/chat"; // Replace with your API endpoint
    const authToken = "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"; // Replace with your actual authorization token

    try {
      const response = await axios({
        method: "GET",
        url: url,
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        params: {
          prompt: promptVar,
        },
      });
      console.log(response.data);

      localStorage.setItem("interviewQuestions", JSON.stringify(response.data));

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchQuestions();
  }, [field, level]);


  return (
    <div className="h-screen flex items-center ">
      {
        <div className="bg-white p-12 m-auto w-8/12 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,1,5,0.3)]">
          <h2>Answer 5 interview questions</h2>
          <p className="pb-5 text-2xl">
            When you're done, receive a feedback about your scope of improvement
          </p>

          <Link to={"/interview"}>
            <button className="p-5 rounded-lg bg-[#8fa6c4] text-white text-extrabold mt-5 ease-in-out duration-300 hover:bg-[#6a7e99]">
              Start Interview
            </button>
          </Link>
        </div>
      }
    </div>
  );
};

export default StartInterview;
