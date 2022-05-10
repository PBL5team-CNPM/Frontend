import React from 'react';
import { Box, Button,  Input, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function ChangePassword() {
        return (
          <Box bgColor='white' w='445px' h='450px' 
          boxShadow='10px 10px 10px #7c76ad'
          margin='100px 0px 0px 80px' borderRadius='10px'
          padding='10px'>
            <Text color='black' fontWeight='bold' fontSize='3xl'
           textAlign='center' marginTop='20px'
            >     </Text>

            <Text color='black'marginTop='20px' marginLeft='60px'>Old Password</Text>

            <Input
               type='password'
               color="black"
               outline={"2px"}
               focusBorderColor='white'
               borderColor='#42C2FF'
               outlineColor='#42C2FF'
               borderRadius="10px"
               border="2px"
               w="230"
               h="25"
               margin='20px 0px 20px 60px'
            />
            <Text color='black' marginLeft='60px'>New Password</Text>
            <Input 
             type='password'
             color="black"
             outline="2px"
             focusBorderColor='white'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="230"
             h="25"
             margin='20px 0px 20px 60px'
            />
            <Text color='black' marginLeft='60px'>Confirm New Password</Text>
            <Input 
             type='password'
             color="black"
             outline="2px"
             focusBorderColor='white'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="230"
             h="25"
             margin='20px 0px 20px 60px'
            />
                             
          <Button 
            bgColor='#42C2FF'
            color='white'
            size='lg'
            borderRadius="10px"
            w="25"
            h="25"
            margin='10px 0px 20px 60px'
          >Confirm</Button>

          <Button 
            bgColor='#42C2FF'
            color='white'
            size='lg'
            borderRadius="10px"
            w="25"
            h="25"
            margin='10px 0px 20px 60px'
          >Cancel</Button>
          
        </Box>
        );
}


ChangePassword.propTypes = {

};

export default ChangePassword;