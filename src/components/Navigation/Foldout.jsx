import React from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { MouseContext } from '../../helpers/context/mouseContext'
import "./Foldout.scss"

const Foldout = ({
  navOpen,
  setNavOpen
}) => {
  return (
    <MouseContext.Consumer>
      {({ cursorChangeHandler }) => (
        <div
          onMouseEnter={() => cursorChangeHandler("white")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <AnimatePresence>
            {navOpen && (
              <motion.div
                className="navigationFoldout"
                initial={{ opacity: 0, y: "-100%", height: "0" }}
                animate={{ opacity: 1, y: "0%", height: "100%", transition: { duration: .4, delay: 0 } }}
                exit={{ y: "-100%", height: "0", transition: { duration: .4, delay: .4 } }}
              >
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {navOpen && (
              <motion.div
                className="navigationFoldoutInner"
                initial={{ opacity: 0, transition: { duration: .4, delay: 0 } }}
                animate={{ opacity: 1, transition: { duration: .4, delay: .5 } }}
                exit={{ opacity: 0, transition: { duration: .3 } }}
              >
                <ul>
                  <li 
                    onClick={() => { setNavOpen(false) }}
                    onMouseEnter={() => cursorChangeHandler("hovered white")}
                    onMouseLeave={() => cursorChangeHandler("white")}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li 
                    onClick={() => { setNavOpen(false) }}
                    onMouseEnter={() => cursorChangeHandler("hovered white")}
                    onMouseLeave={() => cursorChangeHandler("white")}
                  >
                    <Link to="/#about">About</Link>
                  </li>
                  <li 
                    onClick={() => { setNavOpen(false) }}
                    onMouseEnter={() => cursorChangeHandler("hovered white")}
                    onMouseLeave={() => cursorChangeHandler("white")}
                  >
                    <Link to="/#projects">Projects</Link>
                  </li>
                  {/* <li 
                    onClick={() => { setNavOpen(false) }}
                    onMouseEnter={() => cursorChangeHandler("hovered white")}
                    onMouseLeave={() => cursorChangeHandler("white")}
                  >
                    <Link to="/#contact">Contact</Link>
                  </li> */}
                </ul>
                <div 
                  className="foldoutFooter container"
                  onClick={() => { setNavOpen(false) }}
                  onMouseEnter={() => cursorChangeHandler("hovered white")}
                  onMouseLeave={() => cursorChangeHandler("white")}
                >
                  <a href="https://www.linkedin.com/in/jefferson-van-der-heijden-648a0560/" target="_blank">
                    <svg viewBox="0 0 30 30" width="30px" height="30px">
                      <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </MouseContext.Consumer>
  )
}

export default Foldout