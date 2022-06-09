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
    NumberInput,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputField,
    Text,
} from "@chakra-ui/react"

import { ChevronRightIcon, InfoIcon } from '@chakra-ui/icons'
import { Link, useLocation } from 'react-router-dom';
import moment from "moment";
import axios from "axios";

const BillInfo = () => {
    const location=useLocation()
    const [locationState, setLocationState]=useState(
        {data:[], ghe: []})
    const [foodDrink, setFoodDrink]=useState([])
    const [FD_data, setFD_data]=useState()
    // React.useEffect(() =>{
    //     if(location.state){
    //         let _state=location.state
    //         setLocationState(_state)
    //         console.log(_state)
    //     }
    // }, [])

    // const handleClick = () => {
    //     const data = {
    //         "user_id": JSON.parse(localStorage.getItem('user-info')).id,
    //         "suatchieu_id": location.state.data.data.id,
    //         "ghe_id": location.state.ghe,
    //         "gia_ve": 100000,
    //         "food_drink": FD_data
    //     }
    //     console.log(data)
    //     axios.post('http://localhost:8000/api/addhoadon', data
    //     ).then(res => {
    //         console.log(res.data)
    //     }).catch(error=>{
    //             console.log(error)
    //     })
    // }
    
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
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'><Heading fontSize='32px'>CHỌN GHẾ</Heading></BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'><Heading fontSize='32px'>CHI TIẾT HÓA ĐƠN</Heading></BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Box>
                    <Divider mt='24px' mb='24px'/>
                    <Flex>
                        <Spacer/>
                        <Box w='100%'>
                            <Box borderRadius='0px' bgColor="white" boxShadow="4px 6px 5px 0px rgb(255 255 255 / 0.4)" w='100%' overflow="hidden">
                                <Flex>
                                    <Box w="40%" fontSize="24px" color="blackAlpha.400" borderRight="1px">
                                        <Image w="100%" fit="cover" src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/r/dr-strange-payoff-poster_1_.jpg"/>
                                    </Box>
                                    <Box w="60%" fontSize="24px" color="blackAlpha.400">
                                        <Box px="25px" py="15px">
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
                                                <Heading mr="5px" fontSize="24px">PAYMENT INFO</Heading>
                                                <InfoIcon/>
                                            </Flex>
                                            <Divider mt="10px"/>
                                            <Flex>
                                                <Box>
                                                    <Heading bgGradient='linear(to-r, #7928CA, #FF0080)'
                                                                bgClip='text'>
                                                        CINEMA PRO MAX
                                                    </Heading>
                                                    <Text mt="10px"  color="gray" fontWeight="bold">
                                                        PHIM: PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN 
                                                    </Text>
                                                    <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                        Số lượng: 3 VÉ
                                                    </Text>
                                                    <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                        Phòng chiếu: CINEMA 1
                                                    </Text>
                                                    <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                        Ghế: A1, A2, A3
                                                    </Text>
                                                    <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                        Đồ ăn: 2 x Bắp lớn, 2 x Coca-cola lớn
                                                    </Text>
                                                </Box>
                                            </Flex>
                                            <Divider mt="10px"/>
                                            <Flex>
                                                <Box>
                                                    <Heading color="gray">
                                                        Thông tin người mua
                                                    </Heading>
                                                    <Flex>
                                                        <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                            Tên tài khoản:
                                                        </Text>
                                                        <Spacer/>
                                                        <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                            User01
                                                        </Text>
                                                    </Flex>
                                                    <Flex>
                                                        <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                            Tên khách hàng:
                                                        </Text>
                                                        <Spacer/>
                                                        <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                            Nguyễn Văn A
                                                        </Text>
                                                    </Flex>
                                                    <Flex>
                                                        <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                            Email:
                                                        </Text>
                                                        <Spacer/>
                                                        <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                            User01@gmail.com
                                                        </Text>
                                                    </Flex>
                                                    <Flex>
                                                        <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                            ngày giao dịch:
                                                        </Text>
                                                        <Spacer/>
                                                        <Text ml="20px" fontSize="20px" color="gray" fontWeight="bold">
                                                            {moment(Date.now()).format("DD/ MM/ YYYY")}
                                                        </Text>
                                                    </Flex>
                                                </Box>
                                            </Flex>
                                            <Divider mt="20px"/>
                                            <Heading color="gray">
                                                Tổng cộng: 470.000 đ 
                                            </Heading>
                                            <Divider mt="20px"/>
                                        </Box>
                                        <Center>
                                            <Button fontSize="24px" color="white" colorScheme="purple" mt="30px" w="300px" h="100px"> MUA NGAY</Button>
                                        </Center>
                                    </Box>
                                </Flex>
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
                                    onClick={"handleClick"}
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

export default BillInfo