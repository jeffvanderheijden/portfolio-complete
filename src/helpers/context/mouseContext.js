import React, { createContext, useState, useEffect } from "react";
import { globalHistory } from '@reach/router'

export const MouseContext = createContext();

const MouseContextProvider = ({ children }) => {
    const [cursorType, setCursorType] = useState("");

    const cursorChangeHandler = (cursorType) => {
        setCursorType(cursorType);
    }

    useEffect(() => {
        return globalHistory.listen(({ action }) => {
            if (action === 'PUSH') setCursorType("")
        })
    }, [setCursorType])

    return (
        <MouseContext.Provider
            value={{
                cursorType: cursorType,
                cursorChangeHandler: cursorChangeHandler,
            }}
        >
            {children}
        </MouseContext.Provider>
    );
};

export default MouseContextProvider;