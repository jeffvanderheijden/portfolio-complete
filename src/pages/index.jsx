import React, { useRef, useEffect } from "react"

import Header from "../components/Headers/Homepage/Header"
import About from "../components/About/Homepage/About"
import ProjectsCarousel from "../components/Projects/ProjectsCarousel"

const IndexPage = () => {

  const scrollInto = useRef(null)
  useEffect(() => {
    scrollInto.current.scrollIntoView()
  })


  
  return (
    <div ref={scrollInto}>
      <Header />
      <About />
      <ProjectsCarousel />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>JvdH — Creative developer</title>
