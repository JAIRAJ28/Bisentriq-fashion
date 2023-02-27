import "./cssnav/logup.css"
import { Box,Text,Link } from "@chakra-ui/react"
import {
 Button   
  } from '@chakra-ui/react';
  import {FcExpand } from "react-icons/fc";
  import { RiCustomerService2Line ,RiCreativeCommonsByFill} from "react-icons/ri";
import { Login } from "./Components/signin/signup/login";
import { useState } from "react";
import { Checkcreate } from "./Components/signin/signup/check";
import Signup from "./Components/signin/signup/signup";
import { useNavigate } from "react-router-dom";
const LoginsinBar=()=>{
let [showpop,setpop]=useState(false)
let [showcheck,setcheck]=useState(false)
let [showSignup,setshowSignup]=useState(false)
let nav=useNavigate()
// handel the popup and closing and the same time showing another
const handelClick=()=>{
    nav("/")
    setpop(!showpop)
    setcheck(false)
    setshowSignup(false)
}
const handelCreate=()=>{
    setcheck(!showcheck)
}
const handelSignup=()=>{
    setshowSignup(!showSignup)
}


const handelclosepop=()=>{
    return setpop(false)
}
const handelCreateClose=()=>{
    return setcheck(false)
}
const handelClosesignup=()=>{
    return setshowSignup(false)
}

    return (
        <Box bg='#E3DFFD' p="1px"  width={{ base: '100%', sm: '100%', md: '100%' }}>
         <div style={{display:"flex",marginLeft:"80%"}}>
         <div className="drop-main" style={{display:"flex",margin:"0.4em"}}>
            <RiCustomerService2Line size="20px" style={{color:"#009688"}}/>
            <Text >English</Text>
            <FcExpand/>
         <div className="dropdown-content">
        <Text className="dropdown-text">Currency</Text>
        <Text className="dropdown-text" color="blue.400"><Link>USD $</Link></Text>
        <Text className="dropdown-text">Language</Text>
        <Text className="dropdown-text" color="blue.400"><Link>English  / French</Link> </Text>
        </div>
        </div> 
        <Button size="sm"  w={["50%", "50%", "50%","50%"]}> <RiCreativeCommonsByFill size="35px" style={{color:"#009688"}} /> 
      
        <Text onClick={handelClick}>  signin / signup</Text>
        </Button>
        </div>
       { showpop && <Login
       changeonClick={handelclosepop}
       showCreate={handelCreate}
       changeSignup={handelSignup}
       handelCreate={handelCreate}
       handelClick={handelClick}
       /> }


        {showcheck&&<Checkcreate
        changeCreate={handelCreateClose}
        changeSignup={handelSignup}
        handelClick={ handelClick}

        />}

     {showSignup&&<Signup
     changeSignup={handelSignup}
     handelClosesignup={handelClosesignup}
     handelClick={handelClick}
     />}
       

        </Box>
    )
}

export default LoginsinBar