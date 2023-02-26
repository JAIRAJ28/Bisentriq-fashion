import { Image ,Box,Text,Stack} from "@chakra-ui/react"
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
  import axios from "axios";
import { useState,useEffect } from "react";
export const Track=()=>{
    let data = JSON.parse(localStorage.getItem("userData"));   
   console.log(data)
    let [state,setState]=useState([])
    useEffect(()=>{
      axios.get("https://636d2336ab4814f2b279de8f.mockapi.io/car").then((res)=>{
        console.log(res.data)
        setState(res.data)
      })
    },[])
    
    
    return <>
    <Stack w="80%" m="auto" display="flex" >
    <Image
    width="40%"
    m="auto"
    src="https://cdn.dribbble.com/users/2140642/screenshots/4281297/rf_sucess_v3.gif"
    alt="ORDER PLACED"
    /> 
    <Text fontSize={"20px"} fontWeight="700" >Order Is On The Way</Text>
    </Stack>
 

     <TableContainer mt="30px" border="8px solid #62B6B7" w="80%" m="auto">
     <Table variant='simple'>
       <TableCaption>ADDRESS Section</TableCaption>
       <Thead>
         <Tr>
           <Th>FirstName</Th>
           <Th>LastName</Th>
           <Th>Address</Th>
           <Th>Zip Code</Th>
        </Tr>
       </Thead>
       <Tbody>
      { data.map((item)=>(
         <Tr>
           <Td>{item.firstname}</Td>
           <Td>{item.last}</Td>
           <Td>{item.address}</Td>
           <Td>{item.zip}</Td>
           
         </Tr>))}
      
       </Tbody>
    
     </Table>
   </TableContainer>



<Text>Order Status & Details</Text>


     <TableContainer mt="40px" border="8px solid #495579" w="80%" m="auto" >
     <Table variant='simple'>
       <TableCaption>ADDRESS Section</TableCaption>
       <Thead>
         <Tr>
           <Th>Name</Th>
           <Th>LastName</Th>
           <Th>Status</Th>
           
        </Tr>
       </Thead>
       <Tbody>
       {state.map((item)=>(
         <Tr>
           <Td>{item.title}</Td>
           <Td><Image
           width="40px"
           src={item.image?item.image:item.img?item.img:item.img1}
           alt=""
           /></Td>
           <Td>{item.image?"Item Has Been DisPatched":item.img?"Order is ready for Shipped":"Will Delivered within 3 Days"}</Td>
           
           
         </Tr>))}
      
       </Tbody>
    
     </Table>
   </TableContainer>

    </>
}