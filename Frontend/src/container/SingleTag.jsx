import React from 'react'

const SingleTag = ({category,classname}) => {
  const getBorderColorClass = (category) => {
    switch (category) {
      case 'Food':
        return 'border-green-500';
      case 'Health':
        return 'border-green-600 bg-green-400';
      case 'Travel':
        return 'border-pink-600 bg-pink-400';
      case 'Technology':
        return 'border-yellow-600 bg-yellow-400';
      case 'Lifestyle':
        return 'border-blue-600 bg-blue-400'
      case 'Nature':
        return 'border-red-600 bg-red-400'
      case 'Inspiration':
        return 'border-purple-600 bg-purple-400'
      default:
        return 'border-gray-500';
    }
  };
  const borderColorClass = getBorderColorClass(category);
  return (
      <div className='text-white'>
            <div className={`flex border-2 px-2 rounded-full w-min bg-opacity-20 ${borderColorClass} ${classname}`}>
                {category}
            </div>
        </div>
  )
}

export default SingleTag
