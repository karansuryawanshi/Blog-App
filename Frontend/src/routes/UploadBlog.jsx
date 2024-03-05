import React, { useState } from 'react'
import { Icon } from '@iconify-icon/react';
import NewsLetter from '../container/NewsLetter';
import Footer from '../container/Footer';
import Input from '../container/Input';
import "./style/Signup.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import UploadImage from '../container/UploadImage';
import UploadVideo from '../container/UploadVideo';
import { makeAuthenticatedPOSTRequest} from '../utils/helpers';
import LoggedInComponent from './LoggedInComponent';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Zoom } from 'react-toastify';

const UploadBlog = () => {
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle]= useState ("")
    const [category, setCategory] =useState ("Inspiration")
    const [image, setImage] = useState ("")
    const [video, setVideo] = useState ("")
    const [description, setDescription] = useState ("")

    const navigate = useNavigate()

    const uploadSong = async ()=> {
        
        const data = {title, subtitle, category, image, video, description}
        // console.log(data)
        const response = await makeAuthenticatedPOSTRequest ("/blog/create",data)
        // console.log(response)
        toast("Blog uploaded Successfully",{
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
        <div className='background w-full h-full overflow-x-hidden'>
            <LoggedInComponent>
            <ToastContainer/>
            <div className='containers'>
                <div className=''>
                    <div className='flex-col items-center justify-center pb-4'>
                        <div className='text-white w-11/12 p-4'>
                            <div className='font-semibold text-3xl border-b p-4'>
                                Upload Blog
                            </div>
                            <div className='flex items-center justify-center flex-col'>
                                <div className='space-y-3'>
                                    <Input title={"Title"}
                                        placeholder={"Enter your title"}
                                        inputType={"Text"}
                                        value={title}
                                        setValue={setTitle}/>

                                    <Input title={"Subtitle"}
                                        placeholder={"Enter your Subtitle"}
                                        inputType={"Text"}
                                        value={subtitle}
                                        setValue={setSubtitle}/>
                                </div>
                                    <div className='text-black mt-6 flex-col'>
                                        <p className='text-white pb-3 font-semibold text-xl'>Select Category </p>
                                        <select name="Blog-category" class="block" className='border-white px-14 py-2 rounded-full flex justify-center items-center w-max' value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                                            <option value="Inspiration">Inspiration</option>
                                            <option value="Nature">Nature</option>
                                            <option value="Lifestyle">Lifestyle</option>
                                            <option value="Health">Health</option>
                                            <option value="Travel">Travel</option>
                                            <option value="Food">Food</option>
                                            <option value="Technology">Technology</option>
                                        </select>
                                    </div>
                                    <div className='mt-14 flex space-x-5'>
                                        <UploadImage setUrl={setImage}/>
                                        <UploadVideo setUrl={setVideo}/>
                                    </div>
                                <div>     
                                </div>
                            </div>
                        </div>
                        <div className='p-5 mt-10 flex items-center justify-center'>
                            <div className='w-3/4 h-72 text-white'>
                                <ReactQuill theme="snow" className='text-white w-full h-72' value={description} onChange={setDescription}/>
                            </div>
                        </div>
                        <div className='p-14 flex items-center justify-center'>
                            <div className='w-min bg-gradient-to-r from-blue-600 to-purple-700 text-white px-10 py-3 font-semibold rounded-full cursor-pointer' 
                            onClick={uploadSong}
                            >
                                Submit
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

export default UploadBlog
