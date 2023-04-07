import { useEffect, useState } from "react"

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: -50, y: -50 })
    const [cursorVisible, setCursorVisible] = useState(true)

    useEffect(() => {
        const mouseMoveHandler = (event) => {
            const { clientX, clientY } = event
            setMousePosition({ x: clientX, y: clientY })
        }

        const mouseEnterHandler = () => {
            setCursorVisible(true)
        }

        const mouseLeaveHandler = () => {
            setCursorVisible(false)
        }

        document.addEventListener("mousemove", mouseMoveHandler)
        document.addEventListener("mouseenter", mouseEnterHandler)
        document.addEventListener("mouseleave", mouseLeaveHandler)

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler)
            document.removeEventListener("mouseenter", mouseEnterHandler)
            document.removeEventListener("mouseleave", mouseLeaveHandler)
        }
    }, [])

    return { position: mousePosition, visible: cursorVisible }
}

export default useMousePosition