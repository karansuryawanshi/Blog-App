import React from 'react'


const Login = () => {
  return (
    <div className='w-screen h-screen'>
      <div className=' w-full h-full flex items-center justify-center bg-gradient-to-tl from-purple-900 via-black to-blue-900'>
        <div className='w-1/3 bg-gray-900 h-2/3 text-white flex flex-col items-center rounded-xl border-2 border-gray-600'>
          <div className='login-app-name mt-12 text-2xl font-semibold'>
            Blogo
          </div>
          <div className='mt-5 text-3xl font-bold'>
              Sign in
          </div>
          <div className='mt-3 text-lg'>
            Sign into your account for full access
          </div>
          <div className='space-y-5 mt-5'>
            <div>
              <input type="email" placeholder='Enter your Email' className='px-10 py-2 rounded-full text-black '/>
            </div>
            <div>
              <input type="password" placeholder='Enter your Password' className='px-10 py-2 rounded-full text-black'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='px-5 w-1/2 py-2 rounded-full bg-gradient-to-tl from-purple-700 to-blue-600 flex items-center justify-center'>
                Login
              </div>
              <div className='mt-4'>
              Don't have an account yet? <span className='underline cursor-pointer'>Sign up</span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
