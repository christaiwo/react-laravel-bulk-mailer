import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GuestLayout = () => {
    const {user, token, setUser, } = useStateContext();
    if (token) {
        return <Navigate to="/dashboard" />
    }
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
        <ToastContainer />
    </div>
  )
}

export default GuestLayout
