import {
  Box,
    Flex,
    Text,
    IconButton,
    Button,
    Image,
    Stack,
    Collapse,
    Icon,
    
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import "./navbar.css"
  import { HiOutlineShoppingBag } from "react-icons/hi2";
  import { TbUserOff } from "react-icons/tb"
  // import {Link} from "react-router-dom"
  import { useContext } from "react"
import { Authcontext } from '../Authcontext/contextApi';
import { Link, useNavigate } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";

  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const {toggleAuth,isAuth,handelSearch,isSearched}=useContext(Authcontext)
 const nav=useNavigate()

console.log(isSearched)

    return (
      <>
      <Box position={"sticky"} left="0" top="0" width={"100%"} zIndex="5">
        <Box  bg="#E1FFEE" display={"flex"} justifyContent={'space-between'} >
        <Box display={"flex"}>
             <Link to="/" display={"flex"}>
             <Image 
              borderBottom={"4px solid #BAD7E9"} ml={"30px"}
             mt={"20px"}  w="250px" h="50px" overflow={"hidden"} src="https://i.ibb.co/z6fqy86/Screenshot-20230221-191152.png" alt="" />
             </Link>
             <hr />
             <Link to="/home2nd">
            <Button br={"1px solid gray"} p="30px" ml="20px" mt="10px">bientriq <span style={{fontStyle:"italic"}}> Living</span> Fashions
            </Button></Link>
        </Box>
        <Box display={"flex"} mr="1.5em">
            <Input mt={"20px"} border={"1px solid gray"} mr="1.5em" type="text" placeholder='search bientriq'
            
            onChange={((e)=>{handelSearch(e.target.value)})}
            
            
            />
          {  isAuth?<HiOutlineShoppingBag cursor={"pointer"}  color="#FFA3FD" margintop={"40px"} size={"80px"}
          onClick={()=>{
            nav('/addtocart')
          }}

          />:<TbUserOff
           margintop={"40px"} size={"40px"} color="#F55050"
           onClick={()=>{
            alert("Please Login")
            nav('/')
           }}
          />}
           {isAuth?<BiLogOut 
            onClick={()=>{
              alert("Logged Out")
              toggleAuth()
              nav('/')
             }}
           
           size={"30px"}/>:""}
        </Box>
        

        </Box>
        <hr />
      <Box
      
      >
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              />
          </Flex>
        
        
        
        
        
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
     <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  

        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
        <MobileNav />
        </Collapse>
      </Box>
      <hr />
      </Box>
      </>
    );
  }
  
  
  
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  to={navItem.to ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                      ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, to, subLabel }: NavItem) => {
    return (
      <Link
      to={to}
      role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
      bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, to }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          to={to ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
              />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            display="flex"
            align={'start'}>
            {children &&
              children.map((child) => (
                <>
                <Link key={child.label} py={2} to={child.to}>
                  {child.label}
                </Link>
                </>
              ))}
          </Stack>
  
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    to?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'New!',
      h1:"Shop by Category",
      to:"/newAll",
      children: [
        {
          label: 'Accessories',
            to: '/newAll',
            
          },
          {
            label: 'Beauty & Wellness',
            to: '/',
        },
        {
          label: 'Clothing',
          to: '/fashion',
        },
          {
            label: 'Dresses',
            to: '/fashion',
          },
          {
            label: 'Home & Furniture', 
            to: '/furniture',
          }
        
        ],
        Image:"https://ibb.co/w0L9s27"
      },
    {
      label: 'Dresses',
      to:"/fashion",
      children: [
        {
          label: 'Accessories',
            to: '/newAll',
            
          },
          {
            label: 'Beauty & Wellness',
            to: '/',
        },
        {
          label: 'Clothing',
          to: '/fashion',
        },
          {
            label: 'Dresses',
            to: '/newAll',
          },
          {
            label: 'Home & Furniture', 
            to: '#',
          },
          {
            label: 'shoes',
            to: '/shoes',
          },
        ],
    },
    {
      label: 'Clothing',
      to: '/fashion',
    },
    {
      label: 'Flip-Flops/Sandals',
      to: '/shoes',
    },
    {
        label: 'Accessories',
        to: '/shoes',
      },
      {
        label: 'Weddings',
        to: '#',
      },
      {
        label: 'Home & Furniture',
        to: '/furniture',
      },
      {
        label: 'Beauty & Wellness',
        to: '/furniture',
      },
      {
        label: 'Garden & Outdoor',
        to: '#',
      },
      {
        label: 'Gift',
        to: '#',
      },
      {
        label: 'Sales',
        to: '/shoes',
      },
  ];






