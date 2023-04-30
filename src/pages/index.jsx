import React from "react"

import Header from "../components/Headers/Homepage/Header"
import About from "../components/About/Homepage/About"
import ProjectsCarousel from "../components/Projects/ProjectsCarousel"

const IndexPage = () => {
  return (
    <>
      <Header />
      <About />
      <ProjectsCarousel />
    </>
  )
}

export default IndexPage

export const Head = () => <title>JvdH — Creative developer</title>
