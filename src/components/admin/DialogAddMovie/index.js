import React, { useState } from 'react';
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
  import Multiselect from 'multiselect-react-dropdown';
function DialogAddMovie(){
    const { isOpen,onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const [category,setCategory]=useState(["Kinh dị", "Hài hước", "Tình cảm", 
        "Trinh thám", "Khoa học-viễn tưởng", "Hành động", "Phiêu lưu"]);
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
          <AlertDialogContent   bgColor='#1F1D36' border='2px' borderColor='#42C2FF' 
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
                  <Text mr='166px'>Trailer</Text>
                  <Input w='400px' h='45px' type='url'
                  focusBorderColor='white'
                  border='2px'
                  borderRadius='10px'
                  borderColor='#42C2FF'
                  placeholder='Nhập url'  />
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
                  <Text mr='139px'>Nội dung</Text>
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

                <Center>
                <Flex mt='20px' mb='20px'>
                  <Text mr='150px'>Thể loại</Text>
                  <Multiselect className='mse-category'
                  isObject={false} placeholder='Chọn thể loại' hidePlaceholder='true'
                  options={category}    showCheckbox='true' 
                  avoidHighlightFirstOption='true'
                  style={ {chips: { background: "#42C2FF" }, 
                  searchBox: { border: "2px solid #42C2FF",  "border-radius": "10px"}} }
                  />
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