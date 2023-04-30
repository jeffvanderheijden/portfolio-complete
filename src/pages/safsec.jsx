import React from "react"
import { MouseContext } from './../helpers/context/mouseContext'

import safsec1 from "./../images/safsec-1.png"
import safsec2 from "./../images/safsec-2.png"
import safsec3 from "./../images/safsec-3.png"
import safsec6 from "./../images/safsec-6.png"
import safsec8 from "./../images/safsec-8.png"
import safsec9 from "./../images/safsec-9.png"
import safsec10 from "./../images/safsec-10.png"
import safsecani from "./../images/safsec-ani.gif"

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
                  <img className="m-auto" src={safsec1} alt="SafSec" />
                  <h1 className="mb-[20px] pt-[20px]">
                    Identity redesign
                  </h1>
                  <p>
                    SafSec - a company specialized in performing risk inventory & evaluation, security risk assessment and guaranteeing safety with attention to continuity asked me for an update and redesign to take care of their corporate identity and provided appropriate material.
                  </p>
                </div>
              </div>
              {/* Second screen */}
              <div className="h-screen w-full flex items-center justify-center">
                <div className="w-1/3 pr-[20px]">
                  <p>
                    The goal for this redesign is to visualize the duality that already exists 
                    within the company name: Safety and Security, without losing the 
                    link to the old identity. Recognizable as being an upgraded and more 
                    modern version, showing existing clients as well as potential ones 
                    that SafSec is a firm that evolves and grows with the changing times.
                    To depict this duality and still retain the visual recognizability, the 
                    Corinthian helmet and hoplon shield where chosen as symbols to 
                    communicate Safety and Security. 
                    The helmet, and the hoplites that wore it translate to proactivity, 
                    vigilance and security. The shield, Safety and resilience.
                  </p>
                </div>
                <div className="w-2/3">
                  <img className="m-auto" src={safsec2} alt="SafSec" />
                </div>
              </div>
              {/* Third screen */}
              <div className="h-screen w-full flex items-center justify-center">
                <div className="w-1/2">
                  <img className="mb-[40px] m-auto" src={safsec3} alt="SafSec" />
                  <p>
                    Many fonts were tested to try and match the company's values. I found in the end the Pirulen font 
                    to be an exceptional match. A small adjustment to the letter A allowed me to 
                    incorporate the Phalanx symbol from the hoplon shield into the visual design.
                  </p>
                  <img className="mt-[20px] m-auto" src={safsecani} alt="SafSec" />
                </div>
              </div>
              {/* Fourts screen */}
              <div className="h-screen w-full flex items-center justify-center">
                <div className="w-1/2">
                  <img className="mb-[10px] m-auto" src={safsec6} alt="SafSec" />
                  <p>
                    The brand icon went through multiple iterations as well. Starting with the concept and ending 
                    with a highly detailed, strong and recognizable image.
                  </p>
                  <img className="mt-[20px] m-auto" src={safsec9} alt="SafSec" />
                </div>
              </div>


              {/* Fifth screen */}
              <div className="h-screen w-full flex items-center justify-center">
                <div className="w-1/3 pr-[20px]">
                  <img src={safsec10} alt="SafSec" />
                  <p>
                    After the final color changes, to fit the clients preferences, we're left with a 
                    very sharp, modern and storytelling corporate identity.
                  </p>
                </div>
                <div className="w-2/3">
                  <img className="mt-[40px] m-auto" src={safsec8} alt="SafSec" />
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

export const Head = () => <title>SafSec - Identity redesign</title>
