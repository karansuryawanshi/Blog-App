import React, { useState } from 'react'
import LoggedInComponent from './LoggedInComponent'
import { Icon } from '@iconify-icon/react'
import BlogCard from '../container/BlogCards'
import { useEffect } from 'react'
import { makeAuthenticatedGETRequest } from '../utils/helpers'
import { useParams } from 'react-router-dom'

const Catgory = () => {
  const {category} = useParams();
  const [categoryData, setCategoryData] = useState([""])

  const getPosterData = (category) => {
    switch (category) {
      case 'Food':
        return {posterText:"Food",
                posterUrl:"https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDQ1fHxsaWZlc3R5bGUlMjBmb29kfGVufDB8fHx8MTY5MjQ0NjcwOXww&ixlib=rb-4.0.3&q=80&w=2000",
                logo:"fluent:bowl-salad-24-filled"};
      case 'Health':
        return {posterText:"Health",
                posterUrl:"https://images.unsplash.com/photo-1453487021979-5b739b2849f4?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDd8fGxpZmVzdHlsZSUyMGhlYWx0aHxlbnwwfHx8fDE2OTI0NDY2NjZ8MA&ixlib=rb-4.0.3&q=80&w=2000",
              logo:"healthicons:health"};

      case 'Travel':
        return {posterText:"Travel",
                posterUrl:"https://images.unsplash.com/photo-1505778276668-26b3ff7af103?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                logo:"material-symbols:travel"};

      case 'Technology':
        return {posterText:"Technology",
                posterUrl:"https://images.unsplash.com/photo-1522682178063-73ad4736e440?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGZhc2hpb24lMjB0ZWNobm9sb2d5JTIwY2FtZXJhfGVufDB8fHx8MTY5MjQ0NjMwOXww&ixlib=rb-4.0.3&q=80&w=2000",
                logo:"streamline:ai-technology-spark-solid"};

      case 'Lifestyle':
        return {posterText:"Lifestyle",
                posterUrl:"https://images.unsplash.com/photo-1608110417822-1d586b76de1a?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE1MHx8bGlmZXN0eWxlJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NjU0MHww&ixlib=rb-4.0.3&q=80&w=2000",
                logo:"simple-icons:stylelint"};

      case 'Nature':
        return {posterText:"Nature",
              posterUrl:"https://images.unsplash.com/photo-1496571330383-9b977f4a021d?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDM3fHxuYXR1cmUlMjBmbG93ZXJ8ZW58MHx8fHwxNjkyNDQ2NDMxfDA&ixlib=rb-4.0.3&q=80&w=2000",
              logo:"mdi:mountain"};

      case 'Inspiration':
        return {posterText:"Inspiration",
              posterUrl:"https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEyfHxsaWZlc3R5bGV8ZW58MHx8fHwxNjkyMzYzMzYwfDA&ixlib=rb-4.0.3&q=80&w=2000",
              logo:"game-icons:inspiration"};

      default:
        return {posterText:"",posterUrl:""};
    }
  };
  const {borderColorClass, posterText, posterUrl,logo} = getPosterData(category);


  console.log(category)
  useEffect (()=>{
    const getData = async()=>{
        const response = await makeAuthenticatedGETRequest(
            `/blog/get/blogs/category/`+category
        );
        setCategoryData(response.data)
        // console.log(response.data)
      };
    getData();
},[])

  return (
    <div>
      <LoggedInComponent>
        <div className='containers'>
          <div className='flex items-center justify-center py-10'>
            <div className='w-10/12 bg-black rounded-2xl flex items-center justify-center'style={{
              backgroundImage:`url(${posterUrl})`,
              height:"28rem"
            }}>
            <div>
              <div className='text-white bg-white px-48 py-24 rounded-2xl flex bg-opacity-70 text-gray-900 font-bold text-5xl bg-blur-3xl'>
              <Icon className="text-gray-900 mr-2" icon={logo} width="3.3rem" height="3.3rem" />
                  {posterText}
              </div>
            </div>
            </div>
          </div>
        <div className='flex items-center justify-center'>
          <div className='w-11/12 flex flex-wrap mb-8'>

          {categoryData.map((item)=>{
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
      </LoggedInComponent>
    </div>
  )
}

export default Catgory
