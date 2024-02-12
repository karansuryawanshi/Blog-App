import React from 'react'
import "../routes/style/Signup.css"

const NewsLetter = () => {
  return (
    <div>
      <div className='feature-post w-screen w-screen'>
        <div className='w-full h-full'>
            <div className='flex items-center justify-center pb-14'>
                <div className='p-5 flex w-11/12 bg-gradient-to-r from-blue-600 via-purple-700 to-purple-700 rounded-2xl'>
                    <div className='w-1/2 text-white flex flex-col items-center justify-center p-4'>
                        <div className='font-bold text-3xl'>
                            Subscribe to Porto newsletter and stay updated.
                        </div>
                        <div className='text-lg'>
                            Don't miss anything. Get all the latest posts delivered straight to your inbox. It's free!
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex items-center justify-center p-5'>
                            <div className='bg-white bg-opacity-20 rounded-2xl backdrop-filter backdrop-blur-lg border-b border-l border-r border-t w-4/5 h-4/5 space-y-6 p-5'>
                                <div className='flex items-center justify-center'>
                                    <input type="text" placeholder='Your Name' className='py-3 px-4 w-4/5 rounded-full' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <input type="email" placeholder='Your Email Address' className='py-3 px-4 w-4/5 rounded-full' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='flex items-center justify-center font-bold text-base text-white py-3 px-4 w-4/5 rounded-full bg-black'>
                                        Subscribe
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
