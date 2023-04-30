import React from "react"
import { MouseContext } from './../helpers/context/mouseContext'

import wth1 from "./../images/wth1.png"
import wth2 from "./../images/wth2.png"
import wth4 from "./../images/wth4.png"
import wth5 from "./../images/wth5.png"

const Wth = () => {
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
                  <img className="m-auto" src={wth1} alt="WTH" />
                  <h1 className="mb-[20px] pt-[20px]">
                    Merchandise & Identity
                  </h1>
                  <p>
                    WTH, a large online community primarily based in Europe but with members from all over the world and spanning across all sorts of games, approached me to create an updated visual for their identity and create fitting merchandise for their members. 
                  </p>
                </div>
              </div>
              {/* Second screen */}
              <div className="h-screen w-full flex items-center justify-center">
                <div className="w-1/3 pr-[20px]">
                  <p>
                    The goal for this redesign is to update the existing identity
                    in a way that it's recognizability remains but create a more
                    modern brand. The main focus is to create something visually 
                    appealing to it's target audience and subsequently translate
                    this to merchandising.
                    <br /><br />
                    Due to the nature of this organization, a feeling of aggression
                    but also a "pack" or comradery must be conveyed.
                  </p>
                </div>
                <div className="w-2/3">
                  <img className="m-auto" src={wth2} alt="WTH" />
                </div>
              </div>
              {/* Third screen */}
              <div className="h-screen w-full flex items-center justify-center">
                <div className="w-1/2">
                  <img className="mb-[40px] m-auto" src={wth4} alt="WTH" />
                  <p>
                  WTH originally started to grow with a small group of friends who found and played the WW2 shooter Hell Let Loose in the beginning stages of its release into beta. It has since attracted new members and grown from the original handful of people to thousands of discord members and hundreds of WTH clan members from all over the world.
                  </p>
                </div>
              </div>

              {/* Fifth screen */}
              <div className="h-screen w-full flex items-center justify-center">
                <div className="w-1/3 pr-[20px]">
                  <p>
                    Merchandise, or "merch" for short, refers to any items that a group or organization creates to represent themselves and offer to their supporters. As you have redesigned the clan named WTH, it would be a great idea to create merch that reflects the new design and identity of the clan. This can include clothing such as t-shirts, hoodies, and hats, as well as accessories like keychains or phone cases. By creating merch, the clan can offer a tangible way for their supporters to show their loyalty and support, while also generating revenue for the group.
                  </p>
                </div>
                <div className="w-2/3">
                  <img className="mt-[40px] m-auto" src={wth5} alt="WTH" />
                </div>
              </div>
            </div>
          </div>
        )}
      </MouseContext.Consumer>
    </main>
  )
}

export default Wth

export const Head = () => <title>WTH - Merchandise & Identity</title>
