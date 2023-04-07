import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from '@reach/router'
import "./AllPageTransitions.scss"
import "./../../helpers/styles/global.css"

const AllPageTransitions = ({ children }) => {
    const location = useLocation()
    
    return (
        <>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <main className="pageWrapper">
                        {children}
                    </main>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default AllPageTransitions