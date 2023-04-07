import React, { useState } from "react"
import { MouseContext } from '../../../helpers/context/mouseContext'
import AnimatedText from "./AnimatedText"
import { motion } from "framer-motion"
import "./Header.scss"

const Header = () => {
    const [replay] = useState(true)

    const placeholderText = [
        { type: "heading2", text: "I turn data into" },
        { type: "heading1", text: "experiences", color: "#eba10e" },
        { type: "heading2", text: "that people care about" }
    ]

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    }

    return (
        <div className="homeHeader">
            <MouseContext.Consumer>
                {({ cursorChangeHandler }) => (
                    <iframe
                        src="/static/threejs.html"
                        title="Homepage header"
                        onMouseEnter={() => cursorChangeHandler("hidden")}
                        onMouseLeave={() => cursorChangeHandler("")}
                    />
                )}
            </MouseContext.Consumer>
            <motion.div
                className="w-full"
                initial="hidden"
                animate={replay ? "visible" : "hidden"}
                variants={container}
            >
                <div className="container mx-auto relative pointer-events-none">
                    {placeholderText.map((item, index) => {
                        return <AnimatedText {...item} key={index} />
                    })}
                </div>
            </motion.div>
        </div>
    )
}

export default Header