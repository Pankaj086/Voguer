"use client"

import { useState, useEffect } from "react"
import { assets } from "../assets/frontend_assets/assets"

const Hero = () => {
    const images = [assets.child, assets.man, assets.women1]
    const pic = assets.homemodel1;
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [images.length])

    return (
        <div className="flex flex-col justify-between lg:flex-row border border-gray-400 bg-gradient-to-r from-[#F1C6D8] via-[#F4D1E1] to-[#F8E3E7] overflow-x-hidden">
        <div className="flex flex-col gap-6 md:gap-10 px-8 py-16 lg:w-[40rem]">
            <h1 className="text-4xl leading-10 text-center md:text-start md:text-5xl md:leading-16 prata-regular">
            Discover the Essence of Timeless Elegance
            </h1>
            <p className="hidden md:block text-sm leading-6 text-gray-700 prata-regular">
            Step into the world where fashion meets art. Experience unparalleled luxury and sophisticated style with our
            exclusive collections. Discover the perfect blend of timeless elegance and contemporary flair.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start sm:flex-row gap-4">
            <button className="bg-black text-white font-light rounded-sm px-3 py-2 cursor-pointer hover:bg-gray-950 font-notoSerif">
                Shop the Collection
            </button>
            <button className="bg-white text-black border border-black font-medium rounded-sm px-3 py-2 cursor-pointer font-notoSerif">
                Discover More
            </button>
            </div>
        </div>

        <div className="hidden xl:block relative w-full lg:w-[30rem] h-[30rem] overflow-hidden">
            {images.map((image, index) => (
            <img
                key={index}
                src={image || "/placeholder.svg"}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                alt={`Fashion image ${index + 1}`}
            />
            ))}
            
        </div>
        <img src={pic} className="mx-auto w-full sm:w-2/3 block lg:hidden"/>
        </div>
    )
}

export default Hero;

