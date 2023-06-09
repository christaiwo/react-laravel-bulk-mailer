import {BsSearch} from 'react-icons/bs'
import avatar from '../assets/img/avatar.png';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios-client';
import { Link } from 'react-router-dom';
import {HiOutlineMenuAlt2} from 'react-icons/hi';
import { AiOutlineGift, AiOutlineMenu } from 'react-icons/ai';

const Header = ({ nav, handleClick }) => {
    const today = new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric' });
    const {user, token, setUser, setToken} = useStateContext();

    const handleLogout = () => { 
        axiosClient.post('/logout').then(() => {
            setUser(null);
            setToken(null);
        })
    }
  return (
    <div className='flex flex-row items-center justify-between border-b-4 pb-4'>    
        <div className='lg:hidden'>
            {!nav ? <HiOutlineMenuAlt2 className="w-8 h-6" onClick={handleClick}  /> : <AiOutlineMenu className="w-8 h-6" onClick={handleClick}  /> }
        </div>  
        <div className='flex items-center gap-3'>
            <p className='text-2xl font-bold '>Hello {user.name} </p>
            {`>>`} 
            <span className='font-light text-sm text-neutral-700'>{today}</span> 
        </div>

        <div className='flex flex-row items-center gap-5'>
            <div className='hidden lg:flex relative items-center '>
                <input type='text' className='h-[40px] w-[300px] py-2 pl-2 pr-12 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='************' />
                <BsSearch className='w-10 h-6 absolute text-gray-500 -right-0 pr-3' />
            </div>
            <div>
                <Menu as="div" className="relative">
                    <div className=''>
                        <Menu.Button className="ml-2 inline-flex rounded-3xl focus:outline-none focus:ring-2 focus:ring-neutral-400">
                        <img src={avatar} className=' w-10 h-10 rounded-full border-2 border-neutral-400' alt="" />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link to="/profile" className={classNames(active && 'bg-gray-100', 'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')} onClick={() => navigate('/profile') }>
                                        Your Profile 
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div onClick={handleLogout} className={classNames(active && 'bg-gray-100', 'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')}>
                                        Log out 
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    </div>
  )
}

export default Header