import React from 'react'

function ScoreView({ mark, handleResetBtn }) {
  return (
      <div className='w-full h-full sm:w-2/3 sm:h-2/3 flex flex-col justify-center items-center bg-orange-300 rounded-lg shadow-xl'>
          <p className="text-2xl my-4 px-0">You have scored {mark} out of 5</p>
      <button onClick={handleResetBtn} className="border-2 w-40 px-4 py-2 rounded-md flex justify-center bg-red-600 shadow-lg hover:scale-110 duration-500">Reset</button>
    </div>
  )
}

export default ScoreView