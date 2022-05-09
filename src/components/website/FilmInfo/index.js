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
    Button
} from "@chakra-ui/react"

const FilmInfo = (props) => {

    return(
        <Stack color='white' bgColor='#1F1D36' px={164} py={18} fontFamily='Poppins'>
            <Box>
                <Heading fontSize='32px'>Thông tin phim</Heading>
                <Divider size='' mb='24px'/>
                <Flex>
                    <Box>
                        <Image objectFit='cover' w='499px' h='572px' src="https://www.thebatman.com/images/share.jpg"/>
                    </Box>
                    <Box flex={1} ml='55px'>
                        <Heading fontSize='32px'>THE BATMAN</Heading>
                        <Divider mt='24px' mb='24px'/>
                        <Box mb='23px' fontSize='20px'>
                            <Flex>
                                <Text fontWeight='bold'>Đạo diễn: </Text>
                                <Text ml='1'>Matt Reeves</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Diễn viên: </Text>
                                <Text ml='1'>Robert Pattinson, Zoë Kravitz, Paul Dano</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Thể loại: </Text>
                                <Text ml='1'>Hành Động, Tội phạm</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Khởi chiếu: </Text>
                                <Text ml='1'>04/03/2022</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Thời lượng: </Text>
                                <Text ml='1'>183 minutes</Text>
                            </Flex>
                        </Box>
                        <Button fontSize='24px' h='63px' w='164px' bgColor='#42C2FF'>Mua Vé</Button>
                        <Divider mt='24px' mb='24px'/>
                        <Box>
                            <Heading fontSize='32px' mb='2px'>Tóm tắt nội dung</Heading>
                            <Text fontSize='20px'>
                            Bộ phim đưa khán giả dõi theo hành trình phá án và diệt trừ tội phạm của chàng Hiệp sĩ Bóng đêm 
                            Batman, với một câu chuyện hoàn toàn khác biệt với những phần phim đã ra mắt trước đây. Thế giới 
                            ngầm ở thành phố Gotham xuất hiện một tên tội phạm kỳ lạ tên Riddler chuyên nhắm vào nhân vật tai 
                            to mặt lớn. Và sau mỗi lần phạm tội, hắn đều để lại một câu đố bí ẩn cho Batman. Khi bắt tay vào phá 
                            giải các câu đố này, Batman dần lật mở những bí ẩn động trời giữa gia đình anh và tên trùm tội phạm 
                            Carmine Falcon
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Stack>
    )
}

export default FilmInfo