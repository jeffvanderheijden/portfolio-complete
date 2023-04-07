import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { MouseContext } from '../helpers/context/mouseContext'

const ProjectsPage = () => {
  return (
    <main>
      <h1>Projects</h1>
      <motion.div
        key={'projectsCustomTransitions'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        I turn data into experiences people care about.
        I turn data & information into emotions & experiences.
         <MouseContext.Consumer>
          {({ cursorChangeHandler }) => (
            <Link 
              to="/"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")} 
            >
              Home
            </Link>
          )}
        </MouseContext.Consumer>
      </motion.div>
    </main>
  )
}

export default ProjectsPage

export const Head = () => <title>Projects</title>
