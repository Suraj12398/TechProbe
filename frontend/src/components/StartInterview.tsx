import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Interview from './Interview'
import axios from 'axios';

const StartInterview = (field: string) => {
    const [interviewQuestions, setInterviewQuestions] = useState<string[]>([]);

    // useEffect(() => {
    //     let res = axios.get(``, {
    //         params: {
    //             field
    //         }
    //     });

    //     console.log(res);

    //     // localStorage.setItem("interviewques", JSON.stringify())

    // }, [field]);


    return (
        <div className='bg-[#cbd5e1] h-screen flex items-center'>
            {
                <div className='bg-white p-12 m-auto w-8/12 rounded-2xl'>
                    <h2>Answer 5 interview questions</h2>
                    <p className='pb-5 text-2xl'>When you're done, receive a feedback about your scope of improvement</p>

                    <Link to={'/interview'}>
                        <button className='p-5 rounded-lg bg-[#8fa6c4] text-white text-extrabold mt-5 ease-in-out duration-300 hover:bg-[#6a7e99]'>
                            Start Interview
                        </button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default StartInterview