import { useState } from 'react';
import {BsEye, BsEyeSlash} from 'react-icons/bs';
import {SuccessButton } from '../components/Button';
import { Link } from 'react-router-dom';

const Register = () => {
    const onsubmit = (ev) => {
        ev.preventDefault();
        alert('he')
    } 

    // manage password visibility
    const [showPass, setShowPass] = useState(false);
    const passwordShow = () => {
        setShowPass(!showPass)
    }
  return (
    <div>
        <form action='' onsubmit={onsubmit}>
            <div className='flex flex-col gap-2 my-4'>
                <label htmlFor="" className='font-semibold'>Full Name</label>
                <input type="text" className='h-[48px] w-[400px] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='john doe' />
            </div>
            <div className='flex flex-col gap-2 my-4'>
                <label htmlFor="" className='font-semibold'>Email Address</label>
                <input type="text" className='h-[48px] w-[400px] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='test@gmail.com' />
            </div>
            <div className='flex flex-col gap-2 my-4'>
                <label htmlFor="" className='font-semibold'>Password</label>
                <div className='flex relative items-center '>
                    <input type={showPass ? 'text' : 'password'} className='h-[48px] w-[400px] py-2 pl-2 pr-12 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='************' />
                    {showPass ? <BsEyeSlash onClick={passwordShow} className='w-10 h-10 absolute text-gray-500 -right-0 pr-1'/> : <BsEye onClick={passwordShow} className='w-10 h-10 absolute text-gray-500 -right-0 pr-1'/> }
                </div>
            </div>
            <div className='flex flex-col gap-2 my-4'>
                <label htmlFor="" className='font-semibold'>Password</label>
                <div className='flex relative items-center '>
                    <input type={showPass ? 'text' : 'password'} className='h-[48px] w-[400px] py-2 pl-2 pr-12 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='************' />
                    {showPass ? <BsEyeSlash onClick={passwordShow} className='w-10 h-10 absolute text-gray-500 -right-0 pr-1'/> : <BsEye onClick={passwordShow} className='w-10 h-10 absolute text-gray-500 -right-0 pr-1'/> }
                </div>
            </div>
            <div className='flex flex-col gap-2 my-4'>
                <SuccessButton text="Register" />
            </div>
            <div className='text-center'>
                <p className='text-gray-500'>Don't have an account ? <Link to='/login' className='text-green-600'>login</Link> </p>
            </div>
        </form>
    </div>
  )
}

export default Register