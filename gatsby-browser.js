import React from "react"
import PreLoader from "./src/components/PreLoader/PreLoader"
import AllPageTransitions from "./src/components/PageTransitions/AllPageTransitions"
import CustomCursor from "./src/components/Cursor/CustomCursor"
import MouseContextProvider from "./src/helpers/context/mouseContext"
import LoadingContextProvider from "./src/helpers/context/loadingContext"
import Navigation from "./src/components/Navigation/Navigation"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <LoadingContextProvider>
        <MouseContextProvider>
          {element}
        </MouseContextProvider>
      </LoadingContextProvider>
    </>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <>      
      <PreLoader {...props}>
        <Navigation />
        <AllPageTransitions>
          {element}
        </AllPageTransitions>
      </PreLoader>
      <CustomCursor />
    </>
  )
}