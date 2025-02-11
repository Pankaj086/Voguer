import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SliderTemplate.css";

const defaultResponsive = {
    superLargeDesktop1: {
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
        slidesToSlide: 1,
    },
    superLargeDesktop2: {
        breakpoint: { max: 3000, min: 2000 },
        items: 6,
        slidesToSlide: 1,
    },
    superLargeDesktop3: {
        breakpoint: { max: 2000, min: 1700 },
        items: 5,
        slidesToSlide: 1,
    },
    largeDesktop: {
        breakpoint: { max: 1700, min: 1350 },
        items: 4,
        slidesToSlide: 1,
    },
    desktop: {
        breakpoint: { max: 1350, min: 900 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 900, min: 600 },
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2,
        slidesToSlide: 1,
    },
    }

    const CarouselSlider = ({
    children,
    responsive = defaultResponsive,
    autoPlaySpeed = 3000,
    customTransition = "transform 1000ms ease-in-out",
    containerClass = "carousel-container",
    itemClass = "carousel-item-padding-40-px",
    }) => {
    return (
        <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={autoPlaySpeed}
        keyBoardControl={true}
        customTransition={customTransition}
        transitionDuration={1000}
        containerClass={containerClass}
        itemClass={itemClass}
        removeArrowOnDeviceType={["", "mobile"]}
        >
        {children}
        </Carousel>
    )
}

export default CarouselSlider
