import { Link, Navigate, Outlet } from 'react-router-dom'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {RiMailSendLine} from 'react-icons/ri'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios-client';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const DefaultLayout = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const {user, token, setUser, setToken } = useStateContext();
  if (!token) {
    return <Navigate to="/login" />
  }

  useEffect(() => {
    axiosClient.get('/user').then(({data}) => {
      setUser(data.user);
    }).catch((err) => {
      const response = err.response;
      if(response.status === 401){
        setUser('');
        setToken('');
      }
    })
  }, [])

  return (
    <div className='w-screen h-screen bg-zinc-100' >
        <div className="flex flex-row relative">

            {/* Sidebar */}
            <Sidebar nav={nav} handleClick={handleClick}   />
            
            {/* mainPage */}
            <div className='flex-1 lg:mt-5 mt-3 px-2'>
                <Header nav={nav} handleClick={handleClick}/>
                <Outlet/>
            </div>

            
        </div>
        <ToastContainer />
    </div>
  )
}

export default DefaultLayout