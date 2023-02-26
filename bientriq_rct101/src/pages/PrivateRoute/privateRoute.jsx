import { useContext } from "react"
import { Navigate } from "react-router-dom" 
import { Authcontext } from "../../Navbar/Authcontext/contextApi"
import { useNavigate } from "react-router-dom"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    PopoverAnchor,
    Button,ButtonGroup,Box
  } from '@chakra-ui/react'

import React from "react"
import { useDisclosure } from "@chakra-ui/react"

 const PrivateRoute=({children})=>{
const {toggleAuth,isAuth,handelSearch,isSearched}=useContext(Authcontext)

console.log(isAuth)
if(isAuth===false){
   alert("Please Login")
   return <Navigate to="/" /> 
}


return(
    <>
    {children}
    </>
    )
}
export default PrivateRoute