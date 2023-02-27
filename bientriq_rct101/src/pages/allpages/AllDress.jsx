import axios from "axios"
import { useState,useEffect,useReducer } from "react"
import Sidebar from "../singlepages/sidebar/sidebar"
import { Link } from "react-router-dom"
import { Box,Image ,Text,Grid,Button,Spinner } from "@chakra-ui/react"
import AllCArtComp from "./newUniversal"
import { AiOutlineRight ,AiOutlineLeft} from "react-icons/ai";
import { useContext } from "react"
import { Authcontext } from "../../Navbar/Authcontext/contextApi"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const getData=(name,params,page)=>{
    return axios.get(`https://anthroapi.onrender.com/cloths?_limit=15&_page=${page}`,{
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
  let arr2=[
    {
      imgSrc:"https://i.ibb.co/TMK6tr4/4112210690147-066-b2.webp",
      des:"Eva Franco Lace Floral Blouse"
    },{
      imgSrc:"https://i.ibb.co/r2XbBqv/4110095140065-010-b2.webp",
      des:"On Cloudeasy Shampoo"
    },
    {
      imgSrc:"https://i.ibb.co/MSJphs5/80611452-080-b2.webp",
      des:"Athena Tapestry"
    },
    {
      imgSrc:"https://i.ibb.co/z5JVPFh/69978369-000-b.webp",
      des:"Mila Mirror"
    },
    {
      imgSrc:"https://i.ibb.co/WBGGxGg/473929246-ls-customerfave-c.webp",
      des:"Mac Duggal Indy Chiffon Dress"
    },


    {
      imgSrc:"https://i.ibb.co/FWtMsnz/54361464-011-b2.webp",
      des:"Mac Duggal Indy Chiffon Dress"
    },
    {
      imgSrc:"https://i.ibb.co/dgJ1Y5j/4130370060132-065-b2.webp" ,
      des:"Forever That Girl Puff-Sleeve Shirt Dress"
    },
    {
      imgSrc:"https://i.ibb.co/LZQh9pd/4123348690068-237-b2.webp",
      des:"Geisha Designs Long-Sleeve Printed Maxi Dress"
    },
    {
      imgSrc:"https://i.ibb.co/WHm5vnm/47322425-013-b1.webp",
      des:"BHLDN Weddings Belize Dress"
    },
    {
      imgSrc:"https://i.ibb.co/GT3Mf6h/2.webp",
      des:"Bistro Tile Monogram Old Fashioned Shoes"
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
export const Alldress=({name})=>{
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
                <Grid dispaly={"grid"} templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(6, 1fr)']} gap={6}
        margin="20px"
        >
        <Box>
            <Image
            width={{base:"40%",md:"100%"}}
            src="https://i.ibb.co/M8jd9fs/Fall-Site-Topper-1-LS.webp"
            alt="Falt-salt"
            />
            <Text 
            position="relative"
            top={["-20px","-80px"]}
            color={["black","black","white"]}
            fontWeight="800"
            
            >Dresses</Text>
        </Box>
        <Box>
        <Image
             width={{base:"40%",md:"100%"}}
            src="https://i.ibb.co/WBwTPqt/Fall-Site-Topper-2-LS.webp"
            alt="Falt-salt"
            />
            <Text 
            position="relative"
            top={["-40px","-70px","0px","-80px"]}
            color={["black","black","black","white"]}
            fontWeight="800"
            
            >Pants</Text>
        </Box>
        <Box>
        <Image
             width={{base:"40%",md:"100%"}}
            src="https://i.ibb.co/SyX02zS/Fall-Site-Topper-3-LS.webp"
            alt="Falt-salt"
            />
            <Text 
            position="relative"
            top={["-40px","-70px","0px","-80px"]}
            color={["black","black","black","white"]}
            fontWeight="800"
            
            >Jeans</Text>
        </Box>
        <Box>
        <Image
             width={{base:"40%",md:"100%"}}
            src="https://i.ibb.co/SyX02zS/Fall-Site-Topper-3-LS.webp"
            alt="Falt-salt"
            />
            <Text 
            position="relative"
            top={["-40px","-70px","0px","-80px"]}
            color={["black","black","black","white"]}
            fontWeight="800"
            
            >Jeans</Text>
        </Box>
        <Box>
        <Image
             width={{base:"40%",md:"100%"}}
            src="https://i.ibb.co/27r7DSm/Fall-Site-Topper-5-LS.webp"
            alt="Falt-salt"
            />
            <Text 
            position="relative"
            top={["-40px","-80px","0px","-80px"]}
            color={["black","black","black","white"]}
            fontWeight="800"
            
            >Gateway And Resorts Fits</Text>
        </Box>
        <Box>
        <Image
             width={{base:"40%",md:"100%"}}
            src="https://i.ibb.co/FbY6r1h/Fall-Site-Topper-6-LS.webp"
            alt="Falt-salt"
            />
            <Text 
            position="relative"
            top={["-40px","-70px","0px","-80px"]}
            color={["black","black","black","white"]}
            fontWeight="800"
            
            >Tops</Text>
        </Box>
        </Grid>
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
        <option value="Joslin">Joslin</option>
        <option value="Letluv">Letluv</option>
        <option value="Maaji">Maaji</option>
        <option value="Hutch">Hutch</option>
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
                <AllCArtComp
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
margin="auto"
>
<Carousel  responsive={responsive}>
{arr2.map((item)=>(
  <Box w="70%" mt="90px">
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