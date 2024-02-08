import React from 'react'
import BlogSingleCard from './BlogSingleCard'

const BlogCard = ({title,subtitle,category,imgUrl}) => {
  return (

      <div className='flex items-center justify-center mt-8 ml-5'>
            <div className='w-96'>
            
            <BlogSingleCard
              title={title}
              subtitle={subtitle}
              category={category}
              imgUrl={imgUrl}/>
            </div>
        </div>
  )
}

export default BlogCard
