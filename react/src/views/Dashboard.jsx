import {AiOutlineMail} from 'react-icons/ai';
import {TbMailForward} from 'react-icons/tb';
import {RiMailForbidLine} from 'react-icons/ri';

const Dashboard = () => {
  return (
    <div className='mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='bg-white w-full h-40 rounded-lg shadow-lg flex flex-row py-4 px-4  items-center justify-center gap-6 text-gray-600'>
              <AiOutlineMail className='w-24 h-24' />
              <div className='flex flex-col items-center'>
                <h1 className='text-6xl'>8</h1>
                <p className='text-2xl uppercase'>Total Mails</p>
              </div>
            </div>
            <div className='bg-white w-full h-40 rounded-lg shadow-lg flex flex-row py-4 px-4  items-center justify-center gap-6 text-gray-600'>
              <TbMailForward className='w-24 h-24' />
              <div className='flex flex-col items-center'>
                <h1 className='text-6xl'>8</h1>
                <p className='text-2xl uppercase'>Sent Mails</p>
              </div>
            </div>
            <div className='bg-white w-full h-40 rounded-lg shadow-lg flex flex-row py-4 px-4  items-center justify-center gap-6 text-gray-600'>
              <RiMailForbidLine className='w-24 h-24' />
              <div className='flex flex-col items-center'>
                <h1 className='text-6xl'>8</h1>
                <p className='text-2xl uppercase'>Pending Mails</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard