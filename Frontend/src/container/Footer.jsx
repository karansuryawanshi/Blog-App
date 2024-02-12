import React from 'react'
import { Icon } from '@iconify-icon/react'
import "../routes/style/Signup.css"

const Footer = () => {
  return (
    <div className='feature-post'>
        <div className='flex items-center justify-center border-t border-gray-600 '>
            <div className='flex mt-10 w-11/12'>
                <div className='w-1/2 text-white'>
                    <div className='Logo text-white font-semibold text-3xl mb-3'>
                        Blogo
                    </div>
                    <div className='flex w-96 mb-8 text-gray-300 '>
                    Blogo is a premium multipurpose Ghost theme suitable for personal, professional, magazine, brand blog and newsletter.
                    </div>
                    <div className='space-x-5'>
                        <Icon icon="pajamas:twitter" width="1.2rem" height="1.2rem" className='bg-gray-800 p-2 rounded-full cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:via-purple-700 hover:to-purple-700">' />
                        <Icon icon="mdi:facebook" width="1.2rem" height="1.2rem" className='bg-gray-800 p-2 rounded-full cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:via-purple-700 hover:to-purple-700'/>
                        <Icon icon="uil:linkedin" width="1.2rem" height="1.2rem" className='bg-gray-800 p-2 rounded-full cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:via-purple-700 hover:to-purple-700'/>
                        <Icon icon="lucide:instagram" width="1.2rem" height="1.2rem" className='bg-gray-800 p-2 rounded-full cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:via-purple-700 hover:to-purple-700'/>
                        <Icon icon="bi:github" width="1.2rem" height="1.2rem" className='bg-gray-800 p-2 rounded-full cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:via-purple-700 hover:to-purple-700'/>
                    </div>
                    <div className='text-sm mt-8 mb-5 text-gray-300 '>© Porto 2024. Published with Ghost and Porto</div>
                </div>
                <div className='text-gray-300 flex space-x-28 mt-2'>
                    <div className='space-y-3'>
                        <div className='text-sm font-semibold text-white'>Features</div>
                        <div>Style Guide</div>
                        <div>Tags</div>
                        <div>Authors</div>
                        <div>Features</div>
                        <div>Contact</div>
                    </div>
                    <div className='space-y-3'>
                        <div className='text-sm font-semibold text-white'>Pages</div>
                        <div>Membership</div>
                        <div>Sign In</div>
                        <div>Sign Up</div>
                        <div>Account Free</div>
                        <div>Account Paid</div>
                    </div>
                    <div className='space-y-3'>
                        <div className='text-sm font-semibold text-white'>About</div>
                        <div>Privacy policy</div>
                        <div>Terms</div>
                        <div>Contact</div>
                        <div>404 Error</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
