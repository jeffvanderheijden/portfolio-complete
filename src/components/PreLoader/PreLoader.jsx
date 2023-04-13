import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import LogoOuter from "./LogoOuter"
import LogoInner from "./LogoInner"

import "./PreLoader.scss"

const PreLoader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [loaderHidden, setLoaderHidden] = useState(false)

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setIsLoading(false)
        }, 3600)

        const loadingHideTimer = setTimeout(() => {
            setLoaderHidden(true)
        }, 4200);

        return () => {
            clearTimeout(loadingTimer)
            clearTimeout(loadingHideTimer)
        }
    }, [])

    return (
        <>
            {children}
            {isLoading ? (
                <div className="loadingScreen">
                    <motion.div
                        key="logoAnimation"
                        className="logoLoader"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.7 }}
                        transition={{
                            delay: 3, ease: "easeInOut" 
                        }}
                    >
                        <div className="inner">
                            <motion.div
                                key="outerLogo"
                                initial={{ scale: .7, opacity: 0 }}
                                animate={{ rotate: 180, scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    delay: 1,
                                    stiffness: 160,
                                    damping: 30
                                }}
                            >
                                <LogoOuter />
                            </motion.div>
                            <div className="brand">
                                <motion.div
                                    key="brand"
                                    initial={{ y: 50 }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 30,
                                        delay: .4
                                    }}
                                >
                                    <LogoInner />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ) : (
                <div className={`content ${loaderHidden ? 'hidden' : ''}`}>
                    <motion.div
                        className="top-section"
                        initial={{ y: 0 }}
                        animate={{ y: "-100%" }}
                        transition={{ duration: .6, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="bottom-section"
                        initial={{ y: 0 }}
                        animate={{ y: "100%" }}
                        transition={{ duration: .6, ease: "easeInOut" }}
                    />
                </div>
            )}
        </>
    )
}

PreLoader.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PreLoader