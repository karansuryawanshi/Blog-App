// import React, { Children } from 'react'
import FeaturedPost from '../container/FeaturedPost';
import PopularTags from '../container/PopularTags';
import BlogCard from '../container/BlogCards';
import { Icon } from '@iconify-icon/react';
import NewsLetter from '../container/NewsLetter';
import Footer from '../container/Footer';
import "./style/Signup.css"
import background from "../assesets/background.png"
import { useEffect, useState } from 'react';
import { makeAuthenticatedGETRequest } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Zoom } from 'react-toastify';

const LoggedInComponent = ({children}) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")

    const navigate = useNavigate();

    const notify = ()=>{
        // console.log("Hello Buddy")
        toast("Hello Buddy",{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            })
    }
    

  return (
    
    <div className='w-screen h-screen'>
        <div className='main-page w-full h-full overflow-x-hidden'>
            <div className=' flex'>
                <div className='navbar flex p-8 ml-8 items-center space-x-5 w-2/4'>
                    <div className='Logo text-white font-semibold text-3xl'onClick={()=>{navigate("/home")}}>
                        Blogo
                    </div>
                    <div className='text-white flex text-base'>
                        <ul className='flex space-x-5'>
                            <li className='cursor-pointer'>Style Guide</li>
                            <li className='cursor-pointer'onClick={()=>{navigate("/tags")}}>Tags</li>
                            <li className='cursor-pointer'>Authors</li>
                            <li className='cursor-pointer' onClick={()=>{navigate("/post")}}>Post</li>
                            <li className='cursor-pointer'>Membership</li>
                            <li className='cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                    <ToastContainer/>
                </div>
                <div className='flex items-center justify-end w-2/4 text-white space-x-7 mr-20'>
                    <div onClick={notify}>
                        <Icon icon="tabler:search" width="1.6rem" height="1.6rem" />
                    </div>
                    <div>
                        <Icon icon="icon-park-outline:dark-mode" width="1.6rem" height="1.6rem" />
                    </div> 
                    <div className='text-white text-base cursor-pointer' onClick={()=>{navigate("/uploadblog")}}>
                         Upload Blog 
                    </div>
                    <div className='bg-white text-xl text-base bg-gradient-to-r from-blue-600 to-purple-700 px-2 py-1 rounded-full cursor-pointer' onClick={()=>{navigate("/profile")}}>
                        {/* {firstname[0]}{lastname[0]} */}   
                        KM
                    </div>
                </div>
            </div>
            <div>
                {children}
            </div>
        
            <div className='background pt-12'>
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

export default LoggedInComponent
