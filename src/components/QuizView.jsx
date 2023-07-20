import React from 'react'

function QuizView({ questions, currentQuestion, handleBtnClicked }) {
  return (
      <div className='w-full h-full sm:w-2/3 sm:h-2/3 flex flex-col justify-center items-center bg-orange-300 shadow-lg rounded-lg py-10 pr-6 '>
        <div className=''>
              <div className='font-bold'>
                <span>Question {currentQuestion +1}/{questions.length}</span>
            </div>
            
        </div>

        <div>
              <div className="text-xl my-4 px-2">{questions[currentQuestion].question}</div>
        </div>

        <div className='flex flex-col items-center justify-center py-2'>
            {
                questions[currentQuestion].answers.map(({text, isCorrect})=>(
                  <button onClick={() => handleBtnClicked(isCorrect)} key={text} className='border-2 py-2 px-8 rounded-md bg-slate-300 mb-2 w-60 hover:scale-110 duration-500 hover:bg-green-800'>{text}</button>
                ))
            }
              
        </div>
    </div>
  )
}

export default QuizView