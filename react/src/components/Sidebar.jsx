import { Link } from 'react-router-dom'
import {MdOutlineCancel, MdOutlineSpaceDashboard} from 'react-icons/md'
import {RiMailSendLine} from 'react-icons/ri'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import classNames from 'classnames'

const Sidebar = ({ nav, handleClick, handleClose }) => {


  return (
    <div className={classNames(!nav ? 'hidden' :'absolute md:sticky lg:flex', 'lg:flex flex-col bg-black h-[100vh] w-[25vh] lg:w-[25vh] px-4 py-2 absolute lg:static')}>
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
        <Link to="/mails" className='flex flex-row gap-2 hover:bg-neutral-200 hover:text-black rounded-md text-white my-4 p-2'>
            <AiOutlineMail className='w-6 h-6' />
            <h1>Mails</h1>
        </Link>
        <Link to="/profile" className='flex flex-row gap-2 hover:bg-neutral-200 hover:text-black rounded-md text-white my-4 p-2'>
            <AiOutlineUser className='w-6 h-6' />
            <h1>Profile</h1>
        </Link>

        <MdOutlineCancel onClick={handleClick} className='absolute md:hidden md:left-24 left-48 top-1 w-8 h-8 hover:bg-gray-200 rounded-full text-emerald-500'/>
    </div>
  )
}

export default Sidebar