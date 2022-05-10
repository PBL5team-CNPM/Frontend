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
            >ĐĂNG KÝ</Text>
            <Box display='flex' marginTop='20px' marginLeft='60px'>
            <Text color='white'>Tên tài khoản</Text>
            <Input
               type='text'
               placeholder='Nhập tên tài khoản'
               color="white"
               outline="2px"
               focusBorderColor='white'
               borderColor='#42C2FF'
               outlineColor='#42C2FF'
               borderRadius="10px"
               border="2px"
               w="370px"
               h="50px"
               margin='5px 0px 0px 60px'
            /></Box>

            <Box display='flex' marginTop='20px' marginLeft='60px'>
            <Text color='white'>Họ và tên</Text>
            <Input
               type='text'
               placeholder='Nhập họ và tên'
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
               placeholder='Nhập Email'
               color="white"
               outline="2px"
               focusBorderColor='white'
               borderColor='#42C2FF'
               outlineColor='#42C2FF'
               borderRadius="10px"
               border="2px"
               w="370px"
               h="50px"
               margin='5px 0px 0px 125px'
            /></Box>

           <Box display='flex'  marginLeft='60px' marginTop='20px'>
           <Text color='white' >Mật khẩu</Text>
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
             w="370px"
             h="50px"
             margin='5px 0px 0px 96px'
            />
            </Box>

            <Box display='flex'  marginLeft='60px' marginTop='20px'>
           <Text color='white' >Xác nhận mật khẩu</Text>

           <Input 
            type='password'
             placeholder='Nhập mật khẩu xác nhận'
             color="white"
             outline="2px"
             focusBorderColor='white'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="370px"
             h="50px"
             margin='5px 0px 0px 18px'
            />
           

        
            </Box>

            <Box display='flex'  marginLeft='60px' marginTop='20px'>
           <Text color='white' >Giới tính</Text>
             <RadioGroup onChange={setValue} value={value}
                      margin='5px 0px 0px 110px' color='white'>
               <Stack direction='row'>
                <Radio value='1' marginRight='70px' colorScheme='#42C2FF'
                  borderColor='#42C2FF'>Nam</Radio>
                <Radio value='2' colorScheme='#42C2FF'  
                borderColor='#42C2FF'>Nữ</Radio>
               </Stack>
              </RadioGroup>
            </Box>
        <Link to='/profile/viewprofile'>
          <Button 
            bgColor='#42C2FF'
            color='white'
            size='lg'
            borderRadius="10px"
            w="460px"
            h="50px"
            margin='40px 0px 20px 114px'
          >Đăng ký</Button></Link>
         <Text color='white' textAlign='center'>Đã có tài khoản?
         <span > <Link to='/login' >
            <Button  color='#42C2FF' variant='link'>
                      Đăng nhập!
                 </Button>
           </Link></span></Text>
        </Box>
        );
}


SignupForm.propTypes = {

};

export default SignupForm;