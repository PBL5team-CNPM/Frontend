import React from "react";
import {Link} from 'react-router-dom'
import { 
    HStack, 
    Box, 
    Image, 
    Flex, 
    Center, 
    Button,
} from '@chakra-ui/react'

import SearchBar from "../SearchBar";


const Header = () => {
    return(
        <HStack bgColor='#00051D' h='80px' spacing='6'>
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
                            <Box ml='11px' color='white' fontFamily='Poppins' fontSize='36px' fontWeight='bold.400'>
                                CINEMA PRO MAX
                            </Box>
                        </Center>
                        
                    </Flex>
                </Link>
            </Box>
          
            <Box color='white' fontFamily='Poppins' fontSize='36px'>
                <SearchBar/>    
            </Box>

            <Box w='170px' color='white' fontFamily='Poppins' fontSize='20px' >
                <Flex ml='60px'>
                    <Box w='80px' mr='60px'>
                       <Link to="/login">
                          <Button  colorScheme='white' variant='link'>
                            Đăng nhập
                         </Button>
                        </Link>
                    </Box>
                    <Box >
                       <Link to="/">
                        <Button colorScheme='white' variant='link'>
                            Đăng xuất
                       </Button>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </HStack>
    );
}

export default Header