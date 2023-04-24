import React, { useState, useContext, useRef, useEffect } from "react"
import { MouseContext } from '../../../helpers/context/mouseContext'
import AnimatedText from "./AnimatedText"
import { motion, useScroll, useTransform } from "framer-motion"
import { LoadingContext } from "../../../helpers/context/loadingContext"
import "./Header.scss"

const Header = () => {
    const [replay] = useState(true)
    const { initialLoad } = useContext(LoadingContext)

    const iFrame = useRef(null)
    const headerRef = useRef(null)

    const { scrollYProgress } = useScroll({ 
        target: headerRef.current,
        offset: ["100vh 100vh", "100vh 0vh"]
    })
 
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const placeholderText = [
        { type: "heading2", text: "Design driven" },
        { type: "heading1", text: "experiences", color: "#eba10e" },
        { type: "heading2", text: "in an ocean of data" }
    ]

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const droplets = () => {
                let event = new Event('pointermove');
                event = JSON.parse(JSON.stringify(event));
                const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
                event.clientX = random(500, 1000);
                event.clientY = random(350, 600);
                iFrame.current && iFrame.current.contentWindow.postMessage(event);
            }
            droplets();
        }, Math.floor(Math.random() * (5000 - 2000)) + 2000);
        return () => clearInterval(interval);
    }, [])

    return (
        <>
        <div className="homeHeaderSpacer" />
        <div className="homeHeader" ref={{ headerRef }}>
            <MouseContext.Consumer>
                {({ cursorChangeHandler }) => (
                    <iframe
                        src="/static/threejs.html"
                        ref={iFrame}
                        title="Homepage header"
                        onMouseEnter={() => cursorChangeHandler("hidden")}
                        onMouseLeave={() => cursorChangeHandler("")}
                    />
                )}
            </MouseContext.Consumer>
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
                </motion.div>
            )}
        </div> 
        </>
    )
}

export default Header