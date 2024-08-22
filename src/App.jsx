import { useState } from 'react'
import data from './components/QuestionData'
import './App.css'
import QuestionBeta from './components/QuestionBeta';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <div className=' flex justify-center items-center content-center h-screen'>
        <div className='bg-orange-400 w-5/12 rounded-xl p-8'>
          <h2 className='flex justify-center text-2xl mb-10 pb-2 border-b-2'>What Your Question?</h2>
          {
            questions.map((question,index) => {
              return <QuestionBeta key={index} {...question} />
            })
          }

        </div>

      </div>

    </>

  )
}

export default App
