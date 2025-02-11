import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SliderTemplate = ({ children, responsive }) => {
    const CustomLeftArrow = ({ onClick }) => {
        return (
        <button
            onClick={onClick}
            className="absolute left-0 z-10 flex justify-center items-center h-fit w-fit"
            style={{ top: "50%", transform: "translateY(-50%)" }}
        >
            <ChevronLeft className="w-10 h-10" />
        </button>
        )
    }

    const CustomRightArrow = ({ onClick }) => {
        return (
        <button
            onClick={onClick}
            className="absolute right-0 z-10 flex justify-center items-center h-fit w-fit"
            style={{ top: "50%", transform: "translateY(-50%)" }}
        >
            <ChevronRight className="w-10 h-10" />
        </button>
        )
    }

    return (
        <div className="carousel-container mx-auto">
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            pauseOnHover={false}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            arrows
            itemClass="carousel-item-padding-40-px"
        >
            {children}
        </Carousel>
        </div>
    )
    }

export default SliderTemplate

// const responsive = {
//     superLargeDesktop1: {
//         breakpoint: { max: 4000, min: 3000 },
//         items: 8,
//         slidesToSlide: 1,
//     },
//     superLargeDesktop2: {
//         breakpoint: { max: 3000, min: 2000 },
//         items: 6,
//         slidesToSlide: 1,
//     },
//     superLargeDesktop3: {
//         breakpoint: { max: 2000, min: 1700 },
//         items: 5,
//         slidesToSlide: 1,
//     },
//     largeDesktop: {
//         breakpoint: { max: 1700, min: 1350 },
//         items: 4,
//         slidesToSlide: 1,
//     },
//     desktop: {
//         breakpoint: { max: 1350, min: 900 },
//         items: 3,
//         slidesToSlide: 1,
//     },
//     tablet: {
//         breakpoint: { max: 900, min: 600 },
//         items: 3,
//         slidesToSlide: 1,
//     },
//     mobile: {
//         breakpoint: { max: 600, min: 0 },
//         items: 2,
//         slidesToSlide: 1,
//     },
// };