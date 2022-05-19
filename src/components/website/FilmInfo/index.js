import React, { useState } from "react";

import {
    Stack, 
    Box,
    Image,
    Heading,
    Divider,
    Flex,
    Text,
    Button
} from "@chakra-ui/react"
import TrailerInfo from "../TrailerInfo";
import { useLocation } from "react-router-dom";

const FilmInfo = (props) => {
    
    const location=useLocation();
    const [locationState, setLocationState]=useState({title:"", poster:"", trailer:"",time:"",
                 director:"", actor:"",category:"", content:"", length:""})
    React.useEffect(() =>{
        if(location.state){
            let _state=location.state
            setLocationState(_state)
        }
    }, [location])
    const bgC="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(";
    const bgImg=bgC+locationState.poster+")";
    return(
        <Stack  color='white' 
        bg={bgImg}
        backgroundPosition= 'center'
        backgroundRepeat= 'no-repeat'
        backgroundSize= 'cover'
         px={164} py={18} fontFamily='Poppins'>
            <Box>
                <Heading fontSize='32px'>Thông tin phim</Heading>
                <Divider size='' mt='10px' mb='15px'/>
                <Flex>
                    <Box>
                        <Image  w='407px' h='600px' src={locationState.poster}/>
                    </Box>
                    <Box flex={1} ml='55px'>
                        <Heading fontSize='32px'>{locationState.title}</Heading>
                        <Divider mt='10px' mb='15px'/>
                        <Box mb='23px' fontSize='20px'>
                            <Flex>
                                <Text fontWeight='bold'>Đạo diễn: </Text>
                                <Text ml='1'>{locationState.director}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Diễn viên: </Text>
                                <Text  ml='1'>{locationState.actor}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Thể loại: </Text>
                                <Text ml='1'>{locationState.category}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Khởi chiếu: </Text>
                                <Text ml='1'>{locationState.time}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Thời lượng: </Text>
                                <Text ml='1'>{locationState.length}</Text>
                            </Flex>
                        </Box>
                        <Flex>
                          <Button mr='20px' fontSize='24px' h='63px' w='164px' colorScheme='blue'>Mua Vé</Button>
                          <TrailerInfo trailerProp={locationState.trailer}/>
                        </Flex>
                        
                        <Divider mt='24px' mb='10px'/>
                        <Box>
                            <Heading fontSize='32px' mb='2px'>Tóm tắt nội dung</Heading>
                            <Text fontSize='20px'>
                             {locationState.content}
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Stack>
    )
}

export default FilmInfo