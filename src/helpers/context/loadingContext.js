import React, { createContext, useState, useEffect } from "react"

export const LoadingContext = createContext();

const LoadingContextProvider = ({ children }) => {
    const [initialLoad, setInitialLoad] = useState(true)

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setInitialLoad(false)
        }, 3900)
        // setTimout length equal to preloader duration

        return () => {
            clearTimeout(loadingTimer)
        }
    }, [setInitialLoad])

    return (
        <LoadingContext.Provider
            value={{
                initialLoad: initialLoad
            }}
        >
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingContextProvider