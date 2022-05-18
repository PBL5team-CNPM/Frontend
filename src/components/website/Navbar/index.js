import React from "react";
import { Stack, Box, Center,  Wrap, Flex, Icon} from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import Header from "../Header";
import {FaHome} from 'react-icons/fa';
import {BiMoviePlay, BiCategory, BiNews} from 'react-icons/bi'
import {TiTicket} from 'react-icons/ti'
import {RiUserSearchLine} from 'react-icons/ri'

const Navbar = () => {
    return(
        <Box>

          <Header/>
        <Stack bgColor=''>
            <Center bgColor='white' h='40px' pt='10px'>
                    <Wrap fontSize='24px' fontFamily='Poppins' align='center'>
                        <Center w='196px'>
                            <Link to="">  
                            <Flex>
                                <Icon as={FaHome} mr='5px' mt='4px'/>
                                    TRANG CHỦ
                                </Flex></Link>
                        </Center>
                        <Box bgColor='black' w='2px' h='50px' ></Box>
                        <Center w='196px'>
                            <Link to="phim">
                               <Flex>
                                    <Icon as={BiMoviePlay} mr='5px' mt='4px'/>
                                    PHIM
                                </Flex>
                            </Link>
                        </Center>
                        <Box bgColor='black' w='2px' h='50px' ></Box>
                        <Center w='196px'>
                            <Link to="theloai">
                                <Flex>
                                    <Icon as={BiCategory} mr='5px' mt='4px'/>
                                    THỂ LOẠI
                                </Flex>
                            </Link>
                        </Center>
                        <Box bgColor='black' w='2px' h='50px' ></Box>
                        <Center w='196px'>
                            <Link to="ve">
                                <Flex>
                                    <Icon as={TiTicket} mr='5px' mt='4px'/>
                                    VÉ CỦA TÔI
                                </Flex>
                                </Link>
                        </Center>
                        <Box bgColor='black' w='2px' h='50px' ></Box>
                        <Center w='196px'>
                            <Link to="tuyendung">
                               <Flex>
                                    <Icon as={RiUserSearchLine} mr='5px' mt='4px'/>
                                    TUYỂN DỤNG
                                </Flex>
                            </Link>
                        </Center>
                        <Box bgColor='black' w='2px' h='50px' ></Box>
                        <Center w='196px'>
                            <Link to="tintuc">
                            <Flex>
                                <Icon as={BiNews} mr='5px' mt='4px' />
                                TIN MỚI
                            </Flex>
                            </Link>
                        </Center>
                    </Wrap>
            </Center>
            <Box h='full'>
                <Outlet />
            </Box>
        </Stack>
        </Box>
    )
}

export default Navbar