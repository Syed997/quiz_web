import React from 'react'

function QuizView() {
  return (
      <div className='w-2/3 flex flex-col justify-center items-center bg-red-400 rounded-lg p-10'>
        <div>
            <div className='font-bold'>
                <span>Question 1/5</span>
            </div>
            
        </div>

        <div>
              <div className="text-xl my-4">What comes after b?</div>
        </div>

        <div className='flex flex-col items-center justify-center py-2'>
            <button className='border-2 px-8 rounded-sm bg-white'>a</button>
              <button className='border-2 px-8 rounded-sm bg-white my-2'>c</button>
              <button className='border-2 px-8 rounded-sm bg-white'>b</button>
        </div>
    </div>
  )
}

export default QuizView