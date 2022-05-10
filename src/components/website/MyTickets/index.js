import React from 'react';
import { Box, Button,  Input, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function MyTickets() {
        return (
            <Box bgColor='white' w='445px' h='450px' 
            boxShadow='10px 10px 10px #7c76ad'
            margin='100px 0px 0px 80px' borderRadius='10px'
            padding='10px'>
            <Text color='black' fontWeight='bold' fontSize='3xl'
             textAlign='center' marginTop='20px'
            >COMING SOON</Text>
            </Box>
        );
}


MyTickets.propTypes = {

};

export default MyTickets;