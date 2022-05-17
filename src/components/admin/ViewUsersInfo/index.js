import { Image,Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
    IconButton,
    Flex,
    Box,
    Text,
    Center,} from '@chakra-ui/react';
import React from 'react';


function ViewUsersInFo(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
    <>
    
    <IconButton onClick={onOpen}  colorScheme='white'
     icon={<Image h='40px' w='42px' src={require('../../../imgs/view.png')}/>}/>
        
      <Modal isOpen={isOpen} onClose={onClose} size='sm'>
        <ModalOverlay />
        <ModalContent alignSelf='center' h='570px' mt='10px'
        color='white' bgColor='#1F1D36'>
            
            <Image objectFit='cover' opacity='0.6's
             w='480px' h='250px' borderRadius='10px' src={require('../../../imgs/user1.png')}/>
             <Box  position='relative' bottom='120px'>
                 <Center>
                <Image  objectFit='cover' w='180px' h='180px'
                 borderRadius='50%' border='2px'
                borderColor="#42C2FF" src={require('../../../imgs/user1.png')}/></Center>
               <Text textAlign='center' fontSize='25px' fontWeight='bold'>Lê Thị B</Text>
               <Center>
                <Box>
               <Flex  mt='10px'>
                   <Text mr='55px'>Tên tài khoản:</Text>
                   <Text fontWeight='bold'>lethib140121</Text>
               </Flex>
 
               <Flex mt='10px'>
                   <Text mr='50px'>Ngày đăng ký:</Text>
                   <Text fontWeight='bold'>28/03/2022</Text>
               </Flex>

               <Flex  mt='10px'>
                   <Text mr='96px'>Giới tính:</Text>
                   <Text fontWeight='bold'>Nữ</Text>
               </Flex>

               <Flex  mt='10px'>
                   <Text mr='82px' >Ngày sinh:</Text>
                   <Text fontWeight='bold'>14/01/2001</Text>
               </Flex>

               <Flex  mt='10px'>
                   <Text mr='125px'>Email:</Text>
                   <Text fontWeight='bold'>ltb@gmail.com</Text>
               </Flex> </Box>
               </Center>

             </Box>
            
             <ModalCloseButton />
           
        </ModalContent>
      </Modal>
    </>
    )
}

export default ViewUsersInFo;