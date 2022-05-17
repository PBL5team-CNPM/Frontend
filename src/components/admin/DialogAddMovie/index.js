import React from 'react';
import {Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Input,
    Text,
    Flex,
    Center,
    Box,
    Textarea} from '@chakra-ui/react'
function DialogAddMovie(){
    const { isOpen,onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    return(
    <>
      <Button ml='70px' mt='30px' colorScheme='green' size='lg'
        shadow='0px 3px 3px 3px #344a3b' onClick={onOpen}>Thêm mới</Button>
       
       <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size='xl' 
        
        >
        <AlertDialogOverlay >
          <AlertDialogContent mt='20px' bgColor='#1F1D36' border='2px' borderColor='#42C2FF' 
          >
            <AlertDialogHeader fontSize='2xl' fontWeight='bold'
             color='white' textAlign='center'>
              Thêm phim
            </AlertDialogHeader>

            <AlertDialogBody color='white'>
              <Box >
                <Center>
                <Flex mb='20px'>
                  <Text mr='140px'>Tên phim</Text>
                  <Input w='400px' h='45px' type='text' 
                  focusBorderColor='white'
                  border='2px'
                  borderRadius='10px'
                  borderColor='#42C2FF'
                  placeholder='Nhập tên phim' />
                </Flex>
                </Center>

                <Center>
                <Flex mb='20px'>
                  <Text mr='150px'>Thể loại</Text>
                  <Input w='400px' h='45px' type='text'
                  focusBorderColor='white'
                  border='2px'
                  borderRadius='10px'
                  borderColor='#42C2FF'
                  placeholder='Nhập tên thể loại'  />
                </Flex>
                </Center>

                <Center>
                <Flex mb='20px'>
                  <Text mr='100px'>Năm sản xuất</Text>
                  <Input w='400px' h='45px' type='number' 
                  focusBorderColor='white'
                  border='2px'
                  borderRadius='10px'
                  borderColor='#42C2FF'
                  placeholder='Nhập năm sản xuất'  />
                </Flex>
                </Center>

                <Center>
                <Flex mb='20px'>
                  <Text mr='140px'>Đạo diễn</Text>
                  <Input w='400px' h='45px' type='text' 
                  focusBorderColor='white'
                  border='2px'
                  borderRadius='10px'
                  borderColor='#42C2FF'
                  placeholder='Nhập tên đạo diễn'  />
                </Flex>
                </Center>

                <Center>
                <Flex mb='20px'>
                  <Text mr='140px'>Diễn viên</Text>
                  <Input w='400px' h='45px' type='text' 
                  focusBorderColor='white'
                  border='2px'
                  borderRadius='10px'
                  borderColor='#42C2FF'
                  placeholder='Nhập tên các diễn viên'  />
                </Flex>
                </Center>

                <Center>
                <Flex mb='20px'>
                  <Text mr='140px'>Nội dung</Text>
                  <Textarea w='400px'  type='text' 
                  focusBorderColor='white'
                  border='2px'
                  borderRadius='10px'
                  borderColor='#42C2FF'
                  placeholder='Nhập nội dung phim'  />
                </Flex>
                </Center>

                <Center>
                <Flex mb='20px'>
                  <Text mr='50px'>Ngày bắt đầu chiếu</Text>
                  <Input w='400px' h='45px' type='date'
                  focusBorderColor='white'
                  border='2px'
                  borderRadius='10px'
                  borderColor='#42C2FF' />
                </Flex>
                </Center>

                <Center>
                <Flex mb='20px'>
                  <Text mr='30px'>Ngày kết thúc dự kiến</Text>
                  <Input w='400px' h='45px' type='date' 
                  focusBorderColor='white'
                  border='2px'
                  borderRadius='10px'
                  borderColor='#42C2FF' />
                </Flex>
                </Center>

                <Center>
                <Flex >
                  <Text mr='120px'>Poster Phim</Text>
                  <Input w='400px' h='45px' type='file' 
                  focusBorderColor='white'
                  border='2px'
                  borderRadius='10px'
                  borderColor='#42C2FF' />
                </Flex>
                </Center>
              </Box>
               
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme='red' ref={cancelRef} onClick={onClose}>
                Hủy
              </Button>
              <Button colorScheme='green' onClick={onClose} ml={3}>
                Thêm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
   </>
    )
}



export default DialogAddMovie;