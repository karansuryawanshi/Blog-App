import React from 'react'
import "../routes/style/Signup.css"

const TagCard = ({imgUrl, tag}) => {
  return (
    <div className='text-white ml-6 mb-8'>
        <div className=''>
            <div className='feature-card w-72 h-80 rounded-xl border-2 border-gray-500'>
                <div className='rounded-xl h-60 p-5 w-72'>
                    <img className='rounded-xl' src={imgUrl} alt="" />
                </div>
                <div className='flex items-center justify-center text-2xl font-bold'>
                    {tag}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TagCard
