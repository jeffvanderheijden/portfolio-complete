import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { MouseContext } from '../helpers/context/mouseContext'

import ProjectsCarousel from "../components/Projects/ProjectsCarousel"

const IndexPage = () => {
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
        <MouseContext.Consumer>
          {({ cursorChangeHandler }) => (
            <Link 
              to="/projects"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")} 
            >
              Projects
            </Link>
          )}
        </MouseContext.Consumer>
      </motion.div>

      <ProjectsCarousel />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
