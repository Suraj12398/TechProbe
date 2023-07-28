import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const interviewQuestions: string[] = [
//   "Tell me about yourself.",
//   "What are your strengths and weaknesses?",
//   "Why do you want to work for our company?",
//   "Describe a challenging situation you faced at work and how you dealt with it.",
//   "Where do you see yourself in 5 years?",
//   "How do you handle pressure or stressful situations?",
//   "Do you have any questions for us?",
// ];

interface QuestionAnswerInterface {
  prompt: string;
  answer: string;
}

// obj={key1:value,key2:value2}

// for(i to n){
//     obj[`key+${i}`]
// }

const interviewQuestions: string | null = localStorage.getItem("interviewQuestions");

let parsedInterviewQuestions: { [key: string]: string } = {};

if (interviewQuestions !== null) {
  parsedInterviewQuestions = JSON.parse(interviewQuestions);
}
console.log(parsedInterviewQuestions);

const questionsLength = Object.keys(parsedInterviewQuestions).length;
console.log(questionsLength);


const Interview = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  // const [userResponses, setUserResponses] = useState<string[]>([]);
  const [userResponses, setUserResponses] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  // useEffect(() => {
  //   // displayFeedback();

  //   if(currentQuestionIndex === questionsLength){
  //     fetchFeedback();
  //   }
  // }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex+1 < questionsLength) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    else {
        // displayFeedback();
        fetchFeedback();
    }
  };

  const interviewFeedback = {
    question1: "Tell me about yourself.",
    answer1: "Veerangana",

    question2: "What are your strengths and weaknesses?",
    answer2: "strengths",

    question3: "Why do you want to work for our company?",
    answer3: "Biotech",

    question4:
      "Describe a challenging situation you faced at work and how you dealt with it.",
    answer4: "situation",
    question5: "Where do you see yourself in 5 years?",
    answer5: "Senior role",

    question6: "How do you handle pressure or stressful situations?",
    answer6: "time management",
    question7: "Do you have any questions for us?",
    answer7: "no",
    query:
      "I have provided object of questions and answer given by candidate, please review all the answers and provide me overall feedback of whole interview and not for each question rating out off 10 and also areas of improvement that candidate need give me in object format ",
  };

  const handleResponseChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    // Update the userResponses state array with the current response
    // setUserResponses((prevResponses) => {
    //   const updatedResponses = [...prevResponses];
    //   updatedResponses[currentQuestionIndex] = value;
    //   return updatedResponses;
    // });


    setUserResponses((prevResponses) => ({ ...prevResponses, [`answer${currentQuestionIndex+1}`]: value }));
  };

  const fetchFeedback = async () => {
    const url = "http://localhost:8080/bot/chat"; // Replace with your API endpoint
    const authToken = "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"; // Replace with your actual authorization token


      // Convert the object to a string format using JSON.stringify()
      // const interviewFeedbackString = JSON.stringify(interviewFeedback);

      let quesAnsPair : { [key: string]: string } = {};

      for(let i=0; i<questionsLength; i++){
        quesAnsPair[`question${i}`] = parsedInterviewQuestions[`question${i}`]
        quesAnsPair[`answer${i}`] = userResponses[`answer${i}`]
      }

      quesAnsPair[`query`] = `I have provided object of questions and answer given by candidate, please review all the answers and provide me overall feedback of whole interview and not for each question rating out off 10 and also areas of improvement that candidate need give me in object format {
        "feedback": "overall feedback",
        "rating": "8/10",
        "areasOfImprovement": "areasOfImprovement"
      }`

      console.log(quesAnsPair);

      let quesAnsPairString = JSON.stringify(quesAnsPair);

    try {
      const response = await axios({
        method: "GET",
        url: url,
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json"
        },
        params: {
          prompt: quesAnsPairString,
        },
      });

      console.log(response.data);

      

      if(response.data){
        localStorage.setItem("feedback", response.data.feedback);
        localStorage.setItem("rating", response.data.rating);
        localStorage.setItem("areasOfImprovement", response.data.areasOfImprovement);

        navigate("/feedback");
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  // const displayFeedback = async () => {

  //     try {

  //         // let arrayOfPromptAndAnswer : Object[] = [];

  //         // for(let i=0; i<interviewQuestions.length; i++){
  //         //     let obj : QuestionAnswerInterface = {
  //         //         prompt: "",
  //         //         answer: ""
  //         //     };

  //         //     obj.prompt = interviewQuestions[i];
  //         //     obj.answer = userResponses[i];

  //         //     arrayOfPromptAndAnswer.push(obj);
  //         // }

  //         // console.log(arrayOfPromptAndAnswer);

  //         const res =

  //         console.log(res);
  //     }
  //     catch (error) {
  //         console.error(error);
  //     }
  // }

  return (
    <div className="h-screen flex items-center">
      {currentQuestionIndex < questionsLength && 
        <div className="bg-white p-12 m-auto w-8/12 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,1,5,0.3)]">
          {/* <h2 className='pb-5'>Question {currentQuestionIndex+1}</h2> */}
          <div className="pb-5 flex flex-row justify-between">
            <h2>Question {currentQuestionIndex + 1}</h2>
            <h2>{`${currentQuestionIndex + 1}/${
              questionsLength
            }`}</h2>
          </div>
          <p className="pb-5 text-2xl">
            {parsedInterviewQuestions[`question${currentQuestionIndex+1}`]}
          </p>
          <textarea
            rows={6}
            cols={100}
            value={userResponses[`answer${currentQuestionIndex+1}`] || ""}
            onChange={(e) => handleResponseChange(e)}
            className="bg-[#e2e8f0]"
          />
          <button
            onClick={handleNextQuestion}
            className="p-5 rounded-lg bg-[#8fa6c4] text-white text-extrabold mt-5 ease-in-out duration-300 hover:bg-[#6a7e99]"
          >
            Next Question
          </button>
        </div>
      }
    </div>
  );
};

export default Interview;
