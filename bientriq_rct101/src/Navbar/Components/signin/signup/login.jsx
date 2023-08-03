import { Link,Image } from "@chakra-ui/react"
import "./logpop.css"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../../../firbase"
import { useContext } from "react"
import { Authcontext } from "../../../Authcontext/contextApi"

export const Login=({changeonClick,changeSignup,showCreate,showpop,handelCreate,handelClick})=>{
  
  const [errMessg,setErr]=useState(false)
  const navigate=useNavigate()
  let [data,setData]=useState({
    email:"",
    password:"",
  })
  const {toggleAuth,isAuth,handelSearch,isSearched}=useContext(Authcontext)
  const HandelChange=(e)=>{
    let val=e.target.value
    setData({...data,[e.target.type]:val})
  }
  console.log(data)
  
  const handelSubmit=(e)=>{
    e.preventDefault()
  if(!data.email|| !data.password ){
    setErr(true)
    return
  }
  signInWithEmailAndPassword(auth,data.email,data.password).then(async(res)=>{
    console.log(res)
    changeonClick()
     toggleAuth(true)
    alert("Signup SuceessFull",isAuth?"Enjoy Shopping":"")
   
    navigate("/")
  }).catch((Err)=>{
    console.log(Err)
    alert(Err.message)
  })
  }

    return(
        <>
<div className="PopUp">
        <div className="closebutton"  onClick={()=>{changeonClick()}}>X</div>
        <form action="" onSubmit={handelSubmit}>
    
        <div className="form">
        <p className="big">Sign IN</p>
        <hr />
        <p 
        style={{
          fontSize:"14px"
        }}
        >Sign in so you can save items to your wishlists, track your orders, and check out faster!</p>
        <div className="form-element"></div>
        <label for="">Email*</label>
        <br/>
        <input type="email" id="email"  onChange={HandelChange} placeholder="Enter email" required/>
        <input type="password" id="email" onChange={HandelChange} placeholder="Enter password" required/>
     </div>
     <input type="checkbox"/>
      <label for="">keep me signed in <span className="animate"><button className="hov">i</button></span></label>
      
      <p
    style={{
      color:"red"
    }}
    >{errMessg?"Fill All Fields":""}</p>
      <button className="submit">NEXT</button>
      </form>
      <button className="mobilenumber" onClick={()=>{changeonClick()
      handelCreate()
     
      }}>USE MOBILE NUMBER INSTEAD
</button>
      <hr/>
      <p className="big">Sign UP</p>
      <p
      style={{
        fontSize:"14px"
      }}
      >Welcome! It's quick and easy to set up an account</p>
      <button className="create_accnt"
      onClick={()=>{
        changeonClick()
        changeSignup() 
      }}>Create An Account</button>
          <Image
          width="40px"
          onClick={()=>{
            handelClick()
            navigate("/admin")
          }}
          src="https://i.ibb.co/yFsp5BV/154832661-manager-at-work-administrator-time-management-office-deadline-man-scheduled-task-productiv.webp"
          />
      </div>

</>
    )
}