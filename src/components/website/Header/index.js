import React from "react";
import {Link} from 'react-router-dom'
import { 
    HStack, 
    Box, 
    Image, 
    Flex, 
    Center, 
    Button,
    Spacer,
} from '@chakra-ui/react'

import SearchBar from "../SearchBar";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate("/")
    }
    return(
        <HStack bgColor='#00051D' h='80px' spacing='6' position={'fixed'} top='0' left='0'
        right='0' zIndex={'100'}>
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
            <Box color='white' fontFamily='Poppins' fontSize='36px'>
                <SearchBar/>    
            </Box>
            <Spacer/>
            <Box mr='50px' color='white' fontFamily='Poppins' fontSize='20px' >
                {
                    localStorage.getItem('user-info')?
                    <Flex mr='60px'>
                        <Box w='80px' mr='60px'>
                        <Link to="/profile/viewprofile">
                            <Button  colorScheme='white' variant='link'>
                                {JSON.parse(localStorage.getItem('user-info')).name}
                            </Button>
                            </Link>
                        </Box>
                        { (JSON.parse(localStorage.getItem('user-info')).action.includes("DASHBOARD"))?
                        <Box w='80px' mr='60px'>
                            <Link to="/admin/film">
                                <Button colorScheme='white' variant='link'
                                >
                                    DashBoard
                                </Button>
                            </Link>
                        </Box>:null
                        } 
                        <Box>
                            <Button colorScheme='white' variant='link'
                                onClick={logout}
                            >
                                Đăng xuất
                            </Button>
                        </Box>
                    </Flex>
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