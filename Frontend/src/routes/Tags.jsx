import React from 'react'
import { Icon } from '@iconify-icon/react';
import NewsLetter from '../container/NewsLetter';
import Footer from '../container/Footer';
import "./style/Signup.css"
import TagCard from '../container/TagCard';
import LoggedInComponent from './LoggedInComponent';

const Tags = () => {
    const Tagdata = [
        {
            imgUrl : "https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEyfHxsaWZlc3R5bGV8ZW58MHx8fHwxNjkyMzYzMzYwfDA&ixlib=rb-4.0.3&q=80&w=2000",
            tag:"Inspiration"
        },
        {
            imgUrl : "https://images.unsplash.com/photo-1496571330383-9b977f4a021d?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDM3fHxuYXR1cmUlMjBmbG93ZXJ8ZW58MHx8fHwxNjkyNDQ2NDMxfDA&ixlib=rb-4.0.3&q=80&w=2000",
            tag:"Nature"
        },
        {
            imgUrl : "https://images.unsplash.com/photo-1608110417822-1d586b76de1a?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE1MHx8bGlmZXN0eWxlJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NjU0MHww&ixlib=rb-4.0.3&q=80&w=2000",
            tag:"Lifestyle"
        },
        {
            imgUrl : "https://images.unsplash.com/photo-1453487021979-5b739b2849f4?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDd8fGxpZmVzdHlsZSUyMGhlYWx0aHxlbnwwfHx8fDE2OTI0NDY2NjZ8MA&ixlib=rb-4.0.3&q=80&w=2000",
            tag:"Health"
        },
        {
            imgUrl : "https://images.unsplash.com/photo-1526857240824-92be52581d9b?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fGZhc2hpb24lMjB0cmF2ZWx8ZW58MHx8fHwxNjkyNDQ2MjIzfDA&ixlib=rb-4.0.3&q=80&w=2000",
            tag:"Travel"
        },
        {
            imgUrl : "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDQ1fHxsaWZlc3R5bGUlMjBmb29kfGVufDB8fHx8MTY5MjQ0NjcwOXww&ixlib=rb-4.0.3&q=80&w=2000",
            tag:"Food"
        },
        {
            imgUrl : "https://images.unsplash.com/photo-1522682178063-73ad4736e440?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGZhc2hpb24lMjB0ZWNobm9sb2d5JTIwY2FtZXJhfGVufDB8fHx8MTY5MjQ0NjMwOXww&ixlib=rb-4.0.3&q=80&w=2000",
            tag:"Technology"
        }
    ]

  return (
    <div className='w-screen h-screen'>
        <div className='main-page w-full h-full overflow-x-hidden'>
        <LoggedInComponent>
        <div className='containers pb-8'>
            <div className='text-white flex item-center justify-center'>
                <div className='text-4xl font-semibold'>
                    Tags
                </div>
            </div>
            
            <div className='mt-8'>
                <div className='flex flex-wrap ml-14'>
                        {Tagdata.map((item)=>{
                            return(
                                <TagCard
                                    imgUrl={item.imgUrl}
                                    tag={item.tag}/>
                            )

                            })}
                </div>
            </div>
        </div>
        </LoggedInComponent>
        </div>
    </div>
  )
}

export default Tags
