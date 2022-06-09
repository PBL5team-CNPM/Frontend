import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import { 
    HStack, 
    Box, 
    Image, 
    Flex, 
    Center, 
    Button,
    Spacer,
    IconButton,
    MenuButton,
    Menu,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import {FiLogOut} from 'react-icons/fi'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {AiOutlineMenu} from 'react-icons/ai'



const Header = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate("/")
    }
    return(
        <HStack bgColor='#00051D' h='80px' spacing='6' position={'fixed'} top='0' left='0'
        right='0' zIndex={'100'} pr='20px'>
            <Box w='500px' h='80px' ml='50px'>
                <Link to="/" >
                    <Flex>  
                        <Box>
                            <Image
                                borderRadius='full'
                                boxSize='80px'
                                src={require('../../../imgs/Logo.png')}
                                alt='Logo'
                            />
                        </Box>
                        <Center h ='80px'>
                            <Box ml='11px' color='white' fontFamily='Poppins' fontSize='30px' fontWeight='bold.400'>
                                CINEMA PRO MAX
                            </Box>
                        </Center>
                        
                    </Flex>
                </Link>
            </Box>
            <Spacer/>
            <Box mr='50px' color='white' fontFamily='Poppins' fontSize='20px' >
                {
                    localStorage.getItem('user-info')?
                    <Menu>
                        <MenuButton
                            bgColor='#00051D'
                            _hover={{bgColor:'black'}}
                            as={IconButton}
                            outlineColor='none'
                            icon={<AiOutlineMenu/>}
                        />
                        <MenuList color={'black'}>
                           <Link to="/profile/viewprofile">
                            <MenuItem>
                            <Image
                                boxSize='2rem'
                                borderRadius='full'
                                objectFit='cover'
                                src={(JSON.parse(localStorage.getItem('user-info')).avatar)?
                                ("http://localhost:8000/"+JSON.parse(localStorage.getItem("user-info")).avatar):
                                require('../../../imgs/default_avatar.png')}
                                mr='12px'
                            />
                            <span>
                            {JSON.parse(localStorage.getItem('user-info')).name}</span>
                            </MenuItem></Link>
                            {(JSON.parse(localStorage.getItem('user-info')).action.includes("DASHBOARD"))?
                             <Link to="/admin/revenue">
                                   <MenuItem icon={<MdOutlineSpaceDashboard/>}>
                                    Dashboard
                                    </MenuItem>
                             </Link>
                             :null}
                            <MenuItem icon={<FiLogOut/>} onClick={logout}>
                            Đăng xuất
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    
                    // <Flex mr='60px'>
                    //     <Box w='80px' mr='60px'>
                    //     <Link to="/profile/viewprofile">
                    //         <Button  colorScheme='white' variant='link'>
                    //             {JSON.parse(localStorage.getItem('user-info')).name}
                    //         </Button>
                    //         </Link>
                    //     </Box>
                    //     { (JSON.parse(localStorage.getItem('user-info')).action.includes("DASHBOARD"))?
                    //     <Box w='80px' mr='60px'>
                    //         <Link to="/admin/film">
                    //             <Button colorScheme='white' variant='link'>
                    //                 DashBoard
                    //             </Button>
                    //         </Link>
                    //     </Box>:null
                    //     } 
                    //     <Box>
                    //         <Button colorScheme='white' variant='link'
                    //             onClick={logout}
                    //         >
                    //             Đăng xuất
                    //         </Button>
                    //     </Box>
                    // </Flex>
                    :
                    <Flex mr='60px'>
                        <Box w='80px' mr='60px'>
                        <Link to="/login">
                            <Button  colorScheme='white' variant='link'>
                                Đăng nhập
                            </Button>
                            </Link>
                        </Box>
                        <Box >
                        <Link to="/signup">
                            <Button colorScheme='white' variant='link'>
                                Đăng ký
                        </Button>
                            </Link>
                        </Box>
                    </Flex>
                }
            </Box>
        </HStack>
    );
}

export default Header