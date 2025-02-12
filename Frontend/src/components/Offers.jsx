import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "../utility/SliderTemplate.css"
import { assets } from "../assets/frontend_assets/assets"
import Heading from "./Heading"

const Offers = () => {
    const responsive = {
        superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        },
    }

    const images = [
        { imageURL: assets.banner1 },
        { imageURL: assets.banner2 },
        { imageURL: assets.banner3 },
        { imageURL: assets.banner4 },
    ]

    return (
        <div className="my-10">
        <div className="text-center py-4 text-3xl">
            <Heading text1={"STEALS &"} text2={"DEALS"} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Shop the Best Deals of the Season – Don&apos;t Miss Out!
            </p>
        </div>
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
        >
            {images.map((image, index) => (
            <div key={index} className="border border-gray-300 mx-auto w-full h-full hover:cursor-pointer rounded-md">
                <img
                src={image.imageURL || "/placeholder.svg"}
                alt={`Offer ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
                />
            </div>
            ))}
        </Carousel>
        </div>
    )
}

export default Offers

