import React from "react";
import { 
    Box, 
    HStack,
    Spacer,
    Flex,
    Link,
    Text,
    Center
} from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return(
        <HStack as='footer' bgColor='#00051D' h='70px'>
            <Box color='white'>
                <Box ml='164px' fontSize='24px'>
                    <Link>
                        About Us
                    </Link>
                </Box>
            </Box>
            <Box color='white' fontSize='24px'>
                <Box ml='54px'>
                    <Link>
                        Contact Us
                    </Link>
                </Box>
            </Box>
            <Spacer/>
            <Box w='600px'>
                <Flex>
                    <Box>
                        <Link>
                                <Flex>
                                    <Center>
                                        <FaFacebook size='24px' color="white"/>
                                        <Text ml='10px' fontSize='24px' color='white'>Facebook</Text>
                                    </Center>
                                </Flex>
                        </Link>
                    </Box>
                    <Box ml='54px'>
                        <Link>
                                <Flex>
                                    <Center>
                                        <FaTwitter size='24px' color="white"/>
                                        <Text ml='10px' fontSize='24px' color='white'>Twitter</Text>
                                    </Center>
                                </Flex>
                        </Link>
                    </Box>
                    <Box ml='54px'>
                        <Link>
                                <Flex>
                                    <Center>
                                        <FaGithub size='24px' color="white"/>
                                        <Text ml='10px' fontSize='24px' color='white'>Github</Text>
                                    </Center>
                                </Flex>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </HStack>
    )
}

export default Footer