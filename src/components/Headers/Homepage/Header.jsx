import React from "react"
import { MouseContext } from '../../../helpers/context/mouseContext'
import "./Header.scss"

const Header = () => {
    return (
        <div className="homeHeader">
            <MouseContext.Consumer>
                {({ cursorChangeHandler }) => (
                    <iframe 
                        src="/static/threejs.html" 
                        title="Homepage header" 
                        onMouseEnter={() => cursorChangeHandler("hidden")}
                        onMouseLeave={() => cursorChangeHandler("")} 
                    />
                )}
            </MouseContext.Consumer>
            <div className="container mx-auto relative pointer-events-none">
                <h1>I turn data into experiences</h1>
                <h1>that people care about</h1>
            </div>
        </div>
    )
}

export default Header