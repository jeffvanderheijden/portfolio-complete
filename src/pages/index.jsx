import React from "react"

import Header from "../components/Headers/Homepage/Header"
import ProjectsCarousel from "../components/Projects/ProjectsCarousel"

const IndexPage = () => {
  return (
    <>
      <Header />
      <ProjectsCarousel />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
