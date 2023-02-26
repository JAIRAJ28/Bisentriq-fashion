
import ShoesStyle from "./shoesSingle"
import axios from "axios"
import { useState,useEffect,useReducer } from "react"
import Sidebar from "../singlepages/sidebar/sidebar"
import { Link } from "react-router-dom"
import { Box,Image ,Text,Grid,Button,Spinner } from "@chakra-ui/react"
import CartFurniture from "./allfur"
import { AiOutlineRight ,AiOutlineLeft} from "react-icons/ai";
import { useContext } from "react"
import { Authcontext } from "../../Navbar/Authcontext/contextApi"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cartshoes from "./cartShoes"
const getData=(name,params,page)=>{
    return axios.get(`https://anthroapi.onrender.com/shoes?_limit=15&_page=${page}`,{
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
  let arr=[
    {
      imgSrc:"https://i.ibb.co/5FDy006/4130943510003-066-b15.webp",
      des:"Maeve Cropped Racerback Tank"
    },{
      imgSrc:"https://i.ibb.co/GT3Mf6h/2.webp",
      des:"On Cloudeasy Sneakers"
    },
    {
      imgSrc:"https://i.ibb.co/gRPG1ZF/4123464030062-035-b2.webp",
      des:"Hutch Satin Utility Pants"
    },
    {
      imgSrc:"https://i.ibb.co/QYQMrVJ/62395090-070-b.webp",
      des:"Mila Mirror"
    },
    {
      imgSrc:"https://i.ibb.co/9GWQ6S9/66039397-072-b2.webp",
      des:"Mac Duggal Indy Chiffon Dress"
    },


    {
      imgSrc:"https://i.ibb.co/FXWVZnt/63828024-048-b2.webp",
      des:"Mac Duggal Indy Chiffon Dress"
    },
    {
      imgSrc:"https://i.ibb.co/dgJ1Y5j/4130370060132-065-b2.webp" ,
      des:"Forever That Girl Puff-Sleeve Shirt Dress"
    },
    {
      imgSrc:"https://i.ibb.co/XsnBcVt/tapestry.webp",
      des:"Geisha Designs Long-Sleeve Printed Maxi Dress"
    },
    {
      imgSrc:"https://i.ibb.co/WHm5vnm/47322425-013-b1.webp",
      des:"BHLDN Weddings Belize Dress"
    },
    {
      imgSrc:"https://i.ibb.co/Y8D527r/39567797-001-b10.webp",
      des:"Victoria Frame"
    }

  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export const Shoespg=({name})=>{
    const[state,dispatcher] = useReducer(reducer,initialState);
    const [order,setOrder] = useState("")
    const [filter,setFilter] = useState("")
    const {isSearched}=useContext(Authcontext)
    let [td,setTd]=useState(0)
    let [page,setPage]=useState(1)
    useEffect(()=>{
      let param = order?{_sort:"price",_order:order}:{}
      // let k=""
      // if(order!=="asc"||order!="desc"){
      //   k=order
      // }
      param = isSearched?{...param,q:isSearched}:{...param,q:filter}
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
    },[order,filter,page,isSearched])

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

<Box bg="#4E31AA" color={"white"} w="80%" m="auto">Footwear to last you a lifetime.</Box>

        <div 
        style={{
          display:"flex",
          marginTop:"50px"
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
        <option value="ASICS">ASICS</option>
        <option value="ALOHAS">ALOHAS</option>
        <option value="Bombas">Bombas</option>
        <option value="Faguo">Faguo</option>
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
                <Cartshoes
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
      <Box
borderTop={"9px solid #F7C8E0"}
borderBottom={"9px solid #F7C8E0"}
width={"93%"}
margin="auto" mt="90px" p="20px"
>
<Carousel  responsive={responsive}>
{arr.map((item)=>(
  <Box w="70%" >
    <Image src={item.imgSrc} 
    alt="images"
    />
    <Text>{item.des}</Text>
    
  </Box>
))}
</Carousel>
</Box>
<Box>
  <Text>About Us</Text>
  <Text>Our mission at Anthropologie has always been to surprise and delight you with unexpected, distinctive finds for your closet and home. We source and craft all of our products with care, ensuring that any treasure you find at Anthropologie is unique, just like you. Explore our dresses shop to find styles and fits perfect for any occasion, from cocktail party dresses to wedding guest dresses to casual daytime silhouettes. Shop BHLDN</Text>
  <Link
  href=""
  color="blue.600"
  >Read More</Link>
</Box>
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