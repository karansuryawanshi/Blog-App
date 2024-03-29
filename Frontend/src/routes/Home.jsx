import React from 'react'
import FeaturedPost from '../container/FeaturedPost';
import PopularTags from '../container/PopularTags';
import BlogCard from '../container/BlogCards';
import { Icon } from '@iconify-icon/react';
import NewsLetter from '../container/NewsLetter';
import Footer from '../container/Footer';
import "./style/Signup.css"
import background from "../assesets/background.png"
import LoggedInComponent from './LoggedInComponent';
import {  useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const BlogData = [
        {
          title:"Autumn is a second spring when every leaf is a flower",
          subtitle:"She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despise almost every body and",
          category:"Health",
          imgUrl:"https://images.unsplash.com/photo-1582657233895-0f37a3f150c0?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI2fHxmYXNoaW9uJTIwJTIwZmxvd2VyfGVufDB8fHx8MTY5MjQ0NTE5Mnww&ixlib=rb-4.0.3&q=80&w=2000"
        },
        {
          title:"Never let your memories be greater than your dreams",
          subtitle:"Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time backed to the east",
          category:"Lifestyle",
          imgUrl:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI4fHxmYXNoaW9uJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NTA2MHww&ixlib=rb-4.0.3&q=80&w=2000"
        },
        {
            title:"Amphibious drone are being used to send medicine to flooded area",
            subtitle:"Another tragedy. Had single watch to-night, as crew too tired to double. When morning watch came on deck could find no one",
            category:"Technology",
            imgUrl:"https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDd8fGRyb25lfGVufDB8fHx8MTY5MjQ0NTYwM3ww&ixlib=rb-4.0.3&q=80&w=2000"
          },
          {
            title:"I do not stick to rules when cooking. I rely on my imagination",
            subtitle:"I walked down to the station with them, and then wandered through the streets of the little town, finally returning to the hotel, where I lay upon the sofa and tried to interest myself",
            category:"Travel",
            imgUrl:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww"
          },
          {
            title:"My wish is to stay always like this, living quietly in a corner of nature",
            subtitle:"I could not tell the others of the day's discovery till we were alone; so after dinner--followed by a little music to save appearances even amongst ourselves.",
            category:"Nature",
            imgUrl:"https://images.unsplash.com/photo-1536209604112-c4f045f94729?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE5fHxmb3Jlc3QlMjBob3VzZXxlbnwwfHx8fDE2NzE0MzQ0MDU&ixlib=rb-4.0.3&q=80&w=2000"
          },
          {
            title:"Life is too important to be taken seriously",
            subtitle:"Between these two, I now felt I had to choose. My two natures had memory in common, but all other faculties were most unequally shared between them. Jekyll (who was composite) now with the",
            category:"Lifestyle",
            imgUrl:"https://images.unsplash.com/photo-1651613543604-195861551d15?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fGhhcHB5fGVufDB8fHx8MTY3MTQzMjY2Ng&ixlib=rb-4.0.3&q=80&w=2000"
          },
      ]

  return (
      <div className='w-screen h-screen'>
        <div className='main-page w-full h-full overflow-x-hidden'>
        <LoggedInComponent>
        <div className='text-white flex flex-col items-center justify-center font-bold text-6xl mt-16'>
                Hello 👋, we are Blogo, exploring 
                <div className='flex space-x-2 mt-2'>
                    <div className='flex' style={{ background: "linear-gradient(to right, #215DEE, #B61CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        <p className='py-3'>Fashion</p> 
                    </div>
                        <span>,</span>
                    <p className='py-3' style={{ background: "linear-gradient(to right, #215DEE, #B61CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Lifestyle</p>
                    <p  className='py-3'> and</p>
                    <p  className='py-3' style={{ background: "linear-gradient(to right, #215DEE, #B61CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Health</p>
                </div>
            </div>
            <div className='text-white mt-8'>
                <div className='text-lg items-center justify-center flex space-x-2'>
                    <div className='ml-1'>
                        Introducing a modern and sleek theme for Ghost. Perfect for 
                        <div className='ml-1 font-bold'>magazine, newsletter, professional and personal blog </div> 
                        <div className='ml-1 flex items-center justify-center'>publishing.</div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-14'>
                    <div className='bg-white text-lg px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center font-bold cursor-pointer'onClick={()=>{navigate("/post")}}>
                        Explore!
                    </div>
                </div>
            </div>
        
            <div className='containers'>

                <div>
                    <FeaturedPost/>
                </div>
                <div>
                    <PopularTags/>
                </div>
                <div>
                    <div className='feature-post flex items-center justify-center'>
                        <div className='flex flex-wrap w-11/12'>     
                        {BlogData.map((item)=>{
                            return(
                                <BlogCard 
                                title={item.title}
                                subtitle={item.subtitle}
                                category={item.category}
                                imgUrl={item.imgUrl}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className='feature-post flex items-center justify-center text-white py-14'>
                        <div className='py-2 px-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 cursor-pointer'onClick={()=>{navigate("/post")}}>
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

export default Home
