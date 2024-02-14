import React from 'react'
import BlogSingleCard from './BlogSingleCard'

const BlogCard = ({title,subtitle,category,imgUrl, blogId}) => {
  return (
    <div>
      <div className='flex items-center justify-center mt-8 ml-14'>
            <div className='w-96 min-h-full'>
            
            <BlogSingleCard
              title={title}
              subtitle={subtitle}
              category={category}
              imgUrl={imgUrl}
              blogId={blogId}/>
            </div>
        </div>
      </div>
  )
}

export default BlogCard
