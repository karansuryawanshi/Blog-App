import React from 'react'

const SingleTag = ({category}) => {
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
      case 'Lifestyle':
        return 'border-blue-600 bg-blue-400'
        case 'Nature':
          return 'border-red-500 bg-red-300'
      default:
        return 'border-gray-500';
    }
  };
  const borderColorClass = getBorderColorClass(category);
  return (
      <div className='text-white'>
            <div className={`flex border-2 px-2 rounded-full w-min ${borderColorClass}`}>
                {category}
                {/* Health */}
            </div>
        </div>
  )
}

export default SingleTag
