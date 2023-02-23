import { Card, CardHeader, CardBody, CardFooter,Image,Heading

,Text,Divider,ButtonGroup,Button,Stack,Link} from '@chakra-ui/react'



export const CardRate=({image,Text1,Text2})=>{

    return(
        <>
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{Text1}</Heading>
      
      <Text>
       {Text2}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter
  position={"relative"}
  
  top="-10"
  >
    <Button
    bg="#EA8FEA"
    >
    <Link href="">Show With US</Link>
    </Button>

  </CardFooter>
</Card>
        </>
    )
}

