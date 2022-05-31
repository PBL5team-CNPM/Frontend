import './Styles.css';
import React from "react";
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
    Link,
    Image,
    Spacer,
    Button
} from "@chakra-ui/react"

import { ChevronRightIcon } from '@chakra-ui/icons'

const SeatList = () => {
    const List = [...Array(60).keys()]
    return(
        <Box>
        <Stack minH='640px' color='white' bgColor='#1F1D36' px={164} py={18} fontFamily='Poppins'>
            <Box>
                <Heading fontSize='32px'>Thông tin phim</Heading>
                <Divider size='' mb='24px'/>
                <Breadcrumb spacing='8px' separator={<Heading><ChevronRightIcon /></Heading>}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'><Heading fontSize='32px'>THE BATMAN</Heading></BreadcrumbLink>
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
                                            04
                                        </Heading>
                                        <Heading>
                                            Sun
                                        </Heading>
                                    </Box>
                                    <Box ml='25px'>
                                        <Heading fontSize='96px'>
                                            24
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                    <Flex>
                                        <Box>
                                            <Heading fontSize='36px'>
                                                20:00 PM
                                            </Heading>
                                        </Box>
                                    </Flex>
                            </Center>
                        </Stack>
                        <Spacer/>
                        <Box borderRadius='10px' w='1240px' h='400px' py='55px' px='98px' ml='84px'>
                        <div className="Cinema">
                        <div className="screen" />
                        </div>    
                            <ul className="ShowCase">
                                <li>
                                    <span className="seat" /> <small>N/A</small>
                                </li>
                                <li>
                                    <span className="seat selected" /> <small>Selected</small>
                                </li>
                                <li>
                                    <span className="seat occupied" /> <small>Occupied</small>
                                </li>
                            </ul>
                            <Button 
                                colorScheme='blue'
                                bgColor='red'
                                color='white'
                                size='lg'
                                borderRadius="10px"
                                w="80px"
                                h="35px"
                                margin='10px 0px 20px 92px'
                            >Trở lại</Button>
                            <Button 
                                colorScheme='blue'
                                bgColor='green'
                                color='white'
                                size='lg'
                                borderRadius="10px"
                                w="80px"
                                h="35px"
                                margin='10px 0px 20px 92px'
                            >Tiếp theo</Button>
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