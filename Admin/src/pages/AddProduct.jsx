import React, { useState } from 'react'
import { assets } from '../assets/admin_assets/assets'
import axios from 'axios';
import { BACKEND_URL } from '../App';
import { toast } from 'react-toastify';

const AddProduct = ({token}) => {
    const [name, setName] = useState("");
    const [description, setDiscription] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [ratings, setRatings] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("Men");
    const [subCategory, setSubCategory] = useState("Topwear");
    const [bestSeller, setBestSeller] = useState(false);
    const [size, setSize] = useState([]);

    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();

            formData.append("name",name);
            formData.append("description",description);
            formData.append("price",price);
            formData.append("discount",discount);
            formData.append("category",category);
            formData.append("subCategory",subCategory);
            formData.append("ratings",ratings);
            formData.append("bestSeller",bestSeller);
            formData.append("stock",stock);
            formData.append("size",JSON.stringify(size))
            image1 && formData.append("image1",image1)
            image2 && formData.append("image2",image2)
            image3 && formData.append("image3",image3)
            image4 && formData.append("image4",image4)

            const response = await axios.post(BACKEND_URL+ "/api/v1/products/add", formData, {headers:{token}})
            // console.log(response.data);

            if(response.data.success){
                toast.success("Product added successfully");
                setName("");
                setDiscription("");
                setSubCategory("Topwear");
                setCategory("Men");
                setStock("");
                setRatings("");
                setPrice("");
                setDiscount("");
                setImage1(false);
                setImage2(false);
                setImage3(false);
                setImage4(false);
                setBestSeller(false);
            }
            else{
                console.log(error);
                toast.error("Try Again")
            }
            

        } catch (error) {
            
        }
    }
    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full items-start gap-4">

            <div className='flex flex-col gap-2 w-full sm:w-1/2'>
                <label htmlFor='prod_name'>Product Name</label>
                <input
                    type="text"
                    name='prod_name'
                    placeholder="Type here..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700"
                    required
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                />
            </div>

            <div className='flex flex-col gap-2 w-full sm:w-1/2'>
                <label htmlFor='prod_des'>Product Description</label>
                <textarea
                    placeholder="Type here..."
                    rows="2"
                    name='prod_des'
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700"
                    required
                    onChange={(e)=>setDiscription(e.target.value)}
                    value={description}
                ></textarea>
            </div>

            <div className='flex justify-between items-center w-full sm:w-1/2 gap-2 sm:gap-4 flex-col sm:flex-row'>

                <div className='flex flex-col gap-2 w-full sm:w-1/2'>
                    <label htmlFor='prod_stock'>Stock</label>
                    <input
                        type="text"
                        name='prod_stock'
                        placeholder="Type here..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700"
                        required
                        onChange={(e)=>setStock(e.target.value)}
                        value={stock}
                    />
                </div>

                <div className='flex flex-col gap-2 w-full sm:w-1/2'>
                    <label htmlFor='prod_rate'>ratings</label>
                    <input
                        type="text"
                        name='prod_rate'
                        placeholder="Type here..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700"
                        required
                        onChange={(e)=>setRatings(e.target.value)}
                        value={ratings}
                    />
                </div>

            </div>

            <div className='flex justify-between items-center w-full sm:w-1/2 gap-2 sm:gap-4 flex-col sm:flex-row'>

                <div className='flex flex-col gap-2 w-full sm:w-1/2'>
                    <label htmlFor='prod_price'>Price</label>
                    <input
                        type="Number"
                        name='prod_price'
                        placeholder="Type here..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700"
                        required
                        onChange={(e)=>setPrice(e.target.value)}
                        value={price}
                    />
                </div>

                <div className='flex flex-col gap-2 w-full sm:w-1/2'>
                    <label htmlFor='dis_price'>Discounted Price</label>
                    <input
                        type="number"
                        name='dis_price'
                        placeholder="Type here..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700"
                        required
                        onChange={(e)=>setDiscount(e.target.value)}
                        value={discount}
                    />
                </div>

            </div>

            <div className='flex justify-between w-full sm:w-1/2 items-center flex-col sm:flex-row gap-2 sm:gap-4'>

                <div className='flex flex-col gap-2 w-1/2'>
                    <label htmlFor='category'>Category</label>
                    <select onChange={(e)=>setCategory(e.target.value)} className='border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700 py-1' name='category'>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>

                <div className='flex flex-col gap-2 w-1/2'>
                    <label htmlFor='subCategory'>Category</label>
                    <select onChange={(e)=>setSubCategory(e.target.value)} className='border border-gray-300 rounded-sm focus:outline-none focus:border-amber-700 py-1' name='subCategory'>
                        <option value="Topwear">Top Wear</option>
                        <option value="Bottomwear">Bottom Wear</option>
                        <option value="Winterwear">Winter Wear</option>
                    </select>
                </div>

            </div>

            <div className='flex gap-2 mt-2'>
                <label className='cursor-pointer' htmlFor='bestseller'>Add To Bestseller</label>
                <input onChange={(e)=>setBestSeller(prev => !prev)} checked={bestSeller} type='checkbox' id='bestseller' />
            </div>

            <div className='flex flex-col gap-2'>
                <p>Sizes</p>
                <div className='flex gap-3'>
                    <div onClick={()=>setSize(prev => prev.includes("S") ? prev.filter((item)=> item !== "S") : [...prev,"S"])}>
                        <p className={`${size.includes("S") ? "bg-pink-200" : "bg-gray-200" } px-3 py-1 cursor-pointer`}>S</p>
                    </div>
                    <div onClick={()=>setSize(prev => prev.includes("M") ? prev.filter((item)=> item !== "M") : [...prev,"M"])}>
                        <p className={`${size.includes("M") ? "bg-pink-200" : "bg-gray-200" } px-3 py-1 cursor-pointer`}>M</p>
                    </div>
                    <div onClick={()=>setSize(prev => prev.includes("L") ? prev.filter((item)=> item !== "L") : [...prev,"L"])}>
                        <p className={`${size.includes("L") ? "bg-pink-200" : "bg-gray-200" } px-3 py-1 cursor-pointer`}>L</p>
                    </div>
                    <div onClick={()=>setSize(prev => prev.includes("XL") ? prev.filter((item)=> item !== "XL") : [...prev,"XL"])}>
                        <p className={`${size.includes("XL") ? "bg-pink-200" : "bg-gray-200" } px-3 py-1 cursor-pointer`}>XL</p>
                    </div>
                    <div onClick={()=>setSize(prev => prev.includes("XXL") ? prev.filter((item)=> item !== "XXL") : [...prev,"XXL"])}>
                        <p className={`${size.includes("XXL") ? "bg-pink-200" : "bg-gray-200" } px-3 py-1 cursor-pointer`}>XXL</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p>Upload Images</p>
                <div className='flex gap-2'>
                    <label className='hover:cursor-pointer' htmlFor='image1'>
                        <img className='w-24' src={image1 ? URL.createObjectURL(image1) : assets.upload_area} />
                        <input onChange={(e)=>setImage1(e.target.files[0])} type='file' id='image1' hidden />
                    </label>
                    <label className='hover:cursor-pointer' htmlFor='image2'>
                        <img className='w-24' src={image2 ? URL.createObjectURL(image2) : assets.upload_area} />
                        <input onChange={(e)=>setImage2(e.target.files[0])} type='file' id='image2' hidden />
                    </label>
                    <label className='hover:cursor-pointer' htmlFor='image3'>
                        <img className='w-24' src={image3 ? URL.createObjectURL(image3) : assets.upload_area} />
                        <input onChange={(e)=>setImage3(e.target.files[0])} type='file' id='image3' hidden />
                    </label>
                    <label className='hover:cursor-pointer' htmlFor='image4'>
                        <img className='w-24' src={image4 ? URL.createObjectURL(image4) : assets.upload_area} />
                        <input onChange={(e)=>setImage4(e.target.files[0])} type='file' id='image4' hidden />
                    </label>
                </div>
            </div>

            <button
                type="submit"
                className="bg-amber-700 text-white px-6 py-3 rounded-sm hover:bg-amber-800 transition-colors cursor-pointer"
            >
                Add Product
            </button>

        </form>
    )
}

export default AddProduct
