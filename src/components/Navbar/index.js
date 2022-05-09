import React from "react";
import { Stack, Box, Center,  Wrap} from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import Header from "../Header";

const Navbar = () => {
    return(
        <Stack>
              <Header/>
            <Center bgColor='' h='70px'>
                    <Wrap fontSize='24px' fontFamily='Poppins' align='center'>
                        <Center w='196px'>
                            <Link to="">TRANG CHỦ</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="phim">PHIM</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="theloai">THỂ LOẠI</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="ve">VÉ CỦA TÔI</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="tuyendung">TUYỂN DỤNG</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="tintuc">TIN TỨC</Link>
                        </Center>
                    </Wrap>
            </Center>
            <Box h='full'>
                <Outlet />
            </Box>
        </Stack>
    )
}

export default Navbar