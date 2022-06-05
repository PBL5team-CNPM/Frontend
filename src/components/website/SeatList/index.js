import './Styles.css';
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
import CheckboxCard from './CheckboxCard';
import moment from 'moment';

const SeatList = () => {
    const [checked, setChecked] = useState([])
    const location=useLocation()
    const [locationState, setLocationState]=useState({data:[

    ], tenphim: ''})
    React.useEffect(() =>{
        if(location.state){
            let _state=location.state
            setLocationState(_state)
            console.log(_state)
            console.log(_state.data.ghe)
            console.log(checked)
        }
    }, [])
    useEffect(()=>{
        console.log(checked)
    },[checked])

    const handleCheck = (e) => {
        var updateList = [...checked];
        if (e.target.checked){
            updateList = [...checked, e.target.value]
        }
        else{
            updateList.splice(checked.indexOf(e.target.value), 1)
        }
        console.log(e.target.value)
        setChecked(updateList)
    }


    const List = location.state.data.ghe.map((item)=>{
        return(
                (item.suatchieu_ID.includes(location.state.data.id))?
                <Box bgColor="red.400" borderRadius="2px" w="32px" h="32px" key={item.id}>
                </Box>:
                <div key={item.id}>
                    <input style={{width: "30px",
                                    height: "30px",
                    }} value={item.id} type="checkbox" onChange={handleCheck}/>
                </div>
        )
    })
    
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
                                            {moment(location.state.data.ngay_chieu).format("ddd DD/MM/YY")}
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
                                                {moment(location.state.data.gio_bat_dau,'h:mm:ss').format("LT")}
                                            </Heading>
                                        </Box>
                                    </Flex>
                            </Center>
                        </Stack>
                        <Spacer/>
                        <Box borderRadius='10px' w='1240px' py='55px' px='98px' ml='84px'>
                            <div className="Cinema">
                            <div className="screen" />
                            </div>    
                            <SimpleGrid columns={[2, null, location.state.data.soluong_cot]} spacing='20px' spacingX='25px' spacingY='28px'>
                                {List}
                            </SimpleGrid>
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
                            <Link to="/home/movie-info/lich-chieu/chon-ghe/chon-food-drink" state={{data:location.state, ghe: checked}}>
                                <Button 
                                    colorScheme='blue'
                                    bgColor='green'
                                    color='white'
                                    size='lg'
                                    borderRadius="10px"
                                    w="80px"
                                    h="35px"
                                >Next
                                </Button>
                            </Link>
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

export default SeatList