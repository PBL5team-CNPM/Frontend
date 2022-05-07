import React from "react";
import {HStack, Stack, Box, Center, Flex, Spacer, Wrap, WrapItem, VStack} from '@chakra-ui/react'
import { Routes, Route, Link } from 'react-router-dom'
import TheLoai from "../../pages/TheLoai";
import Home from "../../pages/Home";
import FilmAll from "../../pages/FilmAll";
import FilmHome from "../../pages/FilmHome";
import Showtimes from "../Showtimes";

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
            <Box h='full'>
                <Routes>
                    <Route path="/" element={<FilmHome />} />
                    <Route path="phim" element={<FilmAll />} />
                    <Route path="TheLoai" element={<TheLoai />} />
                    <Route path="Ve" element={<Showtimes />} />
                    <Route path="TuyenDung" element={<TheLoai />} />
                    <Route path="tintuc" element={<TheLoai />} />
                </Routes>
            </Box>
        </Stack>
    )
}

export default Navbar