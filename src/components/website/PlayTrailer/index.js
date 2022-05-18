import {Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    IconButton,
    useDisclosure, AspectRatio, Center
    } from '@chakra-ui/react';
import React from 'react';
import {GrPlayFill} from 'react-icons/gr'


function PlayTrailer(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
    <>
    
    <IconButton style={props.styleProp} onClick={onOpen} borderRadius='50%' icon={<GrPlayFill/>}
                    transition='0.7s'  bgColor='white' mr='10px'/>
        
      <Modal isOpen={isOpen} onClose={onClose} size='4xl'>
        <ModalOverlay/>
        <ModalContent alignSelf='center' bgColor='black' w='900px' h='620px' 
         color='white'>
        <ModalHeader>Trailer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
           <AspectRatio w='900px' h='500px' ratio={1}>
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

export default PlayTrailer;