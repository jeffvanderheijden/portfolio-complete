import React, { useContext } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { MouseContext } from '../helpers/context/mouseContext'

const IndexPage = () => {
  const { cursorChangeHandler } = useContext(MouseContext)

  return (
    <>
      <h1>Home</h1>
      <motion.div
        key={'indexCustomTransitions'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <>
          <Link 
            to="/projects"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")} 
          >
            Projects
          </Link>
        </>
      </motion.div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
