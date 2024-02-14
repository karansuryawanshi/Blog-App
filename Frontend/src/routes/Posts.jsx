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
            <div className=' flex'>
                <div className='navbar flex p-8 ml-8 items-center space-x-5 w-2/4'>
                    <div className='Logo text-white font-semibold text-3xl'>
                        Blogo
                    </div>
                    <div className='text-white flex text-base'>
                        <ul className='flex space-x-5'>
                            <li className='cursor-pointer'>Style Guide</li>
                            <li className='cursor-pointer'>Tags</li>
                            <li className='cursor-pointer'>Authors</li>
                            <li className='cursor-pointer'>Post</li>
                            <li className='cursor-pointer'>Membership</li>
                            <li className='cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        
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
                <div>
                    <NewsLetter></NewsLetter>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts
