import { useRef } from 'react'
import { SuccessButton } from '../components/Button';
import {toast } from 'react-toastify';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios-client';

const Profile = () => {
    const {user, setUser} = useStateContext();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const handleSubmit = (ev) => {
        ev.preventDefault()

        if(!nameRef.current.value || !emailRef.current.value){
            return toast.error("All field is required");
        }

        let payload ;
        if(passwordRef.current.value && passwordConfirmationRef.current.value){
          payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value ?? '',
            password_confirmation: passwordConfirmationRef.current.value ?? ''
          }
        }else{
          payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
          }
        }
        
        axiosClient.put(`/user/${user.id}`, payload).then(({data}) => {
          setUser(data.user);
          return toast.success("Profile updated successfully");
        }).catch((err) => {
            toast.error(err.message)
        });
    } 

      
  return (
    <div className='mt-10'>
      <div className='flex flex-col'>
          <h1 className='text-4xl font-bold text-center mb-3'>UPDATE YOUR PROFILE</h1>
          <form onSubmit={handleSubmit} className='bg-white w-full rounded-md flex flex-col shadow-sm py-2 px-4'>
            <div className='flex flex-col gap-2 py-5 px-5'>
                <label htmlFor="" className='font-semibold'>Name</label>
                <input defaultValue={user.name} ref={nameRef} type="text"  className='h-[48px] w-[100%] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='test@gmail.com' />
            </div>
            <div className='flex flex-col gap-2 py-5 px-5'>
                <label htmlFor="" className='font-semibold'>Email</label>
                <input defaultValue={user.email} ref={emailRef} type="email"  className='h-[48px] w-[100%] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='test@gmail.com' />
            </div>
            <div className='flex flex-col gap-2 py-5 px-5'>
                <label htmlFor="" className='font-semibold'>Password</label>
                <input  ref={passwordRef} type="password"  className='h-[48px] w-[100%] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='*********' />
            </div>
            <div className='flex flex-col gap-2 py-5 px-5'>
                <label htmlFor="" className='font-semibold'>Password Confirmation</label>
                <input  ref={passwordConfirmationRef} type="password"  className='h-[48px] w-[100%] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='*********' />
            </div>
            <div className='flex flex-col gap-2 my-4'>
              <SuccessButton text="UPDATE" />
            </div>
          </form>
      </div>
    </div>
  )
}

export default Profile