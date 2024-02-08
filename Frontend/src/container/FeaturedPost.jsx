import React from 'react'
import "../routes/style/Signup.css"
import { Icon } from '@iconify-icon/react';
import Democard from './Democard';

const FeaturedPost = () => {
  return (
    <div className='h-full w-full'>
        <div className='flex items-center justify-center'>
            <div className='text-white font-bold text-2xl mt-10'>Featured posts</div>
        </div>
        <div className=' flex mt-10'>
            <div className='featured-post-left flex items-center justify-center'>
                <div className='feature-card w-5/6 flex flex-col border-2 border-gray-500 rounded-xl'>
                    <div className='flex items-center justify-center p-4'>
                        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-5/6 h-5/6 flex justify-center items-center rounded-xl'/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-white'>
                            <div className='flex border-2 border-pink-800 bg-pink-400 px-2 rounded-full w-min ml-14'>
                                Travel
                            </div>
                        </div>
                    </div>
                <div className='text-white flex flex-col items-center justify-center'>
                    <div className='w-5/6 h-5/6 '>
                        <div className='font-bold text-3xl'>Never let your memories be greater than your dreams</div>
                        <div className='text-gray-300 text-lg'>Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time backed to the east, and there was a shudder amongst the watchers on</div>
                    </div>
                </div>
                    <div className='pl-12 p-3 text-white flex items-center'>
                        <Icon className='text-white' icon="wi:time-3" width="1.2rem" height="1.2rem" />
                        <div className='ml-1'>3 min read</div>
                    </div>
                </div>
            </div>
            <div className='featured-post-right space-y-7'>
            <Democard
                imgUrl={"https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIzfHxmYXNoaW9uJTIwJTIwZmxvd2VyJTIwbGlmZXN0eWxlfGVufDB8fHx8MTY5MjQ0NTI1N3ww&ixlib=rb-4.0.3&q=80&w=2000"}
                category={"Travel"}
                title={"Self-observation is the first step of inner unfolding"}
                />
            <Democard
                imgUrl={"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                category={"Health"}
                title={"The mind and body are not separate. what affects one, affects the other"}
            />
            <Democard
                imgUrl={"https://images.unsplash.com/photo-1522000243595-42c412404679?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGZhc2hpb24lMjBzZWElMjB0ZWNofGVufDB8fHx8MTY5MjQ0NTg4NHww&ixlib=rb-4.0.3&q=80&w=2000"}
                category={"Technology"}
                title={"New tech innovation for low cost ocean cleanup"}
            />
            <Democard
                imgUrl={"https://images.unsplash.com/photo-1670349148055-e11a0b3be242?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wxfDF8c2VhcmNofDI5fHxoYXBweXxlbnwwfHx8fDE2NzE0MzI2NjY&ixlib=rb-4.0.3&q=80&w=2000"}
                category={"Health"}
                title={"All the money in the world can't buy you back good health"}
            />

            </div>
        </div>
    </div>
  )
}

export default FeaturedPost