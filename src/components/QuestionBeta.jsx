import React, { useState } from 'react'
import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsFillPatchMinusFill } from "react-icons/bs";

function QuestionBeta({ title, answer }) {

    const [showAnswer, setShowAnswer] = useState(false);


    return (
        <>
            <div className='bg-gray-400 rounded-lg p-5 mb-5'>
                <div className="flex">

                    <h3 className='text-xl w-11/12'>{title}</h3>
                    {showAnswer && <BsFillPatchMinusFill size="22px" color='#37474f' className='cursor-pointer flex justify-end' onClick={() => setShowAnswer(!showAnswer)} />}
                    {!showAnswer && <BsFillPatchPlusFill size="22px" color='#37474f' className='cursor-pointer flex justify-end' onClick={() => setShowAnswer(!showAnswer)} />}

                </div>

                {
                    showAnswer && <p className='text-justify justify-center pt-3 pb-8'>{answer}</p>
                }


            </div>

        </>

    )
}

export default QuestionBeta