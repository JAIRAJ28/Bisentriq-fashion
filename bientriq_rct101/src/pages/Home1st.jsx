import { Box,Image,HStack,Stack,Button,
    Card, CardHeader, CardBody, CardFooter,Text
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from "./csspages/home1.module.css"
import { useEffect, useRef,useState } from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductSimple from "./CardSimple"
import { CardRate } from "./Cardwithrate";
import { useNavigate } from "react-router-dom";
export const Home1st=()=>{
    const [windowSize, setWindowSize] = useState(getWindowSize());
    let nav=useNavigate()
    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }
      console.log(windowSize)


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


    return(
        <>
        <Box>
        <Stack w={["50%","50%","93%"]}  margin="auto"  direction={["column","column","row","row"]} mt="2%"  justifyContent={"space-evenly"}  spacing={3}>
       
         <Image 
         onClick={()=>{
          nav("/fashion")
         }}
         className={styles.upImage} src="https://images.ctfassets.net/5de70he6op10/2nrwWxJ7TQjvhycNGHksLK/51645a9e392800577d6200a92a1edc88/473929279-ls_m0_banner_g.jpg?w=630&q=80&fm=webp" alt="" />
  
      
         <Image 
          onClick={()=>{
            nav("/shoes")
           }}
         className={styles.upImage} src="https://i.ibb.co/Y27qJNC/473929275-ls-m0-banner-f.webp" alt=""/>

       
         <Image 
           onClick={()=>{
            nav("/furniture")
           }}
         className={styles.upImage} src="https://i.ibb.co/Zc1CM7h/3rd.webp" alt=""/>

         <Image 
         onClick={()=>{
          nav("/newAll")
         }}
         className={styles.upImage} src="https://i.ibb.co/p0LMwgY/473929265-ls-m0-banner-b.webp" alt="473929265-ls-m0-banner-b"/>
        
         </Stack>
        </Box>


        {/* Big Div Mail Page Banner */}

        <Box m="auto"  mt="40px">
        {windowSize.innerWidth<="720"?(<> <Image 
           
            w="92%"
            m="auto"
            ml="30px"
            // src={process.env.PUBLIC_URL + "./Home1images/mainobne.jpg"}
            src="//images.ctfassets.net/5de70he6op10/13wTj5MskhZJ8owxvQ6pXs/4b46c34a9bf5ce0994b54f72efa1b3da/473933543-ss_m1.jpg"
            alt="Mail banner"
            />
        <Button
         position={"relative"}
         top="-90px"
         color={"gray.700"}
         padding={"30px"}
         
         left={"-80px"}
         >Show More</Button>
         </> ): (<><Image 
               
               onClick={()=>{
                nav("/fashion")
               }}

            w="92%"
            m="auto"
            // src={process.env.PUBLIC_URL + "./Home1images/mainobne.jpg"}
            src="//images.ctfassets.net/5de70he6op10/3eri4S7CUYNA223W694QUo/890cffce3e1cc21308f3051be0a76baa/473929293-ls_m1.jpg"
            alt="Mail banner"
            />
             <Button
         position={"relative"}
         top="-70px"
         padding={"30px"}
         color={"gray.700"}
         left={""}
         >Show More</Button>
            </>)}
        </Box>

        {/* Swim Wear Card>>>>>>>>>>>>>>>>>>>***********************************>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
    <> {windowSize.innerWidth<=720?(<>
        <ProductSimple
IMAGE={'https://i.ibb.co/64n2yJd/bikini-1.webp'}

/>
<ProductSimple
IMAGE={'https://i.ibb.co/pr7mRcV/bikini-2.webp'}
/>
<ProductSimple
IMAGE={'https://i.ibb.co/pdsPrg4/bikini3.webp'}
/>
    </>):(
    <HStack justifyContent={"space-evenly"}>
        <ProductSimple
IMAGE={'https://i.ibb.co/64n2yJd/bikini-1.webp'}
/>
<ProductSimple
IMAGE={'https://i.ibb.co/pr7mRcV/bikini-2.webp'}
/>
<ProductSimple
IMAGE={'https://i.ibb.co/pdsPrg4/bikini3.webp'}
/>
</HStack>
)}</>
{/* Swim Wear Card>>>>>>>>>>>>>>>>>>>***********************************>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

{/* Furniture Part>>>>>>>>>>>>>>>>>>>>>>>????????????????????????????*********************??????????????? */}
       <Stack  justifyContent={"space-between"} width={"95%"} margin="auto" ml={"50px"} direction={["column","column","row","row"]}
       mt={"60px"}
       >
        <Box w="100%">
       <Image w="95%" 

       src="https://i.ibb.co/wScGkwS/furniture-home-demo.webp" alt="furniture 1"/>

       <Button
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       onClick={()=>{
        nav("/fashion")
       }}

       >Shop Kitchen And Dining</Button>
       </Box>

       <Box  w="100%">
       <Image w="95%" src="https://i.ibb.co/vm4Vzh9/furniture-home-demo2.webp" alt="furniture-home-demo2"/>
       <Button 
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       onClick={()=>{
        nav("/fashion")
       }}

       >Shop Kitchen And Dining</Button>
       </Box>
       </Stack>
{/* Furniture Part>>>>>>>>>>>>>>>>>>>>>>>????????????????????????????*********************??????????????? */}

<Stack direction={["column","column","row","row"]} width="93%" margin={"auto"} 
justifyContent="space-around"
>
  <Box>
  <Image 
   src="https://i.ibb.co/WchLjWS/3rddown.webp" alt="3rddown"
  />
  <Button 
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       onClick={()=>{
        nav("/fashion")
       }}

       >shop spring entertaining essentials
       </Button>
  </Box>
  <Box>
  <Image width={"100%"}
   src="https://i.ibb.co/rtF4Sm0/3rdthdown-second.webp" alt="3rdthdown-second"
  />
  <Button 
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       onClick={()=>{
        nav("/fashion")
       }}

       >shop tops
       </Button>
  </Box>
 <Box>
  <Image width={"100%"}
    src="https://i.ibb.co/hFpnNCR/3rd3rddown.webp" alt="3rd3rddown"
  />
  <Button 
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       onClick={()=>{
        nav("/newAll")
       }}

       >shop dresses</Button>
  </Box>
</Stack>

 <Box mt="10px"
 width={"93%"}
 margin="auto"
 >
  <Image
  width="100%"
  src="https://images.ctfassets.net/5de70he6op10/BYqngT4RGr1qC07s5Stvm/45ac7c1b8ee7fc4ba75a71c5bae96223/473929345-ls_m5_bhldn.jpg?w=2694&q=80&fm=webp" alt="3rdlast-big-div"
  />
    <Button 
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       onClick={()=>{
        nav("/furniture")
       }}
       >shop weddings</Button>
 </Box>

<Box w="93%" display={"flex"} justifyContent="space-between"
margin={"auto"}
>
  <Text> Top-Rated Picks</Text>
 <Link to=""
style={{color:"blue.300"}}
>Shop All</Link>

</Box>

<Stack 
width={"95%"}
margin="auto"
direction={["column","column","row","row"]}>
<CardRate
image={'https://i.ibb.co/7ntyLXH/473929238-ls-customerfave-a.webp'}
Text2={"Love - I have this in three colors. Why? Because you can throw it on, and the fit is seamless, it’s comfy it’s breezy."}
Text1={"The Marais Chiffon Maxi Dress"}
/>
<CardRate
image={'https://i.ibb.co/xS5grX4/473929242-ls-customerfave-b.webp'}
Text2={"Super cute, perfect little crossbody. Holds your phone, money, lipstick and keys."}
Text1={"The Super Mini Slouchy Bag"}
/>
<CardRate
image={'https://i.ibb.co/WBGGxGg/473929246-ls-customerfave-c.webp'}
Text2={"Oversized in the best way...it's a perfect cotton shirt."}
Text1={"The Bennet Buttondown Shirt"}
/>
<CardRate
image={'https://i.ibb.co/ySVHSH2/473929254-ls-customerfave-d.webp'}
Text2={"I LOVE THESE PANTS! They feel good on, whether I'm standing, sitting, or walking. Overall 10/10 would recommend!"}
Text1={"The Colette Wide-Leg Pants"}
/>
</Stack>


<Box
borderTop={"9px solid #F7C8E0"}
borderBottom={"9px solid #F7C8E0"}
width={"93%"}
margin="auto"
>
<Carousel  responsive={responsive}>
{arr.map((item)=>(
  <Box w="80%" mt="40px">
    <Image src={item.imgSrc} 
    alt="images"
    />
    <Text>{item.des}</Text>
    
  </Box>
))}
</Carousel>
</Box>


<Box
borderTop={"9px solid #F7C8E0"}
borderBottom={"9px solid #F7C8E0"}
width={"93%"}
margin="auto"
>
<Carousel  responsive={responsive}>
{arr2.map((item)=>(
  <Box w="70%" mt="40px">
    <Image src={item.imgSrc} 
    alt="images"
    />
    <Text>{item.des}</Text>
    
  </Box>
))}
</Carousel>
</Box>



<Stack 
width={"95%"}
margin="auto"
direction={["column","column","row","row"]}>
<CardRate
image={"https://i.ibb.co/qgWtXY5/MTE-1.webp"}
Text2={"Love - I have this in three colors. Why? Because you can throw it on, and the fit is seamless, it’s comfy it’s breezy."}
Text1={"The Best Comfortable JEANS"}
/>
<CardRate
image={'https://i.ibb.co/9VgktPr/469633343-020623-hpg-mte-2.webp'}
Text2={"From fresh-faced skincare formulas to floral-inflected fragrances to now-trending nails, we have everything you need"}
Text1={"2023 | routine refresh"}
/>
<CardRate
image={'https://i.ibb.co/d7D8tYm/473929355-mte-3.webp'}
Text2={"Blurring the lines of indoors and out, our Spring 2023 collection fits naturally into the 1953 residence of landscape-architect James Rose."}
Text1={"Spring 2023: Pattern + Texture"}
/>
<CardRate
image={'https://i.ibb.co/WBGGxGg/473929246-ls-customerfave-c.webp'}
Text2={"Blurring the lines of indoors and out, our Spring 2023 collection fits naturally into the 1953 residence of landscape-architect James Rose."}
Text1={"Spring 2023: Pattern + Texture"}
/>

</Stack>


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


