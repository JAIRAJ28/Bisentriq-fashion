import { Link } from "@chakra-ui/react"
import "./logpop.css"

const Signup=({handelClosesignup})=>{

    return <>
     <div className="Signup">
    <div className="closebutton"
    onClick={()=>{
      handelClosesignup()
    }}
    >X</div>
    <form action="">
 <div className="form">
    <p className="big">Create An Account</p>
    <hr/>
    <p>Welcome to Anthropologie! It's quick and easy to set up an account.</p>
    <div className="form-element"></div>
    <label for="">Email*</label>
    <br/>
    <input type="email" id="email1" placeholder="Enter Email"  required/>
    <label for="">MOBILE NUMBER*</label>
    <br/>
    <input type="number" id="numb" placeholder="Enter Mobile" min="10" max="10" required/>
 </div>
  <input type="checkbox"/>
  <label for="">keep me signed in <span className="animate"><button className="hov">i</button></span></label>
  
  <div>
  <button className="submit">NEXT</button>
</div>
<input type="checkbox"/>
<label style={{fontSize:"12px",lineHeight: "2px"}} for="">Sign me up to receive Anthropologie offers, promotions and other commercial messages. By creating an account, I agree to Anthropologie's Terms of Service and Privacy Policy. I may unsubscribe at any time. Creating an account will not enroll you in SMS marketing.</label>
<p style={{fontSize:"12px",lineHeight:"20px"}}>By creating an account, you agree to Anthropologie's <Link href="">terms of use</Link> and privacy policy. 
  Landlines, VoIP, and prepaid phones are not supported. Standard message & data rates may apply.
   Message frequency may vary. Reply HELP for help, and STOP to cancel. Contact us for more information.</p>
   <hr/>
  <p className="big">Already Have An Account</p>
  <button className="signinone">
    <Link href="">SIGN IN</Link>
  </button>
  
</form>
</div>

    </>
}

export default Signup