import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../App'
import { toast } from 'react-toastify'

const Login = (props) => {

    const setToken = props.setToken;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(BACKEND_URL+'/api/v1/users/admin', {email, password})
            // console.log(response);
            if(response.data.success){
                setToken(response.data.token)
            }
            else{
                toast.error(response.data.message)
            }  
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    
    
    return (
        <div className='min-h-screen flex justify-center items-center w-full'>

            <div className="flex flex-col gap-2 w-full md:w-2/7 mx-auto sm:border border-gray-400 p-4 rounded-md sm:shadow-md bg-white">
            <div className="flex flex-col gap-2">
                <h1 className='text-2xl text-gray-600 text-center'>Admin Panel</h1>
                <h1 className="text-2xl text-gray-800 text-center">Welcome to <span className="text-2xl text-amber-700">𝒗</span>oguer.com</h1>
            </div>

            <form onSubmit={onSubmitHandler} className="flex flex-col gap-2 mt-4">

                <label className="source-sans-3 text-gray-800" htmlFor="email">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="Enter your email" required className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 source-sans-3"/>

                <label className="source-sans-3 text-gray-800" htmlFor="password">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder="Enter your password" required className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 source-sans-3"/>

                <button type="submit" className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4 cursor-pointer hover:bg-gray-600 text-xl source-sans-3">Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login