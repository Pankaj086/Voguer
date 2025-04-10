import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const loginHandler = (e) => {
        e.preventDefault()
        // Handle login logic here
        console.log("Login clicked")
        navigate('/')
    }
    
    return (
        <div className="flex flex-col gap-2 mt-12 w-full md:w-3/7 mx-auto sm:border border-gray-400 p-4 rounded-md sm:shadow-md bg-white">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl text-gray-800">Welcome to <span className="text-4xl text-amber-700">𝒗</span>oguer.com</h1>
                <p className="italic text-gray-600">Welcome to our e-commerce webapp! We are happy to invite you to explore the amazing world of online shopping.</p>
            </div>
            <form onSubmit={loginHandler} className="flex flex-col gap-2 mt-4">
                <label className="source-sans-3 text-gray-800" htmlFor="email">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="Enter your email" required className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 source-sans-3"/>
                <label className="source-sans-3 text-gray-800" htmlFor="password">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder="Enter your password" required className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 source-sans-3"/>
                <button type="submit" className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4 cursor-pointer hover:bg-gray-600 text-xl source-sans-3">Sign In</button>
                <div className="flex items-center gap-2">
                    <hr className='h-1 w-full text-gray-400'></hr>
                    <p className="text-gray-600 source-sans-3">or</p>
                    <hr className='h-1 w-full text-gray-400'></hr>
                </div>
                <div className='relative flex justify-center items-center gap-2 bg-white border border-gray-400 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-100 text-xl source-sans-3 mx-auto w-full text-center'>
                    <FcGoogle className="w-6 h-6 cursor-pointer" onClick={()=>navigate('/signup')}/>
                    <p className="text-gray-600 text-lg source-sans-3">Sign in with Google</p>
                </div>
                <p className="text-gray-600 text-lg source-sans-3">Don't have an account? <span onClick={()=>navigate('/signup')} className="text-blue-800 cursor-pointer hover:text-blue-600 underline source-sans-3">Sign Up</span></p>
                <p className="text-gray-600 text-lg source-sans-3">Forgot your password? <span onClick={()=>navigate('/forgot-password')} className="text-blue-800 cursor-pointer hover:text-blue-600 underline source-sans-3">Reset Password</span></p>
            </form>
        </div>
    )
}

export default Login