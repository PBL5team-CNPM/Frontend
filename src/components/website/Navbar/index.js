import React from "react";
import { Stack, Box, Center,  Wrap} from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import Header from "../Header";

const Navbar = () => {
    return(
        <Stack>
              <Header/>
            <Center bgColor='' h='30px'>
                    <Wrap fontSize='24px' fontFamily='Poppins' align='center'>
                        <Center w='196px'>
                            <Link to="">HOME</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="phim">MOVIE</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="theloai">CATEGORY</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="ve">MY TICKET</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="tuyendung">RECRUIT</Link>
                        </Center>
                        <Box fontSize='30px' fontWeight='bold'>
                            <Center>
                                |
                            </Center>
                        </Box>
                        <Center w='196px'>
                            <Link to="tintuc">NEWS</Link>
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