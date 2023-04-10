import React, { useState, useContext, useRef } from "react"
import "./About.scss"
import { motion, useScroll, useTransform } from "framer-motion"
import AnimatedText from "../../Headers/Homepage/AnimatedText"
import { LoadingContext } from "../../../helpers/context/loadingContext"
import { MouseContext } from '../../../helpers/context/mouseContext'

const About = () => {
    const [replay] = useState(true)
    const { initialLoad } = useContext(LoadingContext)
    const aboutRef = useRef(null);

    const placeholderText = [
        { type: "heading2", text: "Hey, my name is" },
        { type: "heading1", text: "Jeff van der Heijden", color: "#eba10e" },
    ]

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    }

    const { scrollYProgress } = useScroll({ 
        target: aboutRef,
        offset: ["100vh 100vh", "0vh 100vh"]
    })
 
    const textOpacity = useTransform(scrollYProgress, [0.5, 0], [0, 1])

    return (
        <div className="aboutHome" ref={aboutRef}>
            <div className="container mx-auto max-w-4xl">
                {!initialLoad && ( 
                <motion.div
                    className="w-full"
                    style={{ opacity: textOpacity }}
                >
                    <motion.div
                        className="w-full"
                        initial="hidden"
                        animate={replay ? "visible" : "hidden"}
                        variants={container}
                    >
                        <div>
                            <MouseContext.Consumer>
                                {({ cursorChangeHandler }) => (
                                    <div 
                                        className="titleWrapper"
                                        onMouseEnter={() => cursorChangeHandler("about")}
                                        onMouseLeave={() => cursorChangeHandler("")}
                                    >
                                        {placeholderText.map((item, index) => {
                                            return <AnimatedText {...item} key={index} />
                                        })}
                                    </div>
                                )}
                            </MouseContext.Consumer>
                            <p>
                                Graduated as an interactive multi-media designer from 
                                the Grafisch Lyceum Rotterdam, and working for a short 
                                while as a webdesigner, I was soon captivated by 
                                programming. 
                                <br />
                                <br />
                                Not long after I would start my adventure as 
                                a front-end developer. In the 10 years since then I've 
                                had many titles including: front-end developer, 
                                front-end engineer, creative developer. After those 10 years 
                                I felt like a change was needed and applied for a job 
                                as instructor at the same college I graduated from. 
                                That is where I happily work today as a teacher of
                                software development.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
                )}
            </div>
        </div>
    )
}

export default About