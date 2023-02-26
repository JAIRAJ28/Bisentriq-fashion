import axios from "axios"
import { useState,useEffect,useReducer } from "react"
import Sidebar from "../singlepages/sidebar/sidebar"
import { Link } from "react-router-dom"
import { Box,Image ,Text,Grid,Button,Spinner } from "@chakra-ui/react"
import CartFurniture from "./allfur"
import { AiOutlineRight ,AiOutlineLeft} from "react-icons/ai";

const getData=(name,params,page)=>{
    return axios.get(`https://anthroapi.onrender.com/all_product?_limit=15&_page=${page}`,{
      params
      // category:{category}
    })
}
let limit=15
let url=`https://anthroapi.onrender.com/cloths`

const initialState = {
    data: [],
    isLoading: true,
    error: null,
  };
const reducer = (state,action) => {
    switch(action.type){
      case "data":return{
        ...state,data:action.payload
    }
      case "isLoading":return{
        ...state,isLoading:action.payload
    }
      case "error":return{
        ...state,error:action.payload
    }
      default:return{
        state
    }
    }
  };
export const Furniture=({name})=>{
    const[state,dispatcher] = useReducer(reducer,initialState);
    const [order,setOrder] = useState("")
    const [filter,setFilter] = useState("")
    let [td,setTd]=useState(0)
    let [page,setPage]=useState(1)
    useEffect(()=>{
      let param = order?{_sort:"price",_order:order}:{}
      // let k=""
      // if(order!=="asc"||order!="desc"){
      //   k=order
      // }
      param = filter?{...param,q:filter}:{...param}
      console.log(order)
      dispatcher({type:"isLoading",payload:true})
        getData(name,param,page).then((res)=>{
          dispatcher({type: "data", payload: res.data})
          setTd(res.headers.get("x-total-count"));
          console.log(res.data)
        }).catch((err)=>{
          console.log(err)
          dispatcher({type:"error",payload:true})
        })
        .finally(()=>{
          dispatcher({type:"isLoading",payload:false})
        })
    },[order,filter,page])

   const handelFiltered=(e)=>{
    if(e.target.value==="asc"|| e.target.value==="desc"){
    setOrder(e.target.value)
    }else{
      setFilter(e.target.value)
    }
   }

   const handelPage=(val)=>{
    setPage((prev)=>prev+val)
}

console.log(td/limit)

    return(
        <>
        <div 
        style={{
          display:"flex"
        }}
        >
        <Sidebar/>
        

        <Box>

<Box display={"flex"}
mb="30px"
justifyContent={"space-around"}
>
    <Text>Womens Clothings</Text>
 <Box
 fontWeight={"900"}
 >
   <label
    style={{fontWeight: "800"}}
    padding="10px"
    mr="10px"
    >Filter</label>
    <select
     style={{fontWeight: "800"}}
    onChange={handelFiltered}
    >   <option value="">Filter Yor Need</option>
        <option value="asc">Price Low To High</option>
        <option value="desc">Price High To Low</option>
    </select>
    </Box> 
  <Box display={"flex"}>
    <Button mr="2px" isDisabled={page===1}  onClick={()=>handelPage(-1)}>
    {/* isDisabled={page===1} onClick={()=>handelPage(-1)} */}
   <AiOutlineLeft
   size="25px"
   
   /> 
   </Button>
   {page}
   <Button ml="2px"  isDisabled={page===(Math.ceil(td/limit))}  onClick={()=>handelPage(1)} >
  
   <AiOutlineRight 
    size="25px"
    
    /></Button>
    </Box>
</Box>

{ state.isLoading?(
        <>
            <Spinner
           
           ml="300px"
           thickness='4px'
           speed='1.65s'
           emptyColor='gray.200'
           color='blue.500'
           size='xl'
/>
             "Please Wait....."
            
</>
        ):  <Grid
        dispaly={"grid"} templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']}
        gap={"30px"}
        >
            {
               state.data?.map((item)=>(
                <CartFurniture
                  IMAGE={item.img1?item.img1:item.img}
                  txt1={item.category}
                  name={item.title}
                  size={item.size}
                  price={item.price}
                  Id={item.id}
                  url={url}
                  />
                ))
            }
        </Grid>
}
        </Box>
      </div>
        </>
    )
}
{/* <CArtComp
IMAGE={item.img1}
txt1={item.category}
name={item.title}
size={item.size}
price={item.price}
Id={item.id}
url={url}
/> */}