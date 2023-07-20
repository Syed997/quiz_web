import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
      <div className='w-full h-full sm:w-2/3 sm:h-2/3 flex flex-col justify-center items-center bg-orange-300 rounded-lg'>
        <div className='flex flex-col my-4'>
            <p className="text-xl mb-8">Start your Quiz!</p>
              <Link className="border-2 px-4 rounded-sm flex justify-center bg-green-800 shadow-lg hover:scale-110 duration-500" to='/quiz'>Start</Link>
        </div>
    </div>
  )
}

export default Start