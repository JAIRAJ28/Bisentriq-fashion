import { useState,useEffect } from "react"
import axios from "axios"
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
    Image
  } from '@chakra-ui/react'

const AdminOrders=()=>{
let [data,setData]=useState([])


    useEffect(()=>{
        HandelOrders()
    },[])
    const HandelOrders=()=>{
        axios.get(`https://636d2336ab4814f2b279de8f.mockapi.io/car`).then((res)=>{
            console.log(res.data)
            setData(res.data)
            .catch((err)=>{
                console.log(err)
            })
        })
    }
    return <>
           <div
          
           style={{
            width:"80%",
            margin:"auto",
            background: "url('https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif')",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            height:"500px",
           
           }}
           >
             <TableContainer>
  <Table variant='simple' width="40%" ml="39%" mt="20px" bg="#2B3467"
  color="white"
  >
    <TableCaption>Customer Details</TableCaption>
    <Thead color={"white"}>
      <Tr>
     
           <Th>Name</Th>
           <Th>LastName</Th>
           <Th>Status</Th>
           
      
      </Tr>
    </Thead>
    <Tbody>
    {data.map((item)=>(
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
           </div>
        </>
}
export default AdminOrders