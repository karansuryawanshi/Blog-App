import React from 'react'

const Input = ({title,placeholder,inputType, value, setValue}) => {
  return (
    <div className='flex flex-col'>
        <div className='p-3 font-semibold text-xl'>
            {title}
        </div>
        <input 
          type={inputType} 
          className='px-5 py-2 rounded-full border-2 border-gray-500 w-min text-black' 
          placeholder={placeholder} 
          value={value}    
          onChange={(e)=>{
            setValue(e.target.value)
          }}/>
    </div>
  )
}

export default Input
