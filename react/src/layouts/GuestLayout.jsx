import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const GuestLayout = () => {
    const { pathname } = useLocation();
  return (
    <div className='bg-zinc-100 h-screen w-screen flex items-center justify-center'>
        <div className='w-92'>
            <div className='flex  flex-col items-center gap-5 mb-10'>
                <p className='text-green-500 text-lg'>
                    {pathname == '/login' ? 'Login to your account' : 'Create an account'}
                </p>
                <p className='text-4xl' >
                    <strong className='text-green-700 font-bold mr-1'>BULK</strong> 
                    <span className='text-green-500 font-semibold'>mailer</span>
                </p>
            </div>
            <Outlet />
        </div>
    </div>
  )
}

export default GuestLayout
