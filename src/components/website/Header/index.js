import React from "react";
import {Link} from 'react-router-dom'
import { 
    HStack, 
    Box, 
    Image, 
    Flex, 
    Center, 
    Spacer,
    Button,
} from '@chakra-ui/react'

import SearchBar from "../SearchBar";
import SwitchDarkMode from "../SwitchDarkMode";

const Header = () => {
    return(
        <HStack bgColor='#00051D' h='80px'>
            <Box w='500px' h='80px' ml='164px'>
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
                            <Box ml='11px' color='white' fontFamily='Poppins' fontSize='36px' fontWeight='bold.400'>
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
            <Box w='170px' color='white' fontFamily='Poppins' fontSize='20px'>
                <Flex>
                    <Box w='80px'>
                       <Link to="/login">
                          <Button  colorScheme='white' variant='link'>
                            Login
                         </Button>
                        </Link>
                    </Box>
                    <Box>
                       <Link to="/">
                        <Button colorScheme='white' variant='link'>
                            Logout
                       </Button>
                        </Link>
                    </Box>
                </Flex>
            </Box>
            <Box w='80px'>
                <SwitchDarkMode/>
            </Box>
        </HStack>
    );
}

export default Header