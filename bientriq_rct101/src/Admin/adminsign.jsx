import {  useState } from "react"
// import axios, { formToJSON } from "axios"
// import { useNavigate } from "react-router-dom"

import axios, { formToJSON } from "axios"
import { useNavigate } from "react-router-dom"
import "./admin.css"



export const Admin=()=>{
    const [form,setForm]=useState("");
    const [pass,setpass]=useState("");
   const nav=useNavigate()

   const handelSubmit=(e)=>{
    e.preventDefault()
    if(form==="" ||pass===""){
      alert("Please fill all credentials")
    }
    else if(form==="admin@gmail.com"||pass===12345){
        alert("SIGNED In SUCCESSFULLY");
        nav("/admin/dashboard")
   }
  }
  return(
    <div className="hey">
   <div className="wrapper">
    <header>Login Form</header>
    <form  onSubmit={handelSubmit}>
      <div className="field email">
        <div className="input-area">
          <input type="text" placeholder="Email Address" value={form} onChange={(e)=>setForm(e.target.value)} required />
        
        </div>
        <div className="error error-txt">Email can't be blank</div>
      </div>
      <div className="field password">
        <div className="input-area">
          <input type="password" placeholder="Password"  value={pass} onChange={(e)=>setpass(e.target.value)} required  />
        
        </div>
        <div className="error error-txt">Password can't be blank</div>
      </div>
      <div className="pass-txt">Forgot password?</div>
      <input type="submit" value="Login" />
    </form>
    <div className="sign-txt">Not yet member? Signup now</div>
  </div>

      
    
    </div>
  )
}