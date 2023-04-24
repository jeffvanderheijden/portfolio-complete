import React, { useContext, useRef, useEffect } from "react"
import "./About.scss"
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import { LoadingContext } from "../../../helpers/context/loadingContext"
import parallaxImage from "./about.png"

const About = () => {
  const { initialLoad } = useContext(LoadingContext)
  const aboutRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["100vh 100vh", "0vh 100vh"]
  })

  const textOpacity = useTransform(scrollYProgress, [0.5, 0], [0, 1])

  const scrollY = useMotionValue(0);
  const offsetY = useTransform(scrollY, [0, window.innerHeight * 2], [0, -window.innerHeight * 2])

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollY])

  return (
    <div id="about" className="aboutHome" ref={aboutRef}>
      <div className="container mx-auto max-w-4xl">
        {!initialLoad && (
          <motion.div
            className="w-full"
            style={{ opacity: textOpacity }}
          >
            <>
              <motion.img
                className="parallaxImage"
                src={parallaxImage}
                style={{ y: offsetY }}
              />
              <div className="titleWrapper">
                <h2>Hey, my name is</h2>
                <h1>Jeff van der Heijden</h1>
              </div>
              <p>
                Graduated as an interactive multi-media designer from
                the Grafisch Lyceum Rotterdam and working for a short
                while as a webdesigner, I was soon captivated by
                programming.
                <br />
                <br />
                Not long after I would start my adventure as
                a front-end developer. In the 10 years since I've
                held many titles, including: designer, front-end developer,
                front-end engineer, creative developer. After those 10 years
                I felt like a change was needed and applied for a job
                as instructor at the same college I graduated from.
                That is where I happily work today as a teacher of
                software development.
              </p>
            </>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default About