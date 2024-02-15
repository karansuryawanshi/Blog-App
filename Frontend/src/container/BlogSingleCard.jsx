import React from 'react'
import SingleTag from './SingleTag'
import { Icon } from '@iconify-icon/react'
import "../routes/style/Signup.css"
import { useNavigate } from 'react-router-dom'

const BlogSingleCard = ({title,subtitle,imgUrl,category,blogId}) => {

    console.log(blogId)
    const navigate = useNavigate();
    
  return (
    <div className='blog-card border-2 border-gray-500 rounded-lg'>
        <div className='p-4 flex items-center justify-center'>
            <img className='w-80 h-52 rounded-lg' 
                src={imgUrl} 
                // src="https://images.unsplash.com/photo-1582657233895-0f37a3f150c0?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI2fHxmYXNoaW9uJTIwJTIwZmxvd2VyfGVufDB8fHx8MTY5MjQ0NTE5Mnww&ixlib=rb-4.0.3&q=80&w=2000"
                alt="" />
        </div>
        <div className='ml-6'>
            <SingleTag category={category}/>
        </div>
        <div className=' flex items-center justify-center mt-2'>
            <div className='text-white font-semibold text-2xl ml-5 w-11/12 cursor-pointer' onClick={()=>{navigate("/blog/"+blogId)}}>
                {title}
            </div>
        </div>
        <div className='flex items-center justify-center mt-4'>
            <div className='text-gray-300 w-11/12 mx-5'>
                {subtitle}...
            </div>
        </div>
            <div className='p-3 text-white flex items-center ml-3'>
                <Icon className='text-white' icon="wi:time-3" width="1.2rem" height="1.2rem" />
                <div className='ml-1'>3 min read</div>
            </div>
    </div>
  )
}

export default BlogSingleCard
