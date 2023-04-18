import { Link, Outlet } from 'react-router-dom'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {RiMailSendLine} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'
import avatar from '../assets/img/avatar.png';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';

const DefaultLayout = () => {
    const today = new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className='w-screen h-screen bg-zinc-100' >
        <div className="flex flex-row relative">

            {/* Sidebar */}
            <div className='hidden lg:flex flex-col bg-black h-[100vh] w-[25vh] lg:w-[25vh] px-4 py-2 absolute lg:static'>
                <div className='mb-10'>
                    <p className='text-2xl' >
                        <strong className='text-white font-bold mr-1'>BULK</strong> 
                        <span className='text-white font-light'>mailer</span>
                    </p>
                </div>
                <Link to="/dashboard" className='flex flex-row gap-2 bg-green-500 rounded-md text-white my-4 p-2'>
                    <MdOutlineSpaceDashboard className='w-6 h-6' />
                    <h1>Dashboard</h1>
                </Link>
                <Link to="/send-mail" className='flex flex-row gap-2 hover:bg-neutral-200 hover:text-black rounded-md text-white my-4 p-2'>
                    <RiMailSendLine className='w-6 h-6' />
                    <h1>Send mail</h1>
                </Link>
            </div>

            {/* mainPage */}
            <div className='flex-1 lg:mt-5 mt-3 px-2'>
                <div className='flex flex-row items-center justify-between border-b-2 pb-4'>
                    <div className='flex items-center gap-3'>
                        <p className='text-2xl font-bold '>Hello Chris </p>
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
                                                <div className={classNames(active && 'bg-gray-100', 'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')} onClick={() => navigate('/profile') }>
                                                    Your Profile 
                                                </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <div className={classNames(active && 'bg-gray-100', 'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')} onClick={() => navigate('/setting') }>
                                                    Settings 
                                                </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <div className={classNames(active && 'bg-gray-100', 'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')} onClick={() => navigate('/logout') }>
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


                <Outlet/>
            </div>

            
        </div>
    </div>
  )
}

export default DefaultLayout