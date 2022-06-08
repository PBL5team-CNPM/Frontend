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
} from "@chakra-ui/react"

import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import moment from "moment";
import axios from "axios";

const FoodDrinkList = () => {
    const location=useLocation()
    const navigate= useNavigate()
    const [locationState, setLocationState]=useState({data:[

    ], ghe: []})
    const [foodDrink, setFoodDrink]=useState([])
    const [FD_data, setFD_data]=useState([])
    React.useEffect(() =>{
        if(location.state){
            let _state=location.state
            setLocationState(_state)
            console.log(_state)
        }
    }, [])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/food_drinks').
            then(
                res => {
                    setFoodDrink(res.data)
                    setFD_data({data: res.data.map((item)=>{
                        return(
                            {
                                "food_drink_id": item.id,
                                "so_luong": 0
                            }
                        )
                    })})
                }
            ).catch(error => console.log(error))
        },[])
    
    const List = foodDrink.map((item)=>{
            return(
                <Stack>
                    <Box fontSize='24px'>
                        {item.ten}
                        <Box fontSize='24px'>
                            {item.gia} Đ
                        </Box>
                    </Box>
                    <NumberInput size='xs' maxW={16} min={0} 
                    onChange={(e)=>{
                        console.log({"food_drink_id":item.id,"so_luong":e})
                        setFD_data(FD_data.data[item.id-1].so_luong = e)
                        console.log(FD_data)
                        }} defaultValue={0}>
                        <NumberInputField  />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Stack>
            )
    })

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
                            <Box borderRadius='10px' border='4px' w='1000px'>
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
                                <Divider mt='24px' mb='24px'/>
                                <Center fontSize="90px">
                                    Chọn báp và nước
                                </Center>
                                <Center mb="20px">
                                    <SimpleGrid columns={[2, null, 2]} spacing='50px' spacingX='300px' spacingY='28px'>
                                        {List}
                                    </SimpleGrid>
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
                                onClick={() => navigate(-1)}
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