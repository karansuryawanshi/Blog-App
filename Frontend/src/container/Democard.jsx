import React from 'react'
import "../routes/style/Signup.css"

const Democard = ({imgUrl,category,title}) => {

    const getBorderColorClass = (category) => {
        switch (category) {
          case 'Eat':
            return 'border-green-500';
          case 'Health':
            return 'border-green-600 bg-green-400';
          case 'Travel':
            return 'border-pink-600  bg-pink-400';
          case 'Technology':
            return 'border-yellow-600 bg-yellow-400';
          default:
            return 'border-gray-500';
        }
      };
      const borderColorClass = getBorderColorClass(category);

  return (
    
      <div className='w-5/6'>
                    <div className='main-block flex items-center justify-start border-2 border-gray-500 rounded-xl'>
                        <div className='flex'>
                            <img className='image w-44 h-36 p-5' src={imgUrl} alt="" />
                            <div className='flex mt-4 flex-col'>
                                <div className='w-min'>
                                    <div className={`flex text-white border-2 px-2 rounded-full ${borderColorClass}`}>{category}</div>
                                </div>
                                <div className='text-white font-semibold text-xl mt-3'>
                                    {title}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Democard
