import { useRef, useState } from 'react';
import {BsEye, BsEyeSlash} from 'react-icons/bs';
import {SuccessButton } from '../components/Button';
import { Link } from 'react-router-dom';
import  axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';
import {toast } from 'react-toastify';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {setUser, setToken} = useStateContext()
    // get the form input and put them
    const onSubmit = (ev) => {
        ev.preventDefault(); 

        if(!emailRef.current.value || !passwordRef.current.value){
            return toast.error("All field is required");
        }
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post('/login', payload).then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        }).catch(err => {
            const response = err.response;
            if(response && response.status === 401){
                return toast.error(response.data.message);
            }
        });
    } 

    // manage password visibility
    const [showPass, setShowPass] = useState(false);
    const passwordShow = () => {
        setShowPass(!showPass)
    }
  return (
    <div>
        <form action='' onSubmit={onSubmit}>
            <div className='flex flex-col gap-2 my-4'>
                <label htmlFor="" className='font-semibold'>Email Address</label>
                <input type="email" ref={emailRef} className='h-[48px] w-[400px] py-2 px-2 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='test@gmail.com' />
            </div>
            <div className='flex flex-col gap-2 my-4'>
                <label htmlFor="" className='font-semibold'>Password</label>
                <div className='flex relative items-center '>
                    <input type={showPass ? 'text' : 'password'} ref={passwordRef} className='h-[48px] w-[400px] py-2 pl-2 pr-12 rounded-lg bg-transparent focus:outline-none border border-gray-400 text-2xl placeholder:text-lg ' placeholder='************' />
                    {showPass ? <BsEyeSlash onClick={passwordShow} className='w-10 h-10 cursor-pointer absolute text-gray-500 -right-0 pr-1'/> : <BsEye onClick={passwordShow} className='w-10 h-10 cursor-pointer absolute text-gray-500 -right-0 pr-1'/> }
                </div>
            </div>
            <div className='flex flex-col gap-2 my-4'>
                <SuccessButton text="Login" />
            </div>
            <div className='text-center'>
                <p className='text-gray-500'>Don't have an account ? <Link to='/register' className='text-green-600'>register</Link> </p>
            </div>
        </form>
    </div>
  )
}

export default Login