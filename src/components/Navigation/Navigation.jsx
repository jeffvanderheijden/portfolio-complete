import React, { useState } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { MouseContext } from "../../helpers/context/mouseContext"
import "./Navigation.scss"
import "./Hamburger.scss"
import LogoInner from "../PreLoader/LogoInner"
import Foldout from "./Foldout"

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <motion.div
        className="navigation"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          delay: 6,
          stiffness: 160,
          damping: 30
        }}
      >
        <MouseContext.Consumer>
          {({ cursorChangeHandler }) => (
            <div 
              className="container mx-auto h-full"
              onMouseEnter={() => {
                navOpen ? cursorChangeHandler("white") : cursorChangeHandler("")
              }}
              onMouseLeave={() => {
                navOpen ? cursorChangeHandler("white") : cursorChangeHandler("")
              }}
            >
              <div className="navInner">
                <div className="logo">
                  <Link
                    to="/"
                    onMouseEnter={() => {
                      navOpen ? cursorChangeHandler("hovered white") : cursorChangeHandler("hovered")
                    }}
                    onMouseLeave={() => {
                      navOpen ? cursorChangeHandler("white") : cursorChangeHandler("")
                    }}
                  >
                    <LogoInner />
                  </Link>
                </div>
                <div
                  className="hamburger"
                  onClick={() => { 
                    setNavOpen(!navOpen); 
                    navOpen ? cursorChangeHandler("hovered") : cursorChangeHandler("hovered white")
                  }}
                  onMouseEnter={() => {
                    navOpen ? cursorChangeHandler("hovered white") : cursorChangeHandler("hovered")
                  }}
                  onMouseLeave={() => {
                    navOpen ? cursorChangeHandler("white") : cursorChangeHandler("")
                  }}
                >
                  <svg className={`ham hamRotate ham8 ${navOpen ? "active" : ""}`} viewBox="0 0 100 100" width="40">
                    <path
                      className="line top"
                      d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                    <path
                      className="line middle"
                      d="m 30,50 h 40" />
                    <path
                      className="line bottom"
                      d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </MouseContext.Consumer>
      </motion.div>
      <Foldout 
        navOpen={navOpen} 
        setNavOpen={setNavOpen}
      />
    </>
  )
}

export default Navigation