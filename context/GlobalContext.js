'use client';

import { createContext,useContext,useState } from "react";

// Create context
const GlobalContext = createContext();


// Create a provider
export function GlobalProvider({children}) {
    const [unReadCount,setUnReadCount]=useState(0);


    return (
        <GlobalContext.Provider value={{
            unReadCount,
            setUnReadCount
        }}>
            {children}
        </GlobalContext.Provider>
    );
}


// Create a custom hook to access context
export function useGlobalContext() {
    return useContext(GlobalContext);
}