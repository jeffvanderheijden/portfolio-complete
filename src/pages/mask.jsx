import React from "react"
import { MouseContext } from './../helpers/context/mouseContext'

import mask1 from "./../images/mask1.png"
import mask2 from "./../images/mask2.png"
import mask3 from "./../images/mask3.png"

const SafSec = () => {
  return (
    <main>
      <MouseContext.Consumer>
        {({ cursorChangeHandler }) => (
          <div
            onMouseEnter={() => cursorChangeHandler("")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <div className="fixed w-full bg-black h-[80px]" />
            <div className="container m-auto">
              {/* First screen */}
              <div className="h-screen w-full flex items-center justify-center">
                <div className="sm:w-full md:w-1/2 text-center">
                  {/* <img className="m-auto" src={safsec1} alt="SafSec" /> */}
                  <h1 className="mb-[20px] pt-[20px]">
                    MASK
                  </h1>
                  <p>
                    Masks have come in many different shapes, sizes and forms and 
                    have been used in many different ways, by 
                    many different people and for many different reasons.
                    <br /><br />
                    What do you think of when you hear the word MASK?
                  </p>
                </div>
              </div>
              {/* Second screen */}
              <div className="w-full flex items-center justify-center">
                <div className="text-center">
                  <img className="m-auto" src={mask1} alt="MASK" />
                  <img className="m-auto" src={mask2} alt="MASK" />
                  <img className="m-auto" src={mask3} alt="MASK" />
                </div>
              </div>
            </div>
          </div>
        )}
      </MouseContext.Consumer>
    </main>
  )
}

export default SafSec

export const Head = () => <title>MASK - WDKA Assignment</title>
