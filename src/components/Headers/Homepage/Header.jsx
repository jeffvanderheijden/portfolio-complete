import React, { useState, useContext } from "react"
import { MouseContext } from '../../../helpers/context/mouseContext'
import AnimatedText from "./AnimatedText"
import { motion } from "framer-motion"
import "./Header.scss"
import { LoadingContext } from "../../../helpers/context/loadingContext"

const Header = () => {
    const [replay] = useState(true)
    const { initialLoad } = useContext(LoadingContext)

    const placeholderText = [
        { type: "heading2", text: "I turn data into" },
        { type: "heading1", text: "experiences", color: "#eba10e" },
        { type: "heading2", text: "people care about" }
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
            {!initialLoad && (
                <>
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
                    <div className="scrollDown">
                        <div className="line" />
                        <motion.div
                            className="ball"
                            animate={{ opacity: [0, 1, 0], y: [0, 50, 100], scale: [0.7, 1, 0.7] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                delay: 2.5
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default Header