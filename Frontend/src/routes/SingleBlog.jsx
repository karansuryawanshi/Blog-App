import React, { useState } from 'react'
import FeaturedPost from '../container/FeaturedPost';
import PopularTags from '../container/PopularTags';
import BlogCard from '../container/BlogCards';
import { Icon } from '@iconify-icon/react';
import NewsLetter from '../container/NewsLetter';
import Footer from '../container/Footer';
import "./style/Signup.css"
import background from "../assesets/background.png"
import SingleTag from '../container/SingleTag';
import { makeAuthenticatedGETRequest } from '../utils/helpers';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


const SingleBlog = () => {
    const {blogId} = useParams();
    const [data, setData] = useState([""])
    
    useEffect(()=>{
        const getData = async ()=>{
            const response = await makeAuthenticatedGETRequest(`/blog/get/65cc5b212ec393a5fe7a8e66`)
            // setPlaylistDetails(response)
            setData(response)
            console.log(response)
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
                <div className='flex items-center justify-center w-2/4 text-white space-x-7'>
                    <div>
                        <Icon icon="tabler:search" width="1.6rem" height="1.6rem" />
                    </div>
                    <div>
                        <Icon icon="icon-park-outline:dark-mode" width="1.6rem" height="1.6rem" />
                    </div> 
                    <div className='text-white text-base'>
                        SignIn
                    </div>
                    <div className='bg-white text-base bg-gradient-to-r from-blue-600 to-purple-700 p-3 rounded-full '>
                        Become member
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-center my-8'>
                    <div className='w-11/12 '>
                        <div className='flex items-center justify-center'>
                            <div className='w-1/2 p-3'>
                                <div className='m-4'>
                                    <SingleTag 
                                        category={"Travel"}/>
                                </div>
                                <div className=' text-white'>
                                    <div className='font-bold text-5xl'>
                                        {data.title}
                                        {/* Never let your memories be greater than your dreams */}
                                    </div>
                                    <div className=' mt-8 text-xl text-gray-300'>
                                        {data.subtitle}
                                        {/* Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time backed to the east, and there was a shudder amongst the watchers on */}
                                    </div>
                                    <div className='flex space-x-8 text-gray-300'>
                                    <div className='flex font-bold items-center text-lg'>
                                        Karan Suryawanshi
                                        </div>
                                        <div className='flex items-center text-lg'>
                                            <Icon icon="clarity:date-line" width="1.5rem" height="1.5rem" className='mr-2 my-2' />
                                                Feb 22, 2002
                                        </div>
                                        <div className='flex items-center text-lg'>
                                            <Icon icon="wi:time-3" width="1.5rem" height="1.5rem" />
                                                3 min read
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='w-3/4 rounded-lg'>
                                <img className='rounded-2xl' src={data.image} alt="" />
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='w-1/2 text-xl text-gray-300 mt-8'>
                                {/* Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time backed to the east, and there was a shudder amongst the watchers on the cliff as they realized the terrible danger in which she now was. Between her and the port lay the great flat reef on which so many good ships have from time to time suffered, and, with the wind blowing from its present quarter, it would be quite impossible that she should fetch the entrance of the harbour.     */}
                                <ReactMarkdown>{data.description}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containers'>
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

export default SingleBlog
