import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";


const Signup = () => {

    const { BACKEND_URL, token, setToken } = useContext(AppContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')

    const navigate = useNavigate();

    const signUpHandler = async (e) => {

        e.preventDefault();

        try {
            if(confirmPassword !== password){
                toast.error("Password and Confirm Password should be same");
                return;
            }
            const response = await axios.post(BACKEND_URL + "/api/v1/users/register" ,{name, email, password}, { withCredentials: true })
            console.log(response);

            if(response.data.success){
                setToken(response.data.accessToken)
                toast.success(response.data.message);
                localStorage.setItem("token",response.data.accessToken)
            }
            else{
                toast.error(response.data.message);
            }

        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
        }
    }

    useEffect(()=>{
        if(token){
            navigate("/")
        }
    },[token])
    
    return (
        <div>
            <div className="flex flex-col gap-2 mt-4 w-full md:w-3/7 mx-auto sm:border border-gray-400 p-4 rounded-md sm:shadow-md bg-white">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl text-gray-800">Welcome to <span className="text-4xl text-amber-700">𝒗</span>oguer.com</h1>
                    <p className="italic text-gray-600">Welcome to our e-commerce webapp! We are happy to invite you to explore the amazing world of online shopping.</p>
                </div>
                <form onSubmit={signUpHandler} className="flex flex-col gap-2 mt-4">

                    <label className="source-sans-3 text-gray-800" htmlFor="username">Name</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" id="username" placeholder="Enter your Name" required className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 source-sans-3"/>

                    <label className="source-sans-3 text-gray-800" htmlFor="email">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="Enter your email" required className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 source-sans-3"/>

                    <label className="source-sans-3 text-gray-800" htmlFor="password">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder="Enter your password" required className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 source-sans-3"/>

                    <label className="source-sans-3 text-gray-800" htmlFor="confirm-password">Confirm Password</label>
                    <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" id="confirm-password" placeholder="Confirm your password" required className="border border-gray-400 w-full h-10 px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 source-sans-3"/>

                    {/* remember me */}
                    <div className="flex items-center gap-2 mt-2">
                        <input type="checkbox" id="remember-me" required className="w-4 h-4 cursor-pointer"/>
                        <label htmlFor="remember-me" className="text-gray-600 text-sm source-sans-3">I agree to the <span className="text-blue-800 cursor-pointer hover:text-blue-600 underline source-sans-3">Terms of Service</span> and <span className="text-blue-800 cursor-pointer hover:text-blue-600 underline source-sans-3">Privacy Policy</span></label>
                    </div>

                    <button type="submit" className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4 cursor-pointer hover:bg-gray-600 text-xl source-sans-3">Sign Up</button>
                    <p className="text-gray-600 text-lg source-sans-3">Already have an account? <span onClick={() => navigate('/login')} className="text-blue-800 cursor-pointer hover:text-blue-600 underline source-sans-3">Sign In</span></p>
                </form>

            </div>
        </div>
    )
}

export default Signup