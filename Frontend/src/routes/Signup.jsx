import React, { useState } from 'react'
import { makeUnauthenticatePOSTRequest } from '../utils/helpers'
import "./style/Signup.css"
import { Navigate, useNavigate } from 'react-router-dom'
import {useCookies} from "react-cookie" 

const Signup = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[firstname,setFirstname] = useState("")
    const[lastname,setLastname] = useState("")
    const[username,setUsername] = useState("")
    const [cookie, setCookie] = useCookies(["token"])

    const navigate = useNavigate()

    const register = async ()=>{

        const data = {email, password, firstname, lastname, username}
        // console.log(data)
        const response =await makeUnauthenticatePOSTRequest("/auth/register",data)
        console.log(response)
        if(response || !response.err){
          const token = response.token;
          console.log(token)
          const date = new Date();
          date.setDate(date.getDate() + 30)
          setCookie("token",token,{path:"/",expires:date})
          alert("success")
          // Navigate("/")
        }
        else{
          alert("failure")
        }
    }
  return (
    <div className='w-screen h-screen'>
      <div className='signup-background w-full h-full flex items-center justify-center '>
        <div className='w-1/3 bg-gray-900 h-5/6 text-white flex flex-col items-center rounded-xl border-2 border-gray-600'>
          <div className='login-app-name mt-5 text-2xl font-semibold'>
            Blogo
          </div>
          <div className='mt-3 text-3xl font-bold'>
              Sign up
          </div>
          <div className='mt-2 text-lg'>
          Get access to members only content.
          </div>
          <div className='space-y-5 mt-5'>
            <div>
              <input type="email" 
                value={email}    
                onChange={(e)=>{
                setEmail(e.target.value)}} 
                placeholder='Enter your Email' 
                className='px-10 py-2 rounded-full text-black '/>
            </div>
            <div>
              <input type="password"
                value={password}    
                onChange={(e)=>{
                setPassword(e.target.value)}}  
                placeholder='Enter your Password' 
                className='px-10 py-2 rounded-full text-black'/>
            </div>
            <div>
              <input type="text" 
                value={firstname}    
                onChange={(e)=>{
                setFirstname(e.target.value)}} 
                placeholder='Enter your First Name' 
                className='px-10 py-2 rounded-full text-black '/>
            </div>
            <div>
              <input type="text" 
                value={lastname}    
                onChange={(e)=>{
                setLastname(e.target.value)}} 
                placeholder='Enter your Last Name' 
                className='px-10 py-2 rounded-full text-black '/>
            </div>
            <div>
              <input type="text" 
                value={username}    
                onChange={(e)=>{
                setUsername(e.target.value)}} 
              placeholder='Enter your Username' 
              className='px-10 py-2 rounded-full text-black '/>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='px-5 w-1/2 py-2 rounded-full bg-gradient-to-tl from-purple-700 to-blue-600 flex items-center justify-center cursor-pointer'onClick={(e)=>{e.preventDefault();register()}}>
                Signup
              </div>
              <div className='mt-4'>
              Don't have an account yet? <span className='underline cursor-pointer' onClick={()=>{navigate("/login")}}>Sign in</span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
