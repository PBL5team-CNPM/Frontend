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
    Box} from '@chakra-ui/react'

function DialogAddCategory(){
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
        size='md' 
        >
        <AlertDialogOverlay >
          <AlertDialogContent  bgColor='#1F1D36' border='2px' borderColor='#42C2FF'
          alignSelf='center' 
          >
            <AlertDialogHeader fontSize='2xl' fontWeight='bold'
             color='white' textAlign='center'>
              Thêm thể loại phim
            </AlertDialogHeader>

            <AlertDialogBody color='white'>
              <Box >
                <Center>
                <Flex mb='20px'>
                  <Text mr='30px'>Thể loại</Text>
                  <Input w='380px' h='45px' type='text'
                  focusBorderColor='white'
                  border='2px'
                  borderRadius='10px'
                  borderColor='#42C2FF'
                  placeholder='Nhập tên thể loại'  />
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



export default DialogAddCategory;