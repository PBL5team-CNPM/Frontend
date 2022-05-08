import React from 'react';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';
import { Box, Heading, Image, Text} from '@chakra-ui/react'

function Signup() {
        return (
            <Box bgColor='#1F1D36' w='100%' h='675px' 
                display='flex'>
                <Box  w='50%' h='675px'
                    >
                    <Image src={require('../../imgs/img1.png')} h='250px' w='690px'
                        margin='100px 0px 0px 90px' />
                    <Text marginLeft='90px' color='white' fontWeight='1000'
                    >Watch movies with friends and family.</Text> <br></br><br></br>
                    <Heading marginLeft='90px' color='white' size='3xl'>
                    make your <span style={{color:"#CA3BD7"}}> DREAM<br></br></span> come 
                    <span style={{color:"#42C2FF"}}> TRUE</span>.
                    </Heading>
                    
                </Box>

                <Box  w='50%' h='675px'>
                    <SignupForm/>
                </Box>
            </Box>
        );
}


Signup.propTypes = {

};

export default Signup;