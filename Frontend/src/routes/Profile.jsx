import React, { useEffect, useState } from 'react'
import LoggedInComponent from './LoggedInComponent'
import { Icon } from '@iconify-icon/react'
import BlogCard from '../container/BlogCards'
import { makeAuthenticatedGETRequest } from '../utils/helpers'

const Profile = () => {
    const [myData, setMyData] = useState([""]);
    const [lastname, setLastname] = useState ([""])
    const [firstname, setFirstname] = useState ([""])

    useEffect(()=>{
        const myData = async ()=>{
            const response = await makeAuthenticatedGETRequest ("/blog/get/blog/me")
            setMyData(response.blogs)
            console.log(response.blogs)
            if(response.blogs[0]){
                setFirstname(response.blogs[0].creater.firstname)
                setLastname(response.blogs[0].creater.lastname)
            }
        } 
        myData()
    },[])

  return (
    <LoggedInComponent>
        <div className='containers'>
            <div className='flex items-center justify-center'>
                <div className='w-10/12 rounded-2xl flex item-center justify-center overflow-hidden'style={{
                    backgroundImage:`url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                    height:"28rem"
                    }}>
                    <div className='flex items-center'>
                        <div className='text-white bg-white px-48 py-24 rounded-2xl flex bg-opacity-50 text-gray-900 font-bold text-5xl bg-blur-3xl'>
                            <Icon className="text-gray-900 mr-2" icon="iconamoon:profile-fill" width="3.3rem" height="3.3rem" />
                                {/* Karan Suryawanshi */}
                                { {firstname} || {lastname} ?(
                                    <div>
                                        {firstname} {lastname}
                                    </div>

                                ):(
                                    <div>username</div>
                               )
                                }
                                
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white'>
                <div className='flex items-center justify-center'>
                    <div className='text-white py-10 text-3xl font-bold'>
                        My Posts
                    </div>
                </div>
                    <div className='flex items-center justify-center'>
                        <div className='w-11/12 flex items-center justify-center flex-wrap'>
                        {myData.map((item)=>{
                            return(
                                <BlogCard 
                                title={item.title}
                                subtitle={item.subtitle}
                                category={item.category}
                                imgUrl={item.image}
                                blogId={item._id}/>
                            )
                        })}
                        </div>
                    </div>
            </div>
        </div>
    </LoggedInComponent>
  )
}

export default Profile
