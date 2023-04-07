import React, { useRef } from "react"
import Slider from "react-slick"
import { Link } from "gatsby"
import { MouseContext } from '../../helpers/context/mouseContext'
import "./ProjectsCarousel.scss"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        appendDots: dots => (
            <div>
                <ul> {dots} </ul>
            </div>
        )
    }

    return (
        <MouseContext.Consumer>
            {({ cursorChangeHandler }) => (
                <div className="sliderWrapper">
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
                                to="/projects"
                                onMouseEnter={() => cursorChangeHandler("view")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            >
                                <img 
                                    src="https://assets.awwwards.com/awards/submissions/2023/03/6424d61b62382875943865.jpg" 
                                    alt={"Project 1"}
                                />
                            </Link>
                            <Link 
                                to="/projects"
                                onMouseEnter={() => cursorChangeHandler("view")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            >
                                <img 
                                    src="https://assets.awwwards.com/awards/submissions/2023/03/641ca0fc766f0350528916.jpg" 
                                    alt={"Project 2"}
                                />
                            </Link>
                            <Link 
                                to="/projects"
                                onMouseEnter={() => cursorChangeHandler("view")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            >
                                <img 
                                    src="https://assets.awwwards.com/awards/submissions/2023/03/6424d61b62382875943865.jpg" 
                                    alt={"Project 3"}
                                />
                            </Link>
                            <Link 
                                to="/projects"
                                onMouseEnter={() => cursorChangeHandler("view")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            >
                                <img 
                                    src="https://assets.awwwards.com/awards/submissions/2023/03/641ca0fc766f0350528916.jpg" 
                                    alt={"Project 4"}
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