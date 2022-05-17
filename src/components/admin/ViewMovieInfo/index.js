import { Image,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    IconButton,
    Flex,
    Box,
    Heading,
    Divider,
    Text,} from '@chakra-ui/react';
import React from 'react';
import WatchTrailer from '../WatchTrailer';


function ViewMovieInFo(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
    <>
    
    <IconButton onClick={onOpen}  colorScheme='white'
     icon={<Image h='40px' w='42px' src={require('../../../imgs/view.png')}/>}/>
        
      <Modal isOpen={isOpen} onClose={onClose} size='4xl'>
        <ModalOverlay />
        <ModalContent mt='10px' border='2px' borderColor='#42C2FF' 
        bg='linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),
        url("https://www.thebatman.com/images/share.jpg")'
        backgroundPosition= 'center'
        backgroundRepeat= 'no-repeat'
        backgroundSize= 'cover' color='white'>
          <ModalHeader>Thông tin phim</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Flex>
                    <Box>
                        <Image objectFit='cover' w='499px' h='572px' src="https://www.thebatman.com/images/share.jpg"/>
                    </Box>
                    <Box flex={1} ml='55px'>
                        <Heading fontSize='27px'>THE BATMAN</Heading>
                        <Divider mt='24px' mb='24px'/>
                        <Box mb='23px' fontSize='15px'>
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
                        <WatchTrailer/>
                        <Divider mt='24px' mb='24px'/>
                        <Box>
                            <Heading fontSize='27px' mb='2px'>Tóm tắt nội dung</Heading>
                            <Text fontSize='15px'>
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>
              Đóng
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}

export default ViewMovieInFo;