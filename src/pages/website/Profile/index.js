import React from 'react';
import { Box, Center, Flex, HStack, Image,Text, VStack} from '@chakra-ui/react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";


function Profile() {
        return (
            <Box bgColor='#1F1D36' w='100%' h='675px' 
                 display='flex'>
                 <Box bgColor='black' w='250px' h='450px' 
                 boxShadow='10px 10px 10px #7c76ad'
                 margin='100px 0px 0px 80px' borderRadius='10px'
                 padding='10px'>
                 <Image src={require('../../imgs/user1.png')} h='200px' w='125' marginTop='20px' marginLeft='30px' align='center'/>
                 <Link to='EditProfile'>
                   <Text color='white'marginTop='20px' align='center'>Edit Profile</Text>
                 </Link>  
                 <Link to='MyTickets'>
                   <Text color='white'marginTop='20px' align='center'>My Tickets</Text>
                 </Link>  
                 <Link to='ChangePassword'>
                   <Text color='white'marginTop='20px' align='center'>Change Password</Text>
                 </Link>  
                 </Box>

                <Box>
                    <Outlet/>
                </Box>
              
            </Box>
        );
}


Profile.propTypes = {

};

export default Profile;