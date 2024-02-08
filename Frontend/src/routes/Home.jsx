import React from 'react'
import FeaturedPost from '../container/FeaturedPost';
import PopularTags from '../container/PopularTags';
import { Icon } from '@iconify-icon/react';


const Home = () => {

  return (
    <div className='w-screen h-screen'>
        <div className='main-page w-full h-full overflow-auto'>
            <div className=' flex'>
                <div className='navbar flex p-8 ml-8 items-center space-x-5 w-2/4'>
                    <div className='Logo text-white font-semibold text-3xl'>
                        Proto
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
            <div className='text-white flex flex-col items-center justify-center font-bold text-6xl mt-16'>
                Hello 👋, we are Proto, exploring 
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
                    <div className='bg-white text-lg w-1/6 px-3 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center font-bold'>
                        Join now - it's free!
                    </div>
                </div>
            </div>
            <div>
                <FeaturedPost/>
            </div>
            <div>
                <PopularTags></PopularTags>
            </div>
        </div>
    </div>
  )
}

export default Home
