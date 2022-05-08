
import React from "react";
import {
    Stack, 
    HStack, 
    VStack,
    Box,
    Image,
    Heading,
    Divider,
    Flex,
    Text,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    SimpleGrid,
    Center
} from "@chakra-ui/react"

import { ChevronRightIcon } from '@chakra-ui/icons'

const Showtimes = () => {
    return(
        <Stack minH='800px' color='white' bgColor='#1F1D36' px={164} py={18} fontFamily='Poppins'>
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
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'><Heading fontSize='32px'>CHỌN LỊCH CHIẾU</Heading></BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Box>
                    <Divider mt='24px' mb='24px'/>
                    <Flex>
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
                        <Box ml='84px'>
                            <SimpleGrid columns={[2, null, 4]} spacing='20px' spacingX='84px'>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            20:00 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            18:30 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            21:30 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            16:00 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            15:00 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            22:30 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            </SimpleGrid>
                        </Box>
                    </Flex>
                    <Divider mt='24px' mb='24px'/>
                    <Flex>
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
                                        25
                                    </Heading>
                                </Box>
                            </Flex>
                        </Center>
                        <Box ml='84px'>
                            <SimpleGrid columns={[2, null, 4]} spacing='20px' spacingX='84px'>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            20:00 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            18:30 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            21:30 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            16:00 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            15:00 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            <Center borderRadius='10px' border='4px' w='255px' h='62' p='27px'>
                                <Flex>
                                    <Box>
                                        <Heading>
                                            22:30 PM
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Center>
                            </SimpleGrid>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Stack>
    )
}

export default Showtimes