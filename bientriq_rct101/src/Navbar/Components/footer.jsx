import { IoLocationSharp } from "react-icons/io5";
import "./Footer.css";
import { BsPinterest, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import { GrInstagram } from "react-icons/gr";


import { HiOutlineMail } from "react-icons/hi";



const Footer = () => {
  return (
    <footer>
    
    
      <div className="firstt" >
       
       
        <div className="check1st">
         
          <div className="check2nd" >
         
            <h1 style={{textAlign:"start",fontSize:"18px"}}> Sign Up for Email </h1>
            <p style={{textAlign:"start",fontSize:"12px"}}>
              Receive early access to new arrivals, sales, exclusive content,
              events and much more!
            </p>
          </div>
          <div className="check2nd1"
          style={{
            marginLeft:"10%"
          }}
          >
            <input placeholder="Enter Email Address" />
            <button> SUBMIT </button>
          </div>
        </div>
        <h1 className="endmail" style={{textAlign:"start",fontSize:"12px"}}>By signing up, you will receive Anthropologie offers, promotions and
          other commercial messages. You are also agreeing to Anthropologie’s, ,
          <Link color="blue.600">Privacy Policy</Link>
          . You may unsubscribe at any time.
        </h1>

        {/* Footer Here */}
        <div className="footer">
          <li className="smallscreen">
            <p>Help</p>

            <ul> <Link>Start A Return Or Exchange (Us) </Link></ul>
            <ul> <Link> Track your Order</Link></ul>
            <ul> <Link>Returns & Exchanges </Link></ul>
            <ul> <Link> Customer Servic</Link>e</ul>
            <ul> <Link>Current Promotions </Link></ul>

            <ul> <Link>Product Recalls </Link></ul>
          </li>

          <li className="smallscreen">
            <ul> <Link>Our Story </Link></ul>
            <p> <Link> About Us</Link></p>
            <ul> <Link> Events</Link> </ul>
            <ul> <Link>A Greater Good </Link></ul>
            <ul> <Link>Diversity & Inclusion </Link></ul>
            <ul> <Link>Stories </Link></ul>
          </li>
          <li className="smallscreen">
            <ul> <Link>AnthroPerks </Link></ul>
            <p> <Link>Services </Link></p>
            <ul> <Link>Gift Cards </Link></ul>
            <ul> <Link>AnthroLiving Designer & Trades Program </Link></ul>
            <ul> <Link>Furniture : Guides & Services </Link></ul>
            <ul> <Link> Store Pickup & Collection Points </Link> </ul>
            <ul> <Link> Klarma </Link></ul>
          </li>
          <li className="smallscreen">
            <p><Link>Connect</Link></p>
            <ul><Link>Contact us</Link></ul>
            <ul><Link>Stay Connected</Link></ul>
            <ul><Link>Careers</Link></ul>
            <ul><Link>Staying Services</Link></ul>
            <ul><Link>Request A C</Link></ul>
          </li>
          <li className="smallscreen1">
            <ul className="smallscreenes">
              <IoLocationSharp color="#95BDFF" size="2em" />

              Story Locater
            </ul>
            <ul className="smallscreenes">
              <HiOutlineMail color="#95BDFF" size="2em" />

              Get Email
            </ul>
          </li>
        </div>
        <div className="Sociallinks">
          <Image
          color="#AEE2FF"
            src="https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg"
            alt=""
          />
          <BsPinterest color="#A084DC" size="1.5em" />
          <GrInstagram  color="#A084DC" size="1.5em" />
          <FaFacebookSquare color="#A084DC" size="1.5em" />
          <BsTwitter color="#A084DC" size="1.5em" />
        </div>
        <div>
       <Link>   <Image
            className="banner"
            height={"100px"}
            src="https://imgur.com/ilxW6e9.jpeg"
            alt="last banner"
          />
          </Link>
        </div>
        <div className="country">
           
          <p>US</p>
          <p>France</p>
          <p>Germany</p>
          <p>Italy</p>
          <p>Spain</p>
          <p>UK</p>
        
        </div>

        <div className="EndFoot"
         style={{
          width:"90%",
          margin:"auto",
          display:"flex",
          justifyContent:"space-between"
        }}
        >
          <div className="lastFooter"
           style={{
            fontSize:"12px"
          }}
          >
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>CA Transparency</p>
            <p>Accessibility</p>
            <p>URBN.com</p>
            <p style={{color:"black"}}>For CA Residence</p>
          </div>
          <div className="last"
          style={{
            fontSize:"10px"
          }}
          >
            <p>2022 URBN.com. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;