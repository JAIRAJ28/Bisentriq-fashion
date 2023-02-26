import { Link } from "@chakra-ui/react"
import "./logpop.css"
import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../../../firbase"
import { useContext } from "react"
import { Authcontext } from "../../../Authcontext/contextApi"
const Signup=({handelClosesignup,handelClick})=>{
const [errMessg,setErr]=useState(false)
const navigate=useNavigate()
let [data,setData]=useState({
  email:"",
  mobile:"",
  password:"",
})



const HandelChange=(e)=>{
  let val=e.target.value
  // let name=e.target.name
  setData({...data,[e.target.name]:val})
}
console.log(data)
console.log(auth)
const handelSubmit=(e)=>{
  e.preventDefault()
if(!data.email|| !data.password || !data.mobile){
  setErr(true)
  return
}
createUserWithEmailAndPassword(auth,data.email,data.password).then(async(res)=>{
  console.log(res)
  handelClosesignup()
  alert("Signup SuceessFull,Please Go Ahead And Login Again")
  handelClick()
  navigate("/")
}).catch((Err)=>{
  console.log(Err)
  alert(Err.message)
})
}



    return <>
     <div className="Signup">
    <div className="closebutton"
    onClick={()=>{
      handelClosesignup()
    }}
    >X</div>
    <form action="" onSubmit={handelSubmit}>
 <div className="form">
    <p className="big">Create An Account</p>
    <hr/>
    <p>Welcome to Anthropologie! It's quick and easy to set up an account.</p>
    <div className="form-element"></div>
    <label for="">Email*</label>
    <br/>
    <input type="email" name="email" id="email" placeholder="Enter Email" value={data.email} onChange={HandelChange}  required/>
    <label for="">MOBILE NUMBER*</label>
    <br/>
    <input type="number" name="mobile" id="email" placeholder="Enter Mobile" value={data.mobile}   onChange={HandelChange} required/>
 </div>
 <input type="password" name="password" id="email" placeholder="Enter Password" value={data.password}  onChange={HandelChange} required/>
  <input type="checkbox"/>
  <label for="">keep me signed in <span className="animate"><button className="hov">i</button></span></label>
  
  <div>
    <p
    style={{
      color:"red"
    }}
    >{errMessg?"Fill All Fields":""}</p>
  <button className="submit"
  >NEXT</button>
</div>

<input type="checkbox"/>
<label style={{fontSize:"12px",lineHeight: "2px"}} for="">Sign me up to receive Anthropologie offers, promotions and other commercial messages. By creating an account, I agree to Anthropologie's Terms of Service and Privacy Policy. I may unsubscribe at any time. Creating an account will not enroll you in SMS marketing.</label>
<hr />
<p style={{fontSize:"11px",lineHeight:"20px"}}>By creating an account, you agree to Anthropologie's <Link href="">terms of use</Link> and privacy policy. 
  Landlines, VoIP, and prepaid phones are not supported. Standard message & data rates may apply.
   Message frequency may vary. Reply HELP for help, and STOP to cancel. Contact us for more information.</p>
  </form>
   <hr/>
  <p className="big">Already Have An Account</p>
  <button className="signinone"
  onClick={handelClick}
  >
   SIGN IN
  </button>
  

</div>

    </>
}

export default Signup