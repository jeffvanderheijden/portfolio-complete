import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import "./PreLoader.scss"

const PreLoader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [loaderHidden, setLoaderHidden] = useState(false)

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        const loadingHideTimer = setTimeout(() => {
            setLoaderHidden(true)
        }, 2600);

        return () => {
            clearTimeout(loadingTimer)
            clearTimeout(loadingHideTimer)
        }
    }, [])

    return (
        <>
            {isLoading ? (
                <div className="loading-screen">
                    <motion.div
                        className="loading-bar"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2 }}
                    />
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
            {children}
        </>
    )
}

PreLoader.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PreLoader