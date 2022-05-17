import React from 'react';
import { Box, Button,  Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom';


function ViewProfile() {
        return (
          <Box bgColor='white' w='450px' h='500px' 
          boxShadow='10px 10px 10px #7c76ad'
          margin='0px 0px 0px 120px' borderRadius='10px' p='20px 10px 10px 10px'
          >

            <Text  color='black' align='center' fontSize='36px' fontWeight='bold'>
              Thông tin tài khoản</Text>
            <Text color='black'mt='20px' marginLeft='60px'>Họ và tên</Text>
            
            <Box  w="310px"
               h="30px"
               m='10px 0px 10px 60px'  borderColor='blue'
               borderRadius="10px"
               border="2px">
              <Text ml='10px' color='black' fontSize='18px'>Nguyễn Văn A</Text>
            </Box>
          
            <Text color='black' marginLeft='60px'>Email</Text>
            <Box  w="310px"
               h="30px"
               m='10px 0px 10px 60px'  borderColor='blue'
               borderRadius="10px"
               border="2px">
               <Text ml='10px' color='black' fontSize='18px'>ngvana@gmail.com</Text>
            </Box>
            <Text color='black' marginLeft='60px'>Ngày sinh</Text>
            <Box  w="310px"
               h="30px"
               m='10px 0px 10px 60px'  borderColor='blue'
               borderRadius="10px"
               border="2px">
               <Text ml='10px' color='black' fontSize='18px'>01/01/2022</Text>
            </Box>
            <Text color='black' marginLeft='60px'>Giới tính</Text>
            <Box  w="310px"
               h="30px"
               m='10px 0px 10px 60px'  borderColor='blue'
               borderRadius="10px"
               border="2px">
               <Text ml='10px' color='black' fontSize='18px'>Nam</Text>
            </Box>
                
         <Link to='/profile/editprofile'>
         <Button 
            colorScheme='blue'
            bgColor='#42C2FF'
            color='white'
            size='lg'
            borderRadius="10px"
            w="245px"
            h="35px"
            margin='20px 0px 20px 92px'
          >Sửa thông tin</Button>
         </Link>
        </Box>
        );
}




export default ViewProfile;