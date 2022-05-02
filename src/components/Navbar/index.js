import React from "react";
import {HStack, Stack, Box, Center, Flex, Spacer, Wrap, WrapItem} from '@chakra-ui/react'
import { Routes, Route, Link } from 'react-router-dom'
import TheLoai from "../../pages/TheLoai";
import Home from "../../pages/Home";
import Films from "../../pages/Films";

const Navbar = () => {
    return(
        <Stack>
            <Center bgColor='' h='70px'>
                    <Wrap fontSize='24px' fontFamily='Poppins' align='center'>
                        <Center w='196px'>
                            <Link to="/">TRANG CHỦ</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="/phim">PHIM</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="/theloai">THỂ LOẠI</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="/ve">VÉ CỦA TÔI</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="/tuyendung">TUYỂN DỤNG</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="/tintuc">TIN TỨC</Link>
                        </Center>
                    </Wrap>
            </Center>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="phim" element={<Films />} />
                <Route path="TheLoai" element={<TheLoai />} />
                <Route path="Ve" element={<TheLoai />} />
                <Route path="TuyenDung" element={<TheLoai />} />
                <Route path="tintuc" element={<TheLoai />} />
            </Routes>
        </Stack>
    )
}

export default Navbar