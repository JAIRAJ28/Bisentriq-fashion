import { createContext, useContext } from "react";
import { useState,useEffect } from "react";


export const Authcontext=createContext()



export const AuthContextProvider=({children})=>{

    const [isAuth,setAuth]=useState(false);
     const [isSearched,setSearched]=useState("")
    const toggleAuth=(n)=>{
        setAuth(n)
    }
    
    const handelSearch=(n)=>{
        setSearched(n)
    } 

    return(
        <Authcontext.Provider value={{toggleAuth,handelSearch,isSearched,isAuth}}>
            {children}
        </Authcontext.Provider>
    )
}