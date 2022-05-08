import { Box, Button, Center, Flex, Heading, HStack, Image, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome=() =>( 
     <Box>
           
          <HStack bgColor='#1F1D36' h='55px' padding='10px'>
            <Box w='500px' h='55px' ml='164px'>
                    <Flex>  
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
            </Box>
            <Spacer/>
            <Spacer/>
            <Box w='300px' color='white' fontFamily='Poppins' fontSize='20px' paddingTop='20px'>
                <Flex>
                    <Box w='120px'>
                        <Link to="/home">
                        <Button  colorScheme='white' variant='link'>
                            Explore
                       </Button>
                        </Link>
                    </Box>
                    <Box>
                        <Link to="/login">
                        <Button  colorScheme='white' variant='link'>
                            Join
                       </Button>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </HStack>
       <Box bgColor="#1F1D36" w='100%' h='625px'  overflow='hidden' >
          <Box bgColor="#00D1FF" w='396px' h='396px' 
            borderRadius='50%'
             left='1240px' top='440px'
             position='relative' opacity='10%'
            >
          </Box>

          <Box bgColor="#FAFF00" w='296px' h='296px' 
            borderRadius='50%'
             left='686px' top='-100px'
             position='relative' opacity='10%'
            >
          </Box>

          <Box bgColor="#001AFF" w='215px' h='215px' 
            borderRadius='50%'
             left='660px' bottom='640px'
             position='relative' opacity='10%'
            >
          </Box>

          <Box bgColor="#FF0000" w='186px' h='186px' 
            borderRadius='50%'
             left='1200px' bottom='740px'
             position='relative' opacity='10%'
            >
          </Box>

          <Box bgColor="#BE3AD1" w='396px' h='396px' 
            borderRadius='50%'
             left='-120px' bottom='800px'
             position='relative' opacity='10%'
            >
          </Box>
          
          <Image src={require('../../imgs/img2.png')} position='relative'
               w='450px' h='450px'
               left='160px' bottom='1400px'/>
            
           <Box w='560px' h='330px' position='absolute' 
             left='840px' bottom='230px' >
                <Heading color='white'>WELCOME TO</Heading>
                <Heading color='white'>CINEMA PRO MAX</Heading><br></br>
                <Text color='white' fontSize='xl'>ENTER THE FANTASY WORLD</Text>
                <Text color='white' fontSize='xl'>TOUCH THE WORLD OF DREAMS</Text>
                <br></br>
                <Link to='/login'>
                   <Button bgColor='#42C2FF' color='white' w='140px' h='60px'
                   fontSize='2xl'  >
                    Join</Button>
                </Link>

            </Box>
           </Box>
             
         </Box>
)



export default Welcome;