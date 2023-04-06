import React, { createContext, useState } from "react";

export const MouseContext = createContext();

const MouseContextProvider = ({ children }) => {
    const [cursorType, setCursorType] = useState("");

    const cursorChangeHandler = (cursorType) => {
        setCursorType(cursorType);
    };

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