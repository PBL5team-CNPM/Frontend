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
    const [disabled, setDisabled] = useState('')
    const location=useLocation()
    const [locationState, setLocationState]=useState({data:{}, check: ''})
    React.useEffect(() =>{
        if(location.state){
            let _state=location.state
            setLocationState(_state)
        }
    }, [location])
    function xulyDisable(){
        if(locationState.check == '1'){
            return 'disabled'
        }
        else{
            return ''
        }
    }
    const bgC="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("
    const bgImg=bgC+locationState.data.imageUrl+")"
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
                        <Image  w='407px' h='600px' src={locationState.data.imageUrl}/>
                    </Box>
                    <Box flex={1} ml='55px'>
                        <Heading fontSize='32px'>{locationState.data.title}</Heading>
                        <Divider mt='10px' mb='15px'/>
                        <Box mb='23px' fontSize='20px'>
                            <Flex>
                                <Text fontWeight='bold'>Đạo diễn: </Text>
                                <Text ml='1'>{locationState.data.director}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Diễn viên: </Text>
                                <Text  ml='1'>{locationState.data.actor}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Thể loại: </Text>
                                <Text ml='1'>{locationState.data.category}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Khởi chiếu: </Text>
                                <Text ml='1'>{locationState.data.time}</Text>
                            </Flex>
                            <Flex>
                                <Text fontWeight='bold'>Thời lượng: </Text>
                                <Text ml='1'>{locationState.data.length} {locationState.data.length?'phút':''}</Text>
                            </Flex>
                        </Box>
                        <Flex>
                          <Button mr='20px' fontSize='24px' h='63px' w='164px' colorScheme='blue' onChange={xulyDisable} >Mua Vé</Button>
                          <TrailerInfo trailerProp={locationState.data.trailer}/>
                        </Flex>
                        
                        <Divider mt='24px' mb='10px'/>
                        <Box>
                            <Heading fontSize='32px' mb='2px'>Tóm tắt nội dung</Heading>
                            <Text fontSize='20px'>
                             {locationState.data.content}
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Stack>
    )
}

export default FilmInfo