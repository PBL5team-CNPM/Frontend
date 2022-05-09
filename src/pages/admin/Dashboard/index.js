import React from 'react';
import { Box, Center, Flex, HStack, Image,Text, VStack} from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
        return (
            <Box >
               <HStack bgColor='#1F1D36' h='75px' padding='10px'>
                 <Box w='500px' h='75px' ml='30px'>
                    <Flex>  
                        <Box>
                            <Image
                                borderRadius='full'
                                boxSize='70px'
                                src='Logo2.png'
                                alt='Logo'
                            />
                        </Box>
                        <Center h ='75px'>
                            <Box ml='11px' color='white' fontFamily='Poppins' fontSize='30px' fontWeight='bold.400'>
                                CPM ADMIN
                            </Box>
                        </Center>
                     </Flex>
                 </Box>
            <Link to='/'>
               <Image ml='910px' src={require('../../../imgs/logout.png')}/>   
            </Link>  

           </HStack>
           <Box w='100%' h='670px'  display='flex'>
               <VStack bgColor='#3D3C4D' w='380px' spacing='5'>
                  <Box w='330px' bgColor='white' h='6px' borderRadius='4px' mt='20px'></Box>
                  <Link to='revenue'>
                    <Flex h='80px' padding='10px'  w='330px'>
                      <Image ml='30px' src={require('../../../imgs/revenue.png')}/>
                      <Text color='white' fontFamily='Poppins' fontSize='40px' ml='20px'
                        mt='5px'>Revenue</Text>
                    </Flex>
                  </Link>

                  <Link to='film'>
                    <Flex h='80px' padding='10px'  w='330px'>
                      <Image ml='30px' src={require('../../../imgs/film.png')}/>
                      <Text color='white' fontFamily='Poppins' fontSize='40px' ml='20px'
                        mt='5px'>Movie</Text>
                    </Flex>
                  </Link>

                  <Link to='category'>
                    <Flex h='80px' padding='10px' w='330px'>
                      <Image ml='30px' src={require('../../../imgs/category.png')}/>
                      <Text color='white' fontFamily='Poppins' fontSize='40px' ml='20px'
                        mt='5px'>Category</Text>
                    </Flex>
                  </Link>

                  <Link to='users'>
                    <Flex h='80px' padding='10px'  w='330px'>
                      <Image ml='30px' src={require('../../../imgs/user.png')}/>
                      <Text color='white' fontFamily='Poppins' fontSize='40px' ml='20px'
                        mt='5px'>Users</Text>
                    </Flex>
                  </Link>
               </VStack>
               <Box>
                   <Outlet/>
               </Box>
           </Box>
          </Box>
        );
}


export default Dashboard;