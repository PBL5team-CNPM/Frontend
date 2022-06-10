import { CheckIcon, InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Divider, Flex, Heading, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
    return(
        <Box bgColor="#00051D" minH="100vh" w="100%">
            <HStack bgColor='#00051D' h='80px' padding='10px' pr='50px' mb="150px">
                <Box w='500px' h='75px' ml='50px'>
                    <Link to='/home'>
                    <Flex>  
                        <Box>
                            <Image
                                borderRadius='full'
                                boxSize='80px'
                                src={require('../../../imgs/Logo.png')}
                                alt='Logo'
                            />
                        </Box>
                        <Center h ='75px'>
                            <Box ml='11px' color='white' fontFamily='Poppins' fontSize='36px' fontWeight='bold.400'>
                                CINEMA PRO MAX
                            </Box>
                        </Center>
                    </Flex>
                    </Link>
                </Box>
                <Spacer/>
            <Link to="/home">
                <Button mr='20px'  color='white' variant='link'>
                    Trang chủ
                </Button>
            </Link>
                <Button color='white' variant='link' 
                //   onClick={logout}
                >
                    Đăng xuất
                </Button>
            </HStack>
            <Box w="40%" h="60vh" p="20px" bgColor="white" margin="auto">
            <Flex alignItems="center">
                <Image
                    borderRadius='full'
                    boxSize='50px'
                    src={require('../../../imgs/BillLogo.png')}
                    alt='Logo'
                ></Image>
                <Box>
                    <Heading ml="10px" fontSize="30px" bgGradient='linear(to-r, #7928CA, #FF0080)'
                                bgClip='text'>CPM</Heading>
                    <Text color="gray" fontSize="12px">CINEMA PRO MAX</Text>
                </Box>
                <Spacer/>
                <Heading mr="5px" fontSize="24px">SUCESS</Heading>
                <CheckIcon/>
            </Flex>
            <Divider/>
            <Box display="flex" justifyContent="center" h="80%" alignItems="center">
                <Box>
                    <Heading color="green.400" display="flex" justifyContent="center" alignItems="center" mt="20px">
                            SUCESS
                    </Heading>
                    <Text display="flex" justifyContent="center" alignItems="center">
                            Người mua: {JSON.parse(localStorage.getItem('user-info')).realname}
                    </Text>
                    <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
                        <Box border="4px" borderColor="green.400" borderRadius="50%" h="200px" w="200px" display="flex" justifyContent="center" alignItems="center">
                            <CheckIcon color="green.400" boxSize="130px" />
                        </Box>
                    </Box>
                    <Heading color="gray" mt="20px">
                        THANH TOÁN THÀNH CÔNG
                    </Heading>
                </Box>
            </Box>
            <Divider/>
            <Box  display="flex" justifyContent="center" alignItems="center">
                <Link to="/home">
                    <Button borderRadius="0px" mt="10px" colorScheme='green'>
                        Trang chủ
                    </Button>
                </Link>
            </Box>
            </Box>
        </Box>
    )
}

export default Success