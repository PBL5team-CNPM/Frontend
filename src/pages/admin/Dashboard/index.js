import React, { useState } from 'react';
import { Box, Center, Flex, HStack, Image,Text, VStack} from '@chakra-ui/react'
import { Link, Navigate, Outlet} from 'react-router-dom';

function Dashboard() {
        const [bgStyle,setBgStyle]=useState("")
        const [bgStyle2,setBgStyle2]=useState("")
        const [bgStyle3,setBgStyle3]=useState("")
        const [bgStyle4,setBgStyle4]=useState("")
        
        if(JSON.parse(localStorage.getItem('user-info')).action.includes("DASHBOARD")){
          return (
              <Box >
                 <HStack bgColor='#1F1D36' h='75px' padding='10px'>
                   <Box w='500px' h='75px' ml='30px'>
                      <Flex>  
                          <Box>
                              <Image
                                  borderRadius='full'
                                  boxSize='70px'
                                  src={require('../../../imgs/Logo2.png')}
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
                      <Flex h='80px' padding='10px'  w='330px'
                      onMouseLeave={(e) => {setBgStyle("")}}
                      onMouseEnter ={(e) => {setBgStyle("#1F1D36")}} 
                      borderRadius='6px' bgColor={bgStyle}>
                        <Image ml='30px' src={require('../../../imgs/revenue.png')}/>
                        <Text color='white' fontFamily='Poppins' fontSize='40px' ml='20px'
                          mt='5px'>Doanh thu</Text>
                      </Flex>
                    </Link>
  
                    <Link to='film'>
                      <Flex h='80px' padding='10px'  w='330px' borderRadius='6px'
                        onMouseLeave={(e) => {setBgStyle2("")}}
                        onMouseEnter ={(e) => {setBgStyle2("#1F1D36")}} 
                       bgColor={bgStyle2}>
                        <Image ml='30px' src={require('../../../imgs/film.png')}/>
                        <Text color='white' fontFamily='Poppins' fontSize='40px' ml='20px'
                          mt='5px'>Phim</Text>
                      </Flex>
                    </Link>
  
                    <Link to='category'>
                      <Flex h='80px' padding='10px' w='330px' borderRadius='6px' 
                        onMouseLeave={(e) => {setBgStyle3("")}}
                        onMouseEnter ={(e) => {setBgStyle3("#1F1D36")}} 
                        bgColor={bgStyle3}>
                        <Image ml='30px' src={require('../../../imgs/category.png')}/>
                        <Text color='white' fontFamily='Poppins' fontSize='40px' ml='20px'
                          mt='5px'>Thể loại</Text>
                      </Flex>
                    </Link>
  
                    <Link to='users'>
                      <Flex h='80px' padding='10px'  w='330px' borderRadius='6px' 
                      onMouseLeave={(e) => {setBgStyle4("")}}
                      onMouseEnter ={(e) => {setBgStyle4("#1F1D36")}}  
                      bgColor={bgStyle4}>
                        <Image ml='30px' src={require('../../../imgs/user.png')}/>
                        <Text color='white' fontFamily='Poppins' fontSize='40px' ml='20px'
                          mt='5px'>Tài khoản</Text>
                      </Flex>
                    </Link>
                 </VStack>
                 <Box h='670px'  w='1160px'>
                   <Outlet/>
                 </Box>
             </Box>
            </Box>
          );
        }
        else {return <Navigate to="/home" replace />}
}


export default Dashboard;