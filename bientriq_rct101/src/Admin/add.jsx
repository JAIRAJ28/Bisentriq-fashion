import { Flex,Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
 import { Link } from "@chakra-ui/react";


const OrmAdmin=()=>{
    const [title,setTitle]=useState("");
    const [price,setprice]=useState(""); 
    const [description,setdescription]=useState("");
    const [category,setcategory]=useState("");
    const [image,setimage]=useState("");
    const [rating,setrating]=useState("");
    const [id,setid]=useState("");


const handelSubmit=(e)=>{
    e.preventDefault()
    let obj={
        title:title,
        price:price,
        description:description,
        category:category,
        image:image,
        rating:rating,
        id:id
    }
    axios.post("http://localhost:8080/profile",obj)
    .then(res=>console.log(res.data))
    .catch((err)=>console.log(err))

    alert("Added")
}



    return(
        <>
              <div className="hey">
   <div className="wrapper">
    <header>Login Form</header>
    <form onSubmit={handelSubmit} >
        <Flex>
      <div className="field email">
        <div className="input-area">
          <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
        
        </div>
        <div className="error error-txt">Email can't be blank</div>
      </div>

      {/*     //////////////////////////////////////////////////////////////////////// */}
      <div className="field password">
        <div className="input-area">
          <input  placeholder="Price" value={price} onChange={(e)=>setprice(e.target.value)}  required  />
        
        </div>

       
        <div className="error error-txt">Password can't be blank</div>
      </div>
      </Flex>
{/*     //////////////////////////////////////////////////////////////////////// */}
      <div className="field password">
        <div className="input-area">
          <input type="text" placeholder="description" value={description} onChange={(e)=>setdescription(e.target.value)}  required  />
        
        </div>

       
        <div className="error error-txt">Password can't be blank</div>
      </div>

{/*     //////////////////////////////////////////////////////////////////////// */}
      <div className="field password">
        <div className="input-area">
          <input type="text" placeholder="Image-Link-Provide in Doubelequotes " value={image} onChange={(e)=>setimage(e.target.value)}  required  />
        
        </div>

       
        <div className="error error-txt">Password can't be blank</div>
      </div>
      {/*     //////////////////////////////////////////////////////////////////////// */}
      <div className="field password">
        <div className="input-area">
          <input type="text" placeholder="Category" value={category} onChange={(e)=>setcategory(e.target.value)} required  />
        
        </div>

       
        <div className="error error-txt">Password can't be blank</div>
      </div>
{/*     //////////////////////////////////////////////////////////////////////// */}
      <div className="field password">
      

       
        <div className="error error-txt">Password can't be blank</div>
      </div>
 {/*  ///////////////////////////////////////////////////////////////////////////////// */}
      <div className="field password">
       
       
        <div className="error error-txt">Password can't be blank</div>
      </div>

      <div className="pass-txt">Forgot password?</div>
      <input type="submit" value="ADD NEW" />
    </form>

    <Link href="/admin/dashboard">
   <Text
   fontSize={"20px"}
  fontWeight={"bold"}

   >Dashboard</Text>
   </Link>
  </div>

      
    
    </div>
        </>
    )
}

export default OrmAdmin;