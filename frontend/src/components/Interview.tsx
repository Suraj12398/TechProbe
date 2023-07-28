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

const Interview = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [userResponses, setUserResponses] = useState<string[]>([]);
    const [feedback, setFeedback] = useState<string>("");

    // useEffect(() => {
    //     if(currentQuestionIndex === interviewQuestions.length){
    //         displayFeedback();
    //     }

    // }, [currentQuestionIndex])

    const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < interviewQuestions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        else {
            displayFeedback();
        }
    }

    const handleResponseChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;

        // Update the userResponses state array with the current response
        setUserResponses((prevResponses) => {
            const updatedResponses = [...prevResponses];
            updatedResponses[currentQuestionIndex] = value;
            return updatedResponses;
        });
    };


    const displayFeedback = async () => {

        try {
            
            let arrayOfPromptAndAnswer : Object[] = [];
    
            for(let i=0; i<interviewQuestions.length; i++){
                let obj : QuestionAnswerInterface = {
                    prompt: "",
                    answer: ""
                };

                obj.prompt = interviewQuestions[i];
                obj.answer = userResponses[i];

                arrayOfPromptAndAnswer.push(obj);
            }

            console.log(arrayOfPromptAndAnswer);
    
            // const res = await axios.get(``, {
            //                 params: {
            //                     arrayOfPromptAndAnswer
            //                 }
            //             });

            // console.log(res);
        }
        catch (error) {
            console.error(error);
        }
    }

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