import React from "react"
import "./Header.scss"

const Header = () => {
    return (
        <div className="homeHeader">
            <iframe src="/static/threejs.html" title="Homepage header" />
            <div className="headerOverlay" />
        </div>
    )
}

export default Header