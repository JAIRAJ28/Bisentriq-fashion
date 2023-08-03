import { Box,Stack,Image ,Text,Button} from "@chakra-ui/react"
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
import axios from "axios"
import { useState,useEffect } from "react"
import { AiFillDelete } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
export const Dashboard=()=>{
    let nav=useNavigate()
 let [data,setData]=useState([])
 useEffect(()=>{
    handelData()
 },[])
const handelData=()=>{
    axios.get(`http://localhost:8080/profile`).then((res)=>{
        setData(res.data)
      }).catch((err)=>console.log(err))
}
console.log(data)

const handelDelete=(id)=>{
  axios.delete(`http://localhost:8080/profile/${id}`).then((res)=>{
    handelData()
  })
}

    return <>
    <Stack direction="row"  bg="#62B6B7"  >
    <Stack w="10%" fontSize={"20px"}
   
    ml="10px" bg="#263159" color="white" fontWeight="600" textAlign={"start"} >
        <Box cursor={"pointer"} >
          <Link to="/admin/dashboard"> Dash</Link>
           
           </Box>
        <Box cursor={"pointer"}>
        <Link to="/admin/add"> Add</Link>
           </Box>
        <Box cursor={"pointer"}>
        <Link to="/admin/orders">Orders</Link>
           </Box>
     
    </Stack>
    <Box   p="20px" ml="5%">
        <Box     fontSize={"20px"} >
            <Box>
           <Text fontWeight="900">ADMIN PANNEL</Text>
          <Text fontWeight="500">WELCOME !</Text>
          </Box>
        </Box>
     <Box ml="10%">
        <Image
        w="90%"
        src="https://www.extendoffice.com/images/stories/shot-kutools-excel/dynamic-ranked-bar-chart/shot-dynamic-ranked-bar-chart-1.gif" />
     </Box>
    </Box>
    
    

    <TableContainer width="70%">
  <Table variant='simple'>
    <TableCaption>Dashboard Handel</TableCaption>
    <Thead>
      <Tr>
       <Th>Id</Th>
       <Th>Image</Th>
       <Th>Price</Th>
       <Th>Category</Th>
       <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
        {
            data?.map((item)=>(
                <Tr>
                <Td>{item.id}</Td>
                <Td><Image
                w="30px"
                src={item.image}
                /></Td>
                <Td>{item.price}</Td>
                <Td>{item.category}</Td>
                <Td><AiFillDelete 
                onClick={()=>handelDelete(item.id)}
                /></Td>
                </Tr>
            ))
        }

    </Tbody>

  </Table>
</TableContainer>
</Stack>
    </>
}