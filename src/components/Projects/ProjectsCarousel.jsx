import React, { useRef } from "react"
import Slider from "react-slick"
import { Link } from "gatsby"
import { MouseContext } from '../../helpers/context/mouseContext'
import "./ProjectsCarousel.scss"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import wthShirt from './wth-shirt.png'
import safsecMockup from './safsec-mockup.png'
import maskMockup from './mask-mockup.png'
import addonMockup from './addon-mockup.png'

const ProjectsCarousel = () => {
    const projectsSlider = useRef();

    const next = () => {
        projectsSlider.current.slickNext();
    }
    const previous = () => {
        projectsSlider.current.slickPrev();
    }

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
        ],
        appendDots: dots => (
            <div>
                <ul> {dots} </ul>
            </div>
        )
    }

    return (
        <MouseContext.Consumer>
            {({ cursorChangeHandler }) => (
                <div id="projects" className="sliderWrapper">
                    <div className="sliderInner">
                        <div 
                            className="previousHover" 
                            onClick={() => { previous() }}
                            onMouseEnter={() => cursorChangeHandler("left")}
                            onMouseLeave={() => cursorChangeHandler("")}
                        />
                        <div 
                            className="nextHover"
                            onClick={next}
                            onMouseEnter={() => cursorChangeHandler("right")}
                            onMouseLeave={() => cursorChangeHandler("")} 
                        />
                        <Slider ref={projectsSlider} {...settings}>
                            <Link 
                                to="/safsec"
                                onMouseEnter={() => cursorChangeHandler("view")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            >
                                <img 
                                    src={safsecMockup} 
                                    alt={"SafSec - identity redesign"}
                                />
                            </Link>
                            <Link 
                                to="/wth"
                                onMouseEnter={() => cursorChangeHandler("view")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            >
                                <img 
                                    src={wthShirt} 
                                    alt={"WTH - identity redesign & merch"}
                                />
                            </Link>
                            <Link 
                                to="/mask"
                                onMouseEnter={() => cursorChangeHandler("view")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            >
                                <img 
                                    src={maskMockup} 
                                    alt={"Mask - WDKA Assignment"}
                                />
                            </Link>
                            <Link 
                                to="/add-on"
                                onMouseEnter={() => cursorChangeHandler("view")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            >
                                <img 
                                    src={addonMockup} 
                                    alt={"Add on"}
                                />
                            </Link>
                        </Slider>
                    </div>
                </div>
            )}
        </MouseContext.Consumer>
    )
}

export default ProjectsCarousel