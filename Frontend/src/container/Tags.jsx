import React from 'react'
import "../routes/style/Signup.css"

const Tags = ({category,imgUrl}) => {
  return (
    <div>
        <div className='popular-tags w-64 rounded-full flex border-2 border-gray-500 mb-5 cursor-pointer'>
            <div className='p-3'> 
                <img className='w-14 h-14 rounded-full' src={imgUrl} alt="" />
            </div>
            <div className=' text-white flex items-center ml-2 font-semibold text-2xl'>
                {category}
            </div>
        </div>    
    </div>
  )
}

export default Tags
