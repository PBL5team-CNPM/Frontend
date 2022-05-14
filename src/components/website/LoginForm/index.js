import React from 'react';
import { Box, Button,  Input, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function LoginForm() {
        return (
          <Box bgColor='#00051D' w='600px' h='525px' 
          boxShadow='10px 10px 10px #7c76ad'
          margin='100px 0px 0px 80px' borderRadius='10px'
          padding='10px'>
            <Text color='white' fontWeight='bold' fontSize='3xl'
           textAlign='center' marginTop='20px'
            >ĐĂNG NHẬP</Text>

            <Text color='white'marginTop='20px' marginLeft='60px'>Tên tài khoản</Text>

            <Input
               type='text'
               placeholder='Nhập tên tài khoản'
               color="white"
               outline={"2px"}
               focusBorderColor='white'
               borderColor='#42C2FF'
               outlineColor='#42C2FF'
               borderRadius="10px"
               border="2px"
               w="460px"
               h="50px"
               margin='20px 0px 20px 60px'
            />
           <Text color='white' marginLeft='60px'>Mật khẩu</Text>
           <Input 
             type='password'
             placeholder='Nhập mật khẩu'
             color="white"
             outline="2px"
             focusBorderColor='white'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="460px"
             h="50px"
             margin='20px 0px 20px 60px'
            />
          <Link to='/admin/revenue'>
          <Button 
            bgColor='#42C2FF'
            color='white'
            size='lg'
            borderRadius="10px"
            w="460px"
            h="50px"
            margin='10px 0px 20px 60px'
          >Đăng nhập</Button>
          </Link>

         <Text color='white' textAlign='center'>Chưa có tài khoản? 
         <span> <Link to='/signup'> 
                  <Button  color='#42C2FF' variant='link'>
                      Đăng ký!
                 </Button>
         </Link></span></Text>
        </Box>
        );
}




export default LoginForm;