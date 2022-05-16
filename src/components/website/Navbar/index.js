import React from "react";
import { Stack, Box, Center,  Wrap} from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import Header from "../Header";

const Navbar = () => {
    return(
        <Box>

          <Header/>
        <Stack bgColor=''>
            <Center bgColor='white' h='50px'>
                    <Wrap fontSize='24px' fontFamily='Poppins' align='center'>
                        <Center w='196px'>
                            <Link to="">TRANG CHỦ</Link>
                        </Center>
                        <Box bgColor='black' w='2px' h='70px' ></Box>
                        <Center w='196px'>
                            <Link to="phim">PHIM</Link>
                        </Center>
                        <Box bgColor='black' w='2px' h='70px' ></Box>
                        <Center w='196px'>
                            <Link to="theloai">THỂ LOẠI</Link>
                        </Center>
                        <Box bgColor='black' w='2px' h='70px' ></Box>
                        <Center w='196px'>
                            <Link to="ve">VÉ CỦA TÔI</Link>
                        </Center>
                        <Box bgColor='black' w='2px' h='70px' ></Box>
                        <Center w='196px'>
                            <Link to="tuyendung">TUYỂN DỤNG</Link>
                        </Center>
                        <Box bgColor='black' w='2px' h='70px' ></Box>
                        <Center w='196px'>
                            <Link to="tintuc">TIN MỚI</Link>
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