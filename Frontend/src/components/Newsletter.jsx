import { useState } from "react"
import { Mail } from 'lucide-react';

const Newsletter = () => {
    const [email,setEmail] = useState("");

    return (
        <div className="my-20 bg-[#3B2C35] py-10 space-y-6 flex justify-center flex-col px-4">
            <h1 className="text-white source-sans-3 text-3xl text-center">
                Do you want a 10% discount on your next purschase?
            </h1>
            <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 bg-white">
                <Mail className="w-10 h-10 sm:w-6 sm:h-6 text-[#3B2C35]"/>
                <input
                    className="w-full sm:flex-1 outline-none focus:border-blue-300 p-2 text-lg text-[#3B2C35] source-sans-3"
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <button className="bg-black text-white px-2 sm:px-4 py-3 sm:py-2 text-sm sm:text-lg source-sans-3 cursor-pointer">SUBSCRIBE</button>
            </form>
            <p className="text-white source-sans-3 text-center opacity-50">Recieve news and promotions by email from VOGUER. You can unsubscribe whenever you want it&apos;s totally free.</p>
        </div>
    )
}

export default Newsletter;