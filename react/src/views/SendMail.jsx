import React from 'react'
import { SuccessButton } from '../components/Button'

const SendMail = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold'>SEND MAIL</h1>
        <form action="" className='bg-white w-full rounded-md flex flex-col shadow-sm py-2 px-4'>
          <div className='flex flex-col gap-2 py-5 px-5'>
              <label htmlFor="" className='font-semibold'>Subject</label>
              <input type="text" className='h-[48px] w-[100%] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='test@gmail.com' />
          </div>
          <div className='flex flex-col gap-2 py-5 px-5'>
              <label htmlFor="" className='font-semibold'>Mails</label>
              <textarea className='h-[100px] w-[100%] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg '  name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className='flex flex-col gap-2 py-5 px-5'>
              <label htmlFor="" className='font-semibold'>Message</label>
              <textarea className='h-[300px] w-[100%] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg '  name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className='flex flex-col gap-2 my-4'>
            <SuccessButton text="SEND MAIL" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SendMail