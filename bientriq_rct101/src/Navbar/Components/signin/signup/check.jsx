import { Link } from "@chakra-ui/react"
import "./logpop.css"



export const Checkcreate=({changeCreate,changeSignup, handelClick})=>{

    return<>
        <div class="check">
      <div class="closebutton"
      onClick={()=>{
        changeCreate()
      }}
      >X</div>
      <form action="">
   <div class="form">
      <p class="big">Sign IN</p>
      <hr/>
      <p>Sign in so you can save items to your wishlists, track your orders, and check out faster!</p>
      <div class="form-element"></div>
      <label for="">MOBILE NUMBER*</label>
      <br/>
      <input type="number" id="number" placeholder="Enter Mobile" required/>
   </div>
    <input type="checkbox"/>
    <label for="">keep me signed in <span class="animate"><button class="hov">i</button></span></label>
    
    <div>
    <button class="submit">NEXT</button>
   
  </div> </form>
    <button class="EmailIDUSE"
    onClick={()=>handelClick()}
    >
      SIGN UP WITH EMAIL INSTEAD
      </button>
     
      <p>Landlines, VoIP, and prepaid phones are not supported. Standard message & data rates may apply. 
        Message frequency may vary. Reply HELP for help, and STOP to cancel.</p>

    <hr/>
    <p class="big">Sign UP</p>
    <p>Welcome! It's quick and easy to set up an account</p>
    <button class="create_accnt"
    onClick={()=>{
      changeSignup()
    }}
    >
      Create An Account
    </button>
    
 
  </div>
    </>
}