import {AiOutlineMail} from 'react-icons/ai';
import {TbMailForward} from 'react-icons/tb';
import {RiMailForbidLine} from 'react-icons/ri';
import axiosClient from '../axios-client';
import { useEffect, useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { ThreeDots } from 'react-loader-spinner'

const Dashboard = () => {

    const [totalMail, setTotalMail] = useState(0);
    const [sentMails, setSentMails] = useState(0);
    const [pendingMails, setPendingMails] = useState(0);
    const [loading, setLoading] = useState(true);
    
    const getUser = () => {
      axiosClient.get('/user').then(({data}) => {
        setTotalMail(data.mails);
        setSentMails(data.sent_mails);
        setPendingMails(data.pending_mails);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
    }

    useEffect(() => {
      getUser();
    }, [])

  return (
    <div className='mt-10'>
      {loading 
      ? <div className='flex items-center justify-center my-auto h-full'>
        <ThreeDots
          height="100" 
          width="100" 
          radius="9"
          color="#696261" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
      :<div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='bg-white w-full h-40 rounded-lg shadow-lg flex flex-row py-4 px-4  items-center justify-center gap-6 text-gray-600'>
              <AiOutlineMail className='w-24 h-24' />
              <div className='flex flex-col items-center'>
                <h1 className='text-6xl'>{totalMail}</h1>
                <p className='text-2xl uppercase'>Total Mails</p>
              </div>
            </div>
            <div className='bg-white w-full h-40 rounded-lg shadow-lg flex flex-row py-4 px-4  items-center justify-center gap-6 text-gray-600'>
              <TbMailForward className='w-24 h-24' />
              <div className='flex flex-col items-center'>
                <h1 className='text-6xl'>{sentMails}</h1>
                <p className='text-2xl uppercase'>Sent Mails</p>
              </div>
            </div>
            <div className='bg-white w-full h-40 rounded-lg shadow-lg flex flex-row py-4 px-4  items-center justify-center gap-6 text-gray-600'>
              <RiMailForbidLine className='w-24 h-24' />
              <div className='flex flex-col items-center'>
                <h1 className='text-6xl'>{pendingMails}</h1>
                <p className='text-2xl uppercase'>Pending Mails</p>
              </div>
            </div>
        </div>
      }
    </div>
  )
}

export default Dashboard