import React from 'react';

import { Box,Button,Image,Stack,Text ,Link} from '@chakra-ui/react';
import ImageSlider from './singlecrousel';
import HomeSimple from './cardhomecrousel';
import { CardRate } from './Cardwithrate';
let firstcr=[
    {image:"//images.ctfassets.net/5de70he6op10/3Ai7bUZtZi5xY42vRa7nCY/600452ed34e8abb5b1265b516e90ac88/474338746-aliving_hpg_ls_01_1_-2x.jpg"},
      {image:"https://www.californiahomedesign.com/wp-content/uploads/2019/11/190624_Garde0869-2-1024x683.jpg"},
      {image:"https://media.designcafe.com/wp-content/uploads/2022/04/23155313/bed-decoration-enhances-the-rooms-overall-look.jpg"},
]


export const Home2nd=()=>{

    return(
        <>
        <Box width={"75%"}  margin="auto">
        <ImageSlider slides={firstcr}  />

        <Button
        position={"relative"}
        bg={"#E3DFFD"}
        top="-90px"
        >shop new arrivals</Button>
        <Button
        position={"relative"}
        bg={"#E3DFFD"}
        top="-40px"
        >discover the journal</Button>
        </Box>

       <Box
       width={"90%"}  margin="auto"
       >
        <Image
        src="//images.ctfassets.net/5de70he6op10/3vtv3Gvfa44vTd7fQDHwr9/147c9e91271d486d330930659291ef57/474338798-aliving_hpg_ls_2.jpg"

        />
            <Button
            bg={"#E3DFFD"}
        position={"relative"}
        top="-90px"
        >shop new arrivals</Button>
        <Button
        bg={"#E3DFFD"}
        position={"relative"}
        top="-40px"
        >discover the journal</Button>
       </Box>





       <Stack  justifyContent={"space-between"} width={"95%"} margin="auto" ml={"50px"} direction={["column","column","row","row"]}
       mt={"10px"}
       >
        <Box w="100%">
       <Image w="95%" src="https://i.ibb.co/rZdBWn6/468827138-aliving-hpg-ls-02-1.webp" alt="furniture 1"/>

       <Button
        bg={"#E3DFFD"}
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       >Shop Candels</Button>
       </Box>

       <Box  w="100%">
       <Image w="95%" src="https://i.ibb.co/r5nK3KR/468827146-aliving-hpg-ls-02-2.webp"  alt="furniture-home-demo2"/>
       <Button 
        bg={"#E3DFFD"}
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       >Shop Furnitures & Beds</Button>
       </Box>

           <Box w="100%">
       <Image w="95%" src="https://i.ibb.co/tcX13jL/468827151-aliving-hpg-ls-02-3.webp" alt="furniture 1"/>

       <Button
        bg={"#E3DFFD"}
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       >Shop Decors</Button>
       </Box>
       </Stack>










       <Stack  justifyContent={"space-between"} width={"95%"} margin="auto" ml={"50px"} direction={["column","column","row","row"]}
       mt={"10px"}
       >
        <Box w="100%">
       <Image w="95%" src="https://i.ibb.co/WVwxZLS/468827157-aliving-hpg-ls-03-1.webp" alt="furniture 1"/>

       <Button
        bg={"#E3DFFD"}
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       >Shop Furniture</Button>
       </Box>

       <Box  w="100%">
       <Image w="95%" src="https://i.ibb.co/7YZk6C2/471757834-aliving-hpg-ls-03-2.webp"  alt="furniture-home-demo2"/>
       <Button 
        bg={"#E3DFFD"}
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       >Shop Kitchen And Dining</Button>
       </Box>
       </Stack>




       <Stack  justifyContent={"space-between"} width={"95%"} margin="auto" ml={"50px"} direction={["column","column","row","row"]}
       mt={"10px"}
       >
        <Box w="100%">
       <Image w="95%" src="https://i.ibb.co/Ms9bw3z/462036088-aliving-hpg-ls-04-1.webp" alt="furniture 1"/>

       <Button
        bg={"#E3DFFD"}
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       >Shop the Lauren Mcintosh Collection</Button>
       </Box>

       <Box  w="100%">
       <Image w="95%" src="https://i.ibb.co/pLmdGbb/466660978-aliving-hpg-ls-04-3.webp"  alt="furniture-home-demo2"/>
       <Button 
        bg={"#E3DFFD"}
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       >Shop the Jerrel Guy Collection</Button>
       </Box>

           <Box w="100%">
       <Image w="95%" src="https://i.ibb.co/cyJdm7X/470539398-aliving-hpg-ls-04-3.webp" alt="furniture 1"/>

       <Button
        bg={"#E3DFFD"}
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       >Shop the Sarah Gordorn Collection</Button>
       </Box>
       </Stack>


       <Box w="93%" display={"flex"} justifyContent="space-between"
margin={"auto"} mb="50px" borderBottom="10px solid #E3DFFD"
>
  <Text> Top-Rated Picks</Text>
 <Link href=""
color={"blue.800"}
>Shop All</Link>

</Box>



<Stack
justifyContent={"space-between"} width={"93%"} margin="auto" ml={"50px"} direction={["column","column","row","row"]}
mt={"10px"} 
>
    <HomeSimple
    IMAGE={"https://i.ibb.co/7znJf84/474338877-ls-customerfave-a.webp"}
    />
    <HomeSimple
    IMAGE={"https://i.ibb.co/x37Ttwc/474338880-ls-customerfave-b.webp"}
    />
    <HomeSimple
    IMAGE={"https://i.ibb.co/nRbRXwV/471757873-aliving-hpg-ls-06-3.webp"}
    />
</Stack>


<Box
width={"100%"}
mt="20px"
p="30px"
display={"Flex"}
>
    <Box>
    <Image
    width={"100%"}
    src="https://images.ctfassets.net/5de70he6op10/7g7ZHaVt39w0CCLd3O0qke/403209ba2c4f5885fc9bfa13dbd3e462/HomeL1_Gateway_LS_08-1.jpg?w=856&q=80&fm=webp"
    />
    <Text>Let's make your decorating dreams come true — from the cozy comfort of your home.</Text>
    </Box>
    <Box>
     <Image
    width={"100%"}
    src="https://images.ctfassets.net/5de70he6op10/6qyHgZGFtupOWObJWdV3Wm/8804344079ae4623c4f9d9a45a3b0193/HomeL1_Gateway_LS_08-2.jpg?w=856&q=80&fm=webp"
    />
    <Text>We're here to help! Discover guides, resources, styling tips & more.</Text>
    </Box>
    <Box>
     <Image
    width={"100%"}
    src="https://images.ctfassets.net/5de70he6op10/k8kDADGs7wBTqS4n0kv06/71bcfaaba47b7dff1f6cd50fd5168724/HomeL1_Gateway_LS_08-3_copy.jpg?w=856&q=80&fm=webp"
    />
    <Text>Whether you're in California or Connecticut, there's a Design Center near you!</Text>
    </Box>
</Box>




<Box
width={"100%"}
mt="20px"
>
    <Image
    width={"100%"}
    src="https://images.ctfassets.net/5de70he6op10/tnwMf98WrLzJvHORas5fC/381eeaec38219b4659e03a30dd03bb9c/HomeL1_Gateway_LS_04-0.jpg?w=2640&q=80&fm=webp"
    alt="furniture-home-demo"
    />
</Box>



<Stack  justifyContent={"space-between"} width={"95%"} margin="auto" ml={"50px"} direction={["column","column","row","row"]}
       mt={"50px"}
       >
        <Box w="100%">
       <Image w="95%" src="https://i.ibb.co/VDYkVjW/468827193-aliving-hpg-ls-05-1.webp" alt="furniture 1"/>

       <Button
        bg={"#E3DFFD"}
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       >Shop terrain</Button>
       </Box>

       <Box  w="100%">
       <Image w="95%" src="https://i.ibb.co/whXkJWS/468827197-aliving-hpg-ls-05-2.webp"  alt="furniture-home-demo2"/>
       <Button 
        bg={"#E3DFFD"}
       position={"relative"}
       top="-60px"
       color={"gray.700"}
       opacity={"1"}
       >shop mirrors
       </Button>
       </Box>
       </Stack>

<Box
width={"100%"}

>
    <Image
    width={"100%"}
    src="https://images.ctfassets.net/5de70he6op10/66EQUlXgrBIE4akPH78UVn/bb9344cac779982cc1d61fd865ceadca/HomeL1_Gateway_LS_21.jpg?w=2640&q=80&fm=webp"
    alt="furniture-home-demo"
    />
</Box>

       <Stack 
       width={"95%"}
     margin="auto"
       direction={["column","column","row","row"]}>
       <CardRate
       image={'https://images.urbndata.com/is/image/Anthropologie/80236821_004_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349'}       
Text2={"Love - I have this in three colors. Why? Because you can throw it on, and the fit is seamless, it’s comfy it’s breezy."}
       Text1={"The Marais Chiffon "}
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