import { Box,Stack,Img, Image,Text,Input ,Select,VStack, Button,Flex,FormControl,FormLabel,Link} from "@chakra-ui/react"
import axios from "axios"
import { useState,useEffect } from "react"
import { MdDeleteOutline } from "react-icons/md"
import { MdCreditCard } from "react-icons/md"
import {SiPhonepe,SiPaypal} from "react-icons/si"
import HomeSimple from "./cardhomecrousel"
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'


const getData=()=>{
    return axios.get(`https://636d2336ab4814f2b279de8f.mockapi.io//car`)
}




let array=[]
function Cartpage(){

const [data,setData]=useState([])
const [qty,setQty]=useState(1)
const [key,setKey]=useState("")
let nav=useNavigate()
const fetchData=async()=>{
 
  try {
     let res=await getData()
     setData(res.data)
  } catch (error) {
    console.log(error)
  }
} 
useEffect(()=>{
    fetchData()
},[])

console.log(qty)

const handelDelete=(Id)=>{
   axios.delete(`https://636d2336ab4814f2b279de8f.mockapi.io//car/${Id}`).then(()=>fetchData())
   
}
const handleQty = (id,payload)=>{
    console.log(id,payload)
    let updatedData = data.map((el)=>
    el.id===id?{...el,quantity:el.quantity+payload}:el);
    setData(updatedData)
  }
  // price:el.price*(el.quantity+payload),
 let total = data.reduce((acc,curr)=>{
    acc += curr.quantity?curr.quantity*curr.price:1*curr.price
    return acc
  },0)

  const [place,setPlace]=useState({
    firstname:"",
    last:"",
    address:"",
    zip:"",
    nameonCard:"",
    cardnumber:"",
    exp:"",
    cvv:"",
    total:{total}
   })

  const handelSubmit=(e)=>{
    e.preventDefault()
    array.push(place)
    localStorage.setItem('userData',JSON.stringify(array))
   alert("Order Placed")
   return nav("/track")
}



  const handelChange=(e)=>{
    setPlace({...place,[e.target.name]:e.target.value})
  }
console.log(place)
    return(
        <> 
        <Stack 
        direction={["column","column","row"]}
        alignContent="flex-end"
        m="30px"
       
        >

        <Box 
        borderRight={"10px solid #18122B"}
        width={["100%","100%","60%"]}
        color={"white"}
        bg="#443C68"
        padding="20px"
        >
       <Stack 
       
       >
       {data.map((item)=>(
        <Box key={item.id} display={"flex"} justifyContent={"space-between"} >
            <Box display={"flex"} mb="30px">  
            <Image
            ml="20px"
            width="100px"
            src={item.image?item.image:item.img1?item.img1:item.img}
            />
            <Box textAlign={"start"}>
             <Text textAlign={"start"}
                fontWeight={"bolder"} ml="18px"
            >{item.category}</Text>
              
              <Text ml="20px" textAlign={"start"}>
                {item.description?item.description:"Feel Free , Feel Unique with Birntriq fashion"}
              </Text>
              <Button isDisabled ={item.quantity===1}  ml="20px" mr="5px" size="md" bg="black" color="white" onClick={()=>{
            handleQty(item.id,-1);
          }} >-</Button>
              <span >{item.quantity}</span>
             <Button  ml="5px" size="md" bg="black" color="white"  onClick={()=>{
            handleQty(item.id,1);
          }} >+</Button>
             
            
        
            </Box>
            <Text fontSize={"20px"} fontWeight="900" color="#C9F4AA"> $-{item.quantity?Number(item.price)*item.quantity:item.price}</Text>
            </Box>
           <VStack>
            <Text ml="70px">Remove Item</Text>
          <MdDeleteOutline ml="70px" size="30px" color="#93BFCF" onClick={()=>{handelDelete(item.id)}}/>
            </VStack>
        </Box>
       ))}
       </Stack>
       <Text
       fontSize={"20px"}
       fontWeight="600"
       fontFamily={"monospace"}
       
       >
          {total?`Total Cart Value:${total}`:"Please Add Items To cart"}
          </Text>
       </Box>







        <VStack
      border={"3px solid turquoise"}
      p={"30px"}
      m={"20px"}
      width={["100%","100%","40%"]}
      color="black"
     bg="#495579"
     height={["600px","600px"]}
      boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      >
        <form action="" onSubmit={handelSubmit}>
        <Text
        fontStyle={"italic"}
        color="rgb(102,153,0)"
        fontWeight={"bold"}
        fontSize={"30px"}
        mb={"30px"}
        >Place Your Order</Text>
       
       
      <Flex w={"90%"} justifyContent={"space-between"} gap={"10"} 
      >
        <input type="text" placeholder="First Name" name="firstname"  required onChange={handelChange}
        style={{
          width:"100%",
          padding:"15px",
          borderRadius:"20px"
        }}
        />
        <input 
         style={{
          width:"100%",
          padding:"15px",
          borderRadius:"20px"
        }}
        type="text" placeholder="Last Name" name="last" required  onChange={handelChange}/> 
        </Flex>
       <br />
       <Flex justifyContent={"space-around"} w="90%">
       <input   type="text" placeholder="ADDRESS"  name="address" onChange={handelChange}
        style={{
          width:"80%",
          padding:"15px",
          borderRadius:"20px",
          marginRight:"10px"
        }}
        required 
       />
         <input type="number" placeholder="Zip-Code"  name="zip" onChange={handelChange}
        style={{
          width:"40%",
          padding:"15px",
          borderRadius:"20px",
          
        }}
        required 
       />
       </Flex>
         <Box
         mt="10px"
         >
         <input  type="text" placeholder="Name On Card"  name="nameonCard" onChange={handelChange}
         style={{
          width:"90%",
          borderRadius:"20px",
          padding:"15px",
          marginTop:"10px"
        }}
        required
         />
         </Box >
         {/* <input  type="text" placeholder="Name On Card"  name="nameonCard" onChange={handelChange}
        style={{
          width:"90%",
          borderRadius:"20px",
         
        }}
        required
        /> */}
        <Flex>
        <input  type="number" placeholder="CARD NUMBER" maxlength="11" minLength={"11"}  name="cardnumber"
        onChange={handelChange}
        style={{
          width:"90%",
          padding:"15px",
          borderRadius:"20px",
          marginTop:"20px"
        }}
        required
        />
        </Flex>
        <Flex width="90%" gap="8">
        <input  type="number" placeholder="Expiry Date" maxlength="5" minLength={"5"} name="exp" onChange={handelChange}
        style={{
          width:"70%",
          padding:"15px",
          borderRadius:"20px",
          marginTop:"30px"
        }}
        required
        />
         <input  type="number" placeholder="CVV"   maxlength="3" minLength={"3"} name="cvv" onChange={handelChange}
        style={{
          width:"30%",
          padding:"15px",
          borderRadius:"20px",
          marginTop:"30px"
        }}
        required
        />
        </Flex>
        <Flex width="90%" margin="auto"  marginTop="30px" gap="8">
        <Button type="submit" 
           style={{
         
            backgroundColor:"#4D455D",
            color:"white",
            width:"70%",
            padding:"5px",
            borderRadius:"10px"
          }}
        >Pay-{total}</Button>
     
        
       <Box display="flex">
       <SiPhonepe
       size="20px"
      
       /> <SiPaypal
       size="20px"
       />
         <MdCreditCard
          size="20px"
         />
         </Box>
         </Flex>
   </form>
      </VStack>





      
       </Stack>
       <Box bg="#609966" color="white" fontWeight={"600"} width="93%" margin="auto">
       <Text>Saved for Later</Text>
       <Text>Your saved for later is currently empty. Add items here that you like, but aren't ready to buy.</Text>
       </Box>

        </>
    )
}

export default Cartpage



    //  {/* <Select placeholder='Quantity' key={item.id} width={["10%","30%"]} ml="10px" color="#2F58CD" bg="#443C68"
    //           onChang={()=>Quantityhandel(item.id)}
    //           >
    //        <option  value='1'>Qty -1</option>
    //        <option value='2'>Qty -2</option>
    //        <option value='3'>Qty -3</option>
    //        <option value='4'>Qty -4</option>
    //        <option value='5'>Qty -5</option>
    //          </Select> */}