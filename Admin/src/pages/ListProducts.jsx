import React, { useEffect, useState } from 'react'
import axios from "axios";
import { BACKEND_URL } from '../App';
import { toast } from 'react-toastify';
import { Shirt, Trash2 } from 'lucide-react';

const ListProducts = ({token}) => {

    const [productsList, setProductsList] = useState([]);

    const fecthProducts = async () => {
        try {

            const response = await axios.get(BACKEND_URL+"/api/v1/products/list");

            if(response.data.success === true){
                setProductsList(response.data.products);
                console.log(response.data.products);
                
            }
            else{
                toast.error(response.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    useEffect(()=>{
        fecthProducts();
    },[])

    // logic to remove products
    const productRemoveHandler = async (id) => {

        try {
            const response = await axios.post(BACKEND_URL + "/api/v1/products/remove", {id}, {headers:{token}});
    
            console.log(response);
            
            if(response.data.success){
                toast.success(response.data.message)
                await fecthProducts();
            }
            else{
                console.log(response.data.message);
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
        
    }   

    return (
        <div>
            <div className='flex justify-center items-center gap-2 mb-6'>
                <p className="text-gray-700 text-lg sm:text-2xl text-center">All Products</p>
                <Shirt className='w-7 h-7 text-gray-700'/>
            </div>

            <div className='flex flex-col gap-2'>

                {/* list table title */}

                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border border-[#C586A5] bg-[#ffebf5] text-sm mb-4'>

                    <b>Image</b>
                    <b className='pl-4'>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Stock</b>
                    <b className='text-center'>Action</b>

                </div>


                {/* products list */}
                {
                    productsList.map((product,index)=>{
                        return(
                            <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center mb-2 gap-2 py-1 px-2 border border-gray-200 text-sm'>
                                <img src={product.images[0]} alt='' className='w-12 min-h-14'/>
                                <p className='pl-4'>{product.name}</p>
                                <p>{product.category}</p>
                                <p>${product.price}</p>
                                <p>{product.stock}</p>
                                <p className='mx-auto'><Trash2 onClick={()=>productRemoveHandler(product._id)} className='w-5 h-5 text-red-600 text-center cursor-pointer hover:scale-110 transition-all duration-200'/></p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListProducts
