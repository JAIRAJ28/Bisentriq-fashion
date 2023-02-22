import { Link } from "@chakra-ui/react"
import "./logpop.css"



export const Login=({changeonClick,changeSignup,showCreate,showpop,handelCreate})=>{
  
    return(
        <>
<div className="PopUp">
        <div className="closebutton"  onClick={()=>{changeonClick()}}>X</div>
        <form action="">
    
        <div className="form">
        <p className="big">Sign IN</p>
        <hr />
        <p>Sign in so you can save items to your wishlists, track your orders, and check out faster!</p>
        <div className="form-element"></div>
        <label for="">Email*</label>
        <br/>
        <input type="email" id="email" placeholder="Enter email" required/>
     </div>
     <input type="checkbox"/>
      <label for="">keep me signed in <span className="animate"><button className="hov">i</button></span></label>
      
      
      <button className="submit">NEXT</button>
      </form>
      <button className="mobilenumber" onClick={()=>{changeonClick()
      handelCreate()
     
      }}>USE MOBILE NUMBER INSTEAD
</button>
      <hr/>
      <p className="big">Sign UP</p>
      <p>Welcome! It's quick and easy to set up an account</p>
      <button className="create_accnt"
      onClick={()=>{
        changeonClick()
        changeSignup() 
      }}>Create An Account</button>
          
      </div>

</>
    )
}