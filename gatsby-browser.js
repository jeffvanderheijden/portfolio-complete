import React from "react"
import PreLoader from "./src/components/PreLoader/PreLoader"
import AllPageTransitions from "./src/components/PageTransitions/AllPageTransitions"
import CustomCursor from "./src/components/Cursor/CustomCursor"
import MouseContextProvider from "./src/helpers/context/mouseContext"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <MouseContextProvider>
        {element}
      </MouseContextProvider>
    </>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <>      
      <PreLoader {...props}>
        <AllPageTransitions>
          {element}
        </AllPageTransitions>
      </PreLoader>
      <CustomCursor />
    </>
  )
}