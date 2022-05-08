import React from 'react';
import { Box, Button, Input, Radio, RadioGroup, Stack, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function SignupForm() {
        const [value, setValue] = React.useState('1')
        return (
          <Box bgColor='#3F4A81' w='688px' h='675px' 
          marginLeft='80px'
          padding='10px'>
            <Text color='white' fontWeight='bold' fontSize='3xl'
            textAlign='center' marginTop='20px'
            >SIGN UP</Text>
            <Box display='flex' marginTop='20px' marginLeft='60px'>
            <Text color='white'>Username</Text>
            <Input
               type='text'
               placeholder='Enter username'
               color="white"
               outline="2px"
               focusBorderColor='white'
               borderColor='#42C2FF'
               outlineColor='#42C2FF'
               borderRadius="10px"
               border="2px"
               w="370px"
               h="50px"
               margin='5px 0px 0px 90px'
            /></Box>

            <Box display='flex' marginTop='20px' marginLeft='60px'>
            <Text color='white'>Full name</Text>
            <Input
               type='text'
               placeholder='Enter full name'
               color="white"
               outline="2px"
               focusBorderColor='white'
               borderColor='#42C2FF'
               outlineColor='#42C2FF'
               borderRadius="10px"
               border="2px"
               w="370px"
               h="50px"
               margin='5px 0px 0px 93px'
            /></Box>

            <Box display='flex' marginTop='20px' marginLeft='60px'>
            <Text color='white'>Email</Text>
            <Input
               type='email'
               placeholder='Enter email'
               color="white"
               outline="2px"
               focusBorderColor='white'
               borderColor='#42C2FF'
               outlineColor='#42C2FF'
               borderRadius="10px"
               border="2px"
               w="370px"
               h="50px"
               margin='5px 0px 0px 132px'
            /></Box>

           <Box display='flex'  marginLeft='60px' marginTop='20px'>
           <Text color='white' >Password</Text>
           <Input 
             type='password'
             placeholder='Enter password'
             color="white"
             outline="2px"
             focusBorderColor='white'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="370px"
             h="50px"
             margin='5px 0px 0px 96px'
            />
            </Box>

            <Box display='flex'  marginLeft='60px' marginTop='20px'>
           <Text color='white' >Confirm Password</Text>

           <Input 
            type='password'
             placeholder='Enter password'
             color="white"
             outline="2px"
             focusBorderColor='white'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="370px"
             h="50px"
             margin='5px 0px 0px 19px'
            />
           

        
            </Box>

            <Box display='flex'  marginLeft='60px' marginTop='20px'>
           <Text color='white' >Gender</Text>
             <RadioGroup onChange={setValue} value={value}
                      margin='5px 0px 0px 110px' color='white'>
               <Stack direction='row'>
                <Radio value='1' marginRight='70px' colorScheme='#42C2FF'>Male</Radio>
                <Radio value='2' colorScheme='#42C2FF'>Female</Radio>
               </Stack>
              </RadioGroup>
            </Box>
      
          <Button 
            bgColor='#42C2FF'
            color='white'
            size='lg'
            borderRadius="10px"
            w="460px"
            h="50px"
            margin='40px 0px 20px 114px'
          >Sign up</Button>
         <Text color='white' textAlign='center'>Already have an account?
         <span> <Link to='/' color="#42C2FF">Login!</Link></span></Text>
        </Box>
        );
}


SignupForm.propTypes = {

};

export default SignupForm;