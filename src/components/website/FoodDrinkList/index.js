import React, { useEffect, useState } from "react";
import {
    Stack, 
    Box,
    Heading,
    Divider,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
 
    SimpleGrid,
    Center,
    Image,
    Spacer,
    Button,
} from "@chakra-ui/react"

import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link, useLocation } from 'react-router-dom';
import moment from "moment";
import axios from "axios";

const FoodDrinkList = () => {
    const location=useLocation()
    const [locationState, setLocationState]=useState({data:[

    ], ghe: []})
    React.useEffect(() =>{
        if(location.state){
            let _state=location.state
            setLocationState(_state)
            console.log(_state)
            console.log(_state.data.data.phim_id)
        }
    }, [])

    const handleClick = () => {
        const data = {
            "user_id": JSON.parse(localStorage.getItem('user-info')).id,
            "suatchieu_id": location.state.data.data.id,
            "ghe_id": location.state.ghe,
            "gia_ve": 100000
        }
        console.log(data)
        axios.post('http://localhost:8000/api/addhoadon', data
        ).then(res => {
            console.log(res.data)
        }).catch(error=>{
                console.log(error)
        })
    }
    
    return(
        <Box>
        <Stack minH="640px" color='white' bgColor='#1F1D36' px={164} py={18} fontFamily='Poppins'>
            <Box>
                <Heading fontSize='32px'>Thông tin phim</Heading>
                <Divider size='' mb='24px'/>
                <Breadcrumb spacing='8px' separator={<Heading><ChevronRightIcon /></Heading>}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'><Heading fontSize='32px'>{locationState.tenphim}</Heading></BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'><Heading fontSize='32px'>MUA VÉ</Heading></BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'><Heading fontSize='32px'>CHỌN LỊCH CHIẾU</Heading></BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'><Heading fontSize='32px'>CHỌN GHẾ</Heading></BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Box>
                    <Divider mt='24px' mb='24px'/>
                    <Flex>
                        <Stack spacing='24px'>
                            <Center borderRadius='10px' border='4px' w='255px' h='150px' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            {moment(location.state.data.data.ngay_chieu).format("ddd DD/MM/YY")}
                                        </Heading>
                                    </Box>
                                    <Box ml='25px'>
                                        <Heading fontSize='96px'>
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                    <Flex>
                                        <Box>
                                            <Heading fontSize='36px'>
                                                {moment(location.state.data.data.gio_bat_dau,'h:mm:ss').format("LT")}
                                            </Heading>
                                        </Box>
                                    </Flex>
                            </Center>
                            <Box borderRadius='10px' border='4px' w='255px' p='10px'>
                                <Heading fontSize='24px' ml="27px">
                                    Ghế đang chọn:
                                </Heading>
                                <Flex ml="27px">
                                    <Box>
                                        <Heading fontSize='24px'>
                                            {location.state.ghe.join(", ")}
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Box>
                        </Stack>
                        <Spacer/>
                        <Box borderRadius='10px' w='1240px' py='55px' px='98px' ml='84px'>
                            <Box borderRadius='10px' border='4px' w='1000px' h="300px">
                                <Center>
                                <Box fontSize="90px">
                                    Tổng cộng:  
                                </Box>
                                <Box ml="20" fontSize="90px">
                                    {location.state.ghe.length} x Vé
                                </Box>
                                </Center>
                                <Center fontSize="90px">
                                    {location.state.ghe.length*100000} Đ
                                </Center>
                            </Box>

                            <Center mt="60px">
                            <Button 
                                colorScheme='blue'
                                bgColor='red'
                                color='white'
                                size='lg'
                                borderRadius="10px"
                                w="80px"
                                h="35px"
                                mr ="50px"
                            >Back
                            </Button>
                                <Button 
                                    colorScheme='blue'
                                    bgColor='green'
                                    color='white'
                                    size='lg'
                                    borderRadius="10px"
                                    w="80px"
                                    h="35px"
                                    onClick={handleClick}
                                >Next
                                </Button>
                            </Center>
                        </Box>
                        
                        <Spacer/>
                    </Flex>
                </Box>
            </Box>
            
        </Stack>
        </Box>
    )
}

export default FoodDrinkList