import React from 'react'
import Tags from './Tags'
import { Icon } from '@iconify-icon/react'
import "../routes/style/Signup.css"

const PopularTags = () => {
  return (
    <div className='feature-post'>
        <div className='text-white font-bold text-2xl pt-10 flex items-center justify-center'>
        Popular Tags
        </div>
        <div className='flex items-center justify-center'>
            <div className='w-11/12 mt-10 flex flex-wrap' >
                <Tags category={"Inspiration"} imgUrl={"https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEyfHxsaWZlc3R5bGV8ZW58MHx8fHwxNjkyMzYzMzYwfDA&ixlib=rb-4.0.3&q=80&w=2000"}/>
                <Tags category={"Nature"} imgUrl={"https://images.unsplash.com/photo-1496571330383-9b977f4a021d?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDM3fHxuYXR1cmUlMjBmbG93ZXJ8ZW58MHx8fHwxNjkyNDQ2NDMxfDA&ixlib=rb-4.0.3&q=80&w=2000"}/>
                <Tags category={"Lifestyle"} imgUrl={"https://images.unsplash.com/photo-1608110417822-1d586b76de1a?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE1MHx8bGlmZXN0eWxlJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NjU0MHww&ixlib=rb-4.0.3&q=80&w=2000"}/>
                <Tags category={"Health"} imgUrl={"https://images.unsplash.com/photo-1453487021979-5b739b2849f4?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDd8fGxpZmVzdHlsZSUyMGhlYWx0aHxlbnwwfHx8fDE2OTI0NDY2NjZ8MA&ixlib=rb-4.0.3&q=80&w=2000"}/>
                <Tags category={"Travel"} imgUrl={"https://images.unsplash.com/photo-1526857240824-92be52581d9b?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fGZhc2hpb24lMjB0cmF2ZWx8ZW58MHx8fHwxNjkyNDQ2MjIzfDA&ixlib=rb-4.0.3&q=80&w=2000"}/>
                <Tags category={"Technology"} imgUrl={"https://images.unsplash.com/photo-1522682178063-73ad4736e440?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGZhc2hpb24lMjB0ZWNobm9sb2d5JTIwY2FtZXJhfGVufDB8fHx8MTY5MjQ0NjMwOXww&ixlib=rb-4.0.3&q=80&w=2000"}/>

            <div className='see-all-tag ml-10 cursor-pointer p-4 w-64 rounded-full flex border-2 border-gray-500 mb-5 hover:bg-gradient-to-r from-blue-600 to-purple-700'>
                <div className='text-white flex items-center ml-2 font-semibold text-2xl'>
                    See all tags 
                    <div>
                        <Icon className='mt-3 ml-3' icon="grommet-icons:link-next" width="1.2rem" height="1.2rem" />
                    </div>
                </div>
            </div> 
            </div>
        </div>
    </div>
  )
}

export default PopularTags
