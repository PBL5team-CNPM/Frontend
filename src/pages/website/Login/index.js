import React from 'react';
import LoginForm from '../../../components/website/LoginForm';
import { Box, Center, Flex, Heading, Image, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Footer from '../../../components/website/Footer';

function Login() {
        return (
            <Box>
            <Box bgColor='#1F1D36' w='100%' h='675px' 
                 display='flex'>
                <Box  w='50%' h='675px'
                    > 
                    <Link to='/'>
                     <Flex marginLeft='90px'>  
                        <Box paddingTop='10px'>
                            <Image
                                borderRadius='full'
                                boxSize='80px'
                                src='Logo.png'
                                alt='Logo'
                            />
                        </Box>
                        <Center h ='80px' paddingTop='10px'>
                            <Box ml='11px' color='white' fontFamily='Poppins' fontSize='36px' fontWeight='bold.400'>
                                CINEMA PRO MAX
                            </Box>
                        </Center>
                        
                    </Flex>
                    </Link>
                    <Image src={require('../../../imgs/img1.png')} h='250px' w='690px'
                      margin='10px 0px 0px 90px' />
                    <Text marginLeft='90px' color='white' fontWeight='1000' fontSize='36px'
                    >Watch movies with friends and family.</Text> <br></br><br></br>
                    <Heading marginLeft='90px' color='white' size='3xl'>
                    make your <span style={{color:"#CA3BD7"}}> DREAM<br></br></span> come 
                    <span style={{color:"#42C2FF"}}> TRUE</span>.
                    </Heading>
                    
                </Box>

                <Box  w='50%' h='675px'>
                    <LoginForm/>
                </Box>
                
            </Box>
             <Footer/>
             </Box>
        );
}


Login.propTypes = {

};

export default Login;