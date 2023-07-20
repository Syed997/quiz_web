import React from 'react'

function ScoreView() {
  return (
      <div className='w-2/3 flex flex-col justify-center items-center bg-red-400 rounded-lg p-20'>
        <p className="text-2xl mb-8">You have scored 1 out of 5</p>
        <button className="border-2 px-4 rounded-sm">Reset</button>
    </div>
  )
}

export default ScoreView