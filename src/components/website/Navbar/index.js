import React, { useState } from "react";
import { Stack, Box, Center, Flex, Icon} from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import Header from "../Header";
import {FaHome} from 'react-icons/fa';
import {BiMoviePlay, BiCategory, BiNews} from 'react-icons/bi'
import {TiTicket} from 'react-icons/ti'
import {RiUserSearchLine} from 'react-icons/ri'

const Navbar = () => {
    const [home,setHome]=useState({BColor:"",TColor:""})
    const [movie,setMovie]=useState({BColor:"",TColor:""})
    const [category,setCategory]=useState({BColor:"",TColor:""})
    const [ticket,setTicket]=useState({BColor:"",TColor:""})
    const [recuit,setRecuit]=useState({BColor:"",TColor:""})
    const [news,setNews]=useState({BColor:"",TColor:""})
    return(
        <Box>

          <Header/>
        <Stack bgColor=''>
            <Center bgColor='white' h='40px' pt='10px' fontSize='24px' >
                       
                     <Link to="">
                        <Center w='196px' h='50px' bgColor={home.BColor} color={home.TColor}
                        onMouseLeave={() => {setHome({BColor:"white",TColor:"#020e1a"})}}
                        onMouseEnter ={() => {setHome({BColor:"#020e1a",TColor:"white"})}}>
                            
                            <Flex>
                                <Icon  as={FaHome} mr='5px' mt='4px'/>
                                    Trang Chủ
                                </Flex>
                        </Center></Link>
                       
                        <Link to="theloai">
                        <Center w='196px' h='50px' bgColor={movie.BColor} color={movie.TColor}
                        onMouseLeave={() => {setMovie({BColor:"white",TColor:"#020e1a"})}}
                        onMouseEnter ={() => {setMovie({BColor:"#020e1a",TColor:"white"})}}>
                           
                               <Flex>
                                    <Icon as={BiMoviePlay} mr='5px' mt='4px'/>
                                    Phim
                                </Flex>
                           
                        </Center> </Link>
                        
                        <Link to="theloai">
                        <Center w='196px' h='50px' bgColor={category.BColor} color={category.TColor}
                        onMouseLeave={() => {setCategory({BColor:"white",TColor:"#020e1a"})}}
                        onMouseEnter ={() => {setCategory({BColor:"#020e1a",TColor:"white"})}}>
                           
                                <Flex>
                                    <Icon as={BiCategory} mr='5px' mt='4px'/>
                                    Thể Loại
                                </Flex>
                           
                        </Center> </Link>
                        
                        <Link to="ve">
                        <Center w='196px' h='50px' bgColor={ticket.BColor} color={ticket.TColor}
                        onMouseLeave={() => {setTicket({BColor:"white",TColor:"#020e1a"})}}
                        onMouseEnter ={() => {setTicket({BColor:"#020e1a",TColor:"white"})}}>
                            
                                <Flex>
                                    <Icon as={TiTicket} mr='5px' mt='4px'/>
                                    Vé Của Tôi
                                </Flex>
                                
                        </Center></Link>
                        
                        <Link to="tuyendung">
                        <Center w='196px' h='50px' bgColor={recuit.BColor} color={recuit.TColor}
                        onMouseLeave={() => {setRecuit({BColor:"white",TColor:"#020e1a"})}}
                        onMouseEnter ={() => {setRecuit({BColor:"#020e1a",TColor:"white"})}}>
                            
                               <Flex>
                                    <Icon as={RiUserSearchLine} mr='5px' mt='4px'/>
                                    Tuyển Dụng
                                </Flex>
                           
                        </Center> </Link>
                        
                        <Link to="tintuc">
                        <Center w='196px' h='50px' bgColor={news.BColor} color={news.TColor}
                        onMouseLeave={() => {setNews({BColor:"white",TColor:"#020e1a"})}}
                        onMouseEnter ={() => {setNews({BColor:"#020e1a",TColor:"white"})}}>
                            
                            <Flex>
                                <Icon as={BiNews} mr='5px' mt='4px' />
                                Tin Mới
                            </Flex>
                            
                        </Center></Link>
                    
            </Center>
            <Box h='full'>
                <Outlet />
            </Box>
        </Stack>
        </Box>
    )
}

export default Navbar