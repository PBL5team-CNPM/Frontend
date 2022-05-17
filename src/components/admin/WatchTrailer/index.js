import {Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure, AspectRatio, Center
    } from '@chakra-ui/react';
import React from 'react';


function WatchTrailer(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
    <>
    
    <Button onClick={onOpen} fontSize='24px' h='63px' w='164px' colorScheme='red'>Xem Trailer</Button>
        
      <Modal isOpen={isOpen} onClose={onClose} size='4xl'>
        <ModalOverlay/>
        <ModalContent alignSelf='center' bgColor='black' w='850px' h='580px' 
         color='white'>
        <ModalHeader>Trailer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
           <AspectRatio w='780px' h='460px' ratio={1}>
             <iframe
              title='The Batman'
              src="https://www.youtube.com/embed/mqqft2x_Aa4"
              allowFullScreen
             />
           </AspectRatio></Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    )
}

export default WatchTrailer;