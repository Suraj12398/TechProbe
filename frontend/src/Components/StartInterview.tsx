import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const url = process.env.REACT_APP_OPEN_AI_API_BASE_URL;
const authToken = process.env.REACT_APP_AUTH_TOKEN;

const StartInterview = () => {
  const [interviewQuestions, setInterviewQuestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [field, setField] = useState<string | null>(localStorage.getItem("field"));
  const [level, setLevel] = useState<string | null>(localStorage.getItem("level"));

  useEffect(() => {
    if (field && level) {
      const promptVar = `send me five questions on ${field} theoretical concepts of difficulty ${level} in this format {
        "question1": "output question",
        "question2": "output question",
        "question3": "output question",
        "question4": "output question",
        "question5": "output question"
      }`;

      fetchQuestions(promptVar);
    }
  }, [field, level]);

  const fetchQuestions = (promptVar: string) => {
    // const url = "http://localhost:8080/bot/chat"; // Replace with your API endpoint
    // const authToken = "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"; // Replace with your actual authorization token

    setIsLoading(true);

    axios({
      method: "GET",
      url: url,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      params: {
        prompt: promptVar,
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setIsLoading(false);
          localStorage.setItem("interviewQuestions", JSON.stringify(response.data));
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };


  return (
    <div className="h-screen flex items-center ">
      {
        isLoading ? (
          <div className="flex items-center justify-center m-auto h-screen">
            <Loader />
          </div>
        ) : (
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
        )
      }
    </div >
  );
};

export default StartInterview;
