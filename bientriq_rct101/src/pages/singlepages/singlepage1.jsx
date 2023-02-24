import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,Spinner
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useParams } from "react-router-dom"
import { useEffect,useState } from 'react';
import axios from 'axios';

const SinglePage=({url,Id})=>{
 console.log(url,Id)
 let k=useParams()
 console.log(k)
let [data,setData]=useState([])
let [isLoading,setLoding]=useState(false)

useEffect(()=>{
  setLoding(true)
  axios.get(`http://localhost:8080/profile/${k.id}`).then((res)=>{setData(res.data)
  setLoding(false)
})
  .catch((err)=>console.log(err))
},[])

console.log(data)




  return (
    <>
{    isLoading?(        <>
            <Spinner
           
           ml="300px"
           thickness='4px'
           speed='1.65s'
           emptyColor='gray.200'
           color='blue.500'
           size='xl'
/>
             "Please Wait....."
            
</>):<Container 
  bg="#E1EEDD"
maxW={'8xl'}
m="30px"
>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              data.image
            }
            transition= "transform 0.3s"
            _hover={{transform:"scale(.9)"}}
            overflow="hidden"
            align={'center'}
            w={'80%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack  bg="#E5D1FA" spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {data.category}
            </Heading>
            <Text
              // color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              $-{data.price}
            </Text>
          </Box>

          <Stack
          padding={"20px"}
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                // borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                // color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                The Bientriq Fashion
              </Text>
              <Text fontSize={'lg'}>
               
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                // color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                // color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Rating:
                  </Text>{' '}
                  {Math.floor(Math.random()*100)}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dress:
                  </Text>{' '}
                  Cotton
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Dimensions:
                  </Text>{' '}
                  12" rise
                  2.5" inseam
                  12" leg opening 
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    DescripTion:
                  </Text>
                  The name "Maeve" references a purple flower, a Greek goddess, and a famously beautiful Irish warrior queen. In light of these inspirations, it's no surprise that their collection is structured yet delicate, a representation of beauty and strength at once. Each Maeve design is refined, flattering, and - best of all - exclusively ours.
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                 Pure Cotton , Comfort to be Felt. Enjoy your Wear
                </ListItem>
               
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            // bg={useColorModeValue('gray.900', 'gray.50')}
            // color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
}
    </>

  )
}

export default SinglePage