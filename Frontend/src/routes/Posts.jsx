import React, { useState } from 'react'
import FeaturedPost from '../container/FeaturedPost';
import PopularTags from '../container/PopularTags';
import BlogCard from '../container/BlogCards';
import { Icon } from '@iconify-icon/react';
import NewsLetter from '../container/NewsLetter';
import Footer from '../container/Footer';
import "./style/Signup.css"
import background from "../assesets/background.png"
import { makeAuthenticatedGETRequest } from '../utils/helpers';
import { useEffect } from 'react';
import LoggedInComponent from './LoggedInComponent';

const Posts = () => {

    const [post, setPost] = useState([]);

    useEffect (()=>{
      
        const getData = async()=>{
            const response = await makeAuthenticatedGETRequest(
                "/blog/get/allblogs/home"
            );
            setPost(response.data)
            console.log(response.data.title)
          };
        getData();
    },[])

  return (
    <div className='w-screen h-screen'>
        <div className='main-page w-full h-full overflow-x-hidden'>

            <LoggedInComponent>
        
            <div className='containers'>
                <div>
                    <div className='flex items-center justify-center text-white font-semibold text-3xl my-5'>
                        <div className=''>
                            Posts
                        </div>
                    </div>
                    <div className='feature-post flex items-center justify-center'>
                        <div className='flex flex-wrap w-11/12 min-h-full'>     
                        {post.map((item)=>{
                            return(
                                <BlogCard 
                                title={item.title}
                                subtitle={item.subtitle}
                                category={item.category}
                                imgUrl={item.image}
                                blogId = {item._id}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className='feature-post flex items-center justify-center text-white py-14'>
                        <div className='py-2 px-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 cursor-pointer'>
                        Load More
                        </div>
                    </div>
                </div>
            </div>
            </LoggedInComponent>
        </div>
    </div>
  )
}

export default Posts
