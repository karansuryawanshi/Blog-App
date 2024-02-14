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

const UploadBlog = () => {
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle]= useState ("")
    const [category, setCategory] =useState ("")
    const [image, setImage] = useState ("")
    const [video, setVideo] = useState ("")
    const [description, setDescription] = useState ("")

    const uploadSong = async ()=> {

        const data = {title, subtitle, category, image, video, description}
        console.log(data)
        const response = await makeAuthenticatedPOSTRequest ("/blog/create",data)
        console.log(response)
    }
  return (
    <div className='w-screen h-screen'>
        <div className='background w-full h-full overflow-x-hidden'>
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
        
            <div className='containers'>
                <div className=''>
                    <div className='flex-col items-center justify-center mb-10'>
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
                        <div className='m-16 flex items-center justify-center'>
                            <div className='w-min bg-gradient-to-r from-blue-600 to-purple-700 text-white px-10 py-3 font-semibold rounded-full' 
                            onClick={uploadSong}
                            >
                                Submit
                            </div>
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

export default UploadBlog
