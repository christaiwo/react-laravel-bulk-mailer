import React, { useRef } from 'react'
import { SuccessButton } from '../components/Button'
import {toast } from 'react-toastify';
import axiosClient from '../axios-client';
import {useNavigate} from 'react-router-dom';

const SendMail = () => {
  const subjectRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if(!subjectRef.current.value || !emailRef.current.value || !subjectRef.current.value){
      // alert('he')
      return toast.error("All field is required");
    }
    const payload = {
      subject: subjectRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    }

    axiosClient.post('/mail', payload).then(({data}) => {
      return navigate("/mails");
    }).catch((err) => {
      toast.error(err.message)
    });
  } 
  return (
    <div className='mt-10'>
      <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold'>SEND MAIL</h1>
        <form onSubmit={handleSubmit} className='bg-white w-full rounded-md flex flex-col shadow-sm py-2 px-4'>
          <div className='flex flex-col gap-2 py-5 px-5'>
              <label htmlFor="" className='font-semibold'>Subject</label>
              <input ref={subjectRef} type="text" className='h-[48px] w-[100%] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='test@gmail.com' />
          </div>
          <div className='flex flex-col gap-2 py-5 px-5'>
              <label htmlFor="" className='font-semibold'>Mails</label>
              <textarea ref={emailRef} className='h-[100px] w-[100%] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg '  name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className='flex flex-col gap-2 py-5 px-5'>
              <label htmlFor="" className='font-semibold'>Message</label>
              <textarea ref={messageRef} className='h-[300px] w-[100%] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg '  name="" id="" cols="30" rows="10"></textarea>
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