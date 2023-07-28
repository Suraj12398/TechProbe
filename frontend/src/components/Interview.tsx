import React, { useEffect, useState } from 'react'
import axios from 'axios';

const interviewQuestions: string[] = [
    'Tell me about yourself.',
    'What are your strengths and weaknesses?',
    'Why do you want to work for our company?',
    'Describe a challenging situation you faced at work and how you dealt with it.',
    'Where do you see yourself in 5 years?',
    'How do you handle pressure or stressful situations?',
    'Do you have any questions for us?',
]

interface QuestionAnswerInterface {
    prompt: string;
    answer: string;
}

// obj={key1:value,key2:value2}

// for(i to n){
//     obj[`key+${i}`]
// }

const Interview = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [userResponses, setUserResponses] = useState<string[]>([]);
    const [feedback, setFeedback] = useState<string>("");

    useEffect(() => {
            // displayFeedback();
            fetchDataWithAuthorizationAndBody();
    }, [])

    const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < interviewQuestions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        // else {
        //     displayFeedback();
        // }
    }



    const interviewFeedback =  {
          
            "question1": "Tell me about yourself.",
            "answer1": "Veerangana",
        
            "question2": "What are your strengths and weaknesses?",
            "answer2": "strengths",
         
            "question3": "Why do you want to work for our company?",
            "answer3": "Biotech",
         
            "question4": "Describe a challenging situation you faced at work and how you dealt with it.",
            "answer4": "situation",
            "question5": "Where do you see yourself in 5 years?",
            "answer5": "Senior role",
         
            "question6": "How do you handle pressure or stressful situations?",
            "answer6": "time management",
           "question7": "Do you have any questions for us?",
            "answer7": "no",
         "query":"I have provided object of questions and answer given by candidate, please review all the answers and provide me overall feedback of whole interview and not for each question rating out off 10 and also areas of improvement that candidate need give me in object format "
        }

    
      
      // Convert the object to a string format using JSON.stringify()
      const interviewFeedbackString = JSON.stringify(interviewFeedback);
      

      



    const handleResponseChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;

        // Update the userResponses state array with the current response
        setUserResponses((prevResponses) => {
            const updatedResponses = [...prevResponses];
            updatedResponses[currentQuestionIndex] = value;
            return updatedResponses;
        });
    };

    const fetchDataWithAuthorizationAndBody = async () => {
        const url = 'http://localhost:8080/bot/chat'; // Replace with your API endpoint
        const authToken = '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'; // Replace with your actual authorization token
      
        try {
          const response = await axios({
            method: 'GET',
            url: url,
            headers: {
              Authorization: `Bearer ${authToken}`,
              'Content-Type': 'application/json',
              // Add any other headers if required
            },
            params: {
              prompt: `${interviewFeedbackString}`
            },
          });
      
          // Handle the response here
          console.log(response.data);
        } catch (error) {
          // Handle errors
          console.error('Error fetching data:', error);
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
        <div className='bg-[#cbd5e1] h-screen flex items-center'>
            {
                currentQuestionIndex < interviewQuestions.length ? (
                    <div className='bg-white p-12 m-auto w-8/12 rounded-2xl'>
                        {/* <h2 className='pb-5'>Question {currentQuestionIndex+1}</h2> */}
                        <div className='pb-5 flex flex-row justify-between'>
                            <h2>Question {currentQuestionIndex+1}</h2>
                            <h2>{`${currentQuestionIndex+1}/${interviewQuestions.length}`}</h2>
                        </div>
                        <p className='pb-5 text-2xl'>{interviewQuestions[currentQuestionIndex]}</p>
                        <textarea
                            rows={6}
                            cols={100}
                            value={userResponses[currentQuestionIndex] || ""}
                            onChange={handleResponseChange}
                            className='bg-[#e2e8f0]'
                        />
                        <button onClick={handleNextQuestion} className='p-5 rounded-lg bg-[#8fa6c4] text-white text-extrabold mt-5 ease-in-out duration-300 hover:bg-[#6a7e99]'>
                            Next Question
                        </button>
                    </div>
                ) : (
                    <div className='bg-white p-12 m-auto w-8/12 rounded-2xl'>
                        {/* Feedback */}
                        <h3>Feedback : </h3>
                    </div>
                )
            }
        </div>
    )
}

export default Interview