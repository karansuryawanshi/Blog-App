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
import LoggedInComponent from './LoggedInComponent';

const SingleBlog = () => {
    const {blogId} = useParams();
    console.log(blogId)
    const [data, setData] = useState([""])
    const[firstname, setFirstname] = useState("")
    const[lastname, setLastname] = useState("")
    
    useEffect(()=>{
        const getData = async ()=>{
            const response = await makeAuthenticatedGETRequest(`/blog/get/`+blogId)
            // setPlaylistDetails(response)
            setData(response)

            console.log(response)
            if (response.creater) {
                setFirstname(response.creater.firstname);
                setLastname(response.creater.lastname);
            }
        };

        getData();
    },[])

    const getLink = () => {
        return `${window.location.origin}/blog/${blogId}`;
      };

      const copyToClipboard = () => {
        const link = getLink();
        navigator.clipboard.writeText(link)
        alert("Link Copied to clipboard...")
      };

      const encodedTitle = encodeURIComponent("blogTitle");
      const encodedURL = encodeURIComponent(getLink());
      
      const twitterShareURL = `https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`;

      const shareOnTweeter=()=>{
        window.open(twitterShareURL, '_blank');
      }

  return (
    <div className='w-screen h-screen'>
        <div className='main-page w-full h-full'>
            <LoggedInComponent>
            <div className='containers'>
                <div className='flex items-center justify-center py-8'>
                    <div className='w-11/12 '>
                        <div className='flex items-center justify-center'>
                            <div className='w-1/2 p-3'>
                                <div className='m-4'>
                                    <SingleTag 
                                        category={data.category}/>
                                </div>
                                <div className=' text-white'>
                                    <div className='font-bold text-5xl'>
                                        {data.title}
                                    </div>
                                    <div className=' mt-8 text-xl text-gray-300'>
                                        {data.subtitle}
                                    </div>
                                    <div className='flex space-x-8 text-gray-300'>
                                    <div className='flex font-bold items-center text-lg'>
                                        {firstname} {lastname}
                                        </div>
                                        <div className='flex items-center text-lg'>
                                            <Icon icon="clarity:date-line" width="1.5rem" height="1.5rem" className='mr-2 my-2' />
                                                Feb 22, 2002
                                                {/* {data.date} */}
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
                            <div className='w-3/4 rounded-lg flex items-center justify-center'>
                                <img className='rounded-2xl' src={data.image} alt="" />
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='w-1/2 text-xl text-gray-300 mt-8'>
                                <div dangerouslySetInnerHTML={{__html: data.description}}>
                                    {/* {data.description} */}
                                </div>
                                <div className='font-semibold pt-10 text-xl'>
                                    Share this article:
                                    <div className='pt-4 space-x-5'>
                                        <Icon className='bg-gray-400 p-1 rounded-full cursor-pointer text-black' icon="ri:twitter-x-fill" width="1.5rem" height="1.5rem" onClick={shareOnTweeter}/>
                                        <Icon className='bg-gray-400 p-1 rounded-full cursor-pointer text-black' icon="ph:link-bold" width="1.5rem" height="1.5rem" onClick={copyToClipboard}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </LoggedInComponent>
        </div>
    </div>
  )
}

export default SingleBlog
