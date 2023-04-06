import React, { useRef } from "react"
import Slider from "react-slick"
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
                <button onClick={previous}>Prev</button>
                <ul> {dots} </ul>
                <button onClick={next}>next</button>
            </div>
        ),
        customPaging: i => (
            <div>
                {i + 1}
            </div>
        )
    }

    return (
        <MouseContext.Consumer>
            {({ cursorChangeHandler }) => (
                <Slider ref={projectsSlider} {...settings}>
                    <img 
                        src="https://assets.awwwards.com/awards/submissions/2023/03/6424d61b62382875943865.jpg" 
                        onMouseEnter={() => cursorChangeHandler("view")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        alt={"Project 1"}
                    />
                    <img 
                        src="https://assets.awwwards.com/awards/submissions/2023/03/641ca0fc766f0350528916.jpg" 
                        onMouseEnter={() => cursorChangeHandler("view")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        alt={"Project 2"}
                    />
                    <img 
                        src="https://assets.awwwards.com/awards/submissions/2023/03/6424d61b62382875943865.jpg" 
                        onMouseEnter={() => cursorChangeHandler("view")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        alt={"Project 3"}
                    />
                    <img 
                        src="https://assets.awwwards.com/awards/submissions/2023/03/641ca0fc766f0350528916.jpg" 
                        onMouseEnter={() => cursorChangeHandler("view")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        alt={"Project 4"}
                    />
                </Slider>
            )}
        </MouseContext.Consumer>
    )
}

export default ProjectsCarousel