import { products } from "../assets/frontend_assets/assets"
import Heading from "./Heading"

const NewCollection = () => {
    // console.log(products);
    // {
    //         _id: "aaaaa",
    //         name: "Women Round Neck Cotton Top",
    //         description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    //         price: 100,
    //         image: [p_img1],
    //         category: "Women",
    //         subCategory: "Topwear",
    //         sizes: ["S", "M", "L"],
    //         date: 1716634345448,
    //         bestseller: true
    //     },
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Heading text1={"NEW"} text2={"ARRIVALS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                Discover our collection of new arrivals featuring the hottest styles, top trends, and exclusive pieces.
                </p>
            </div>
            <div className="flex">
                {
                    products.map((product,index)=>(
                        <div key={index} className="w-96 h-96 bg-red-500">
                            <img src={product.image[0]} className="w-full"/>
                            <div className="flex flex-col items-center">
                                <h1>{product.name}</h1>
                                <h1>{product.price}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewCollection