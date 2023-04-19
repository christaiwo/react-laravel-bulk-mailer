import { Link, Navigate, Outlet } from 'react-router-dom'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {RiMailSendLine} from 'react-icons/ri'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useStateContext } from '../contexts/ContextProvider';




const DefaultLayout = () => {
  const {user, token, setUser, } = useStateContext();
  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <div className='w-screen h-screen bg-zinc-100' >
        <div className="flex flex-row relative">

            {/* Sidebar */}
            <Sidebar />

            {/* mainPage */}
            <div className='flex-1 lg:mt-5 mt-3 px-2'>
                <Header/>
                <Outlet/>
            </div>

            
        </div>
    </div>
  )
}

export default DefaultLayout