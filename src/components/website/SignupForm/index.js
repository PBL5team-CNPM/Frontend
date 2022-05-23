import React, { useState } from 'react';
import { Box, Button, Center, Input, Radio, RadioGroup, Stack, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {FaEye, FaEyeSlash} from 'react-icons/fa';

function SignupForm() {
        const [value, setValue] = React.useState('1');
        const [type1, setType1]=useState('password');
        const [type2, setType2]=useState('password');
        const [icon1, setIcon1]=useState(FaEyeSlash);
        const [icon2, setIcon2]=useState(FaEyeSlash);
        const handleToggle1=()=>{
           if(type1==='password'){
              setIcon1(FaEye);
              setType1('text');
              }
           else{
              setIcon1(FaEyeSlash);
              setType1('password');
              }
         }

         const handleToggle2=()=>{
          if(type2==='password'){
             setIcon2(FaEye);
             setType2('text');
             }
          else{
             setIcon2(FaEyeSlash);
             setType2('password');
             }
        }
        return (
          <Box bgColor='#3F4A81' w='688px' h='675px' 
          marginLeft='80px'
          padding='10px' overflow='hidden'>
            <Text color='white' fontWeight='bold' fontSize='30px'
            textAlign='center' marginTop='10px'
            >ĐĂNG KÝ</Text>
            <Center fontSize='18px'>
            <Box  ml='25px'>
            <Box display='flex' marginTop='20px' >
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
               w="400px"
               h="45px"
               margin='0px 0px 0px 65px'
            /></Box>

            <Box display='flex' marginTop='15px' >
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
               w="400px"
               h="45px"
               margin='0px 0px 0px 95px'
            /></Box>

            <Box display='flex' marginTop='15px'>
            <Text color='white'>Số điện thoại</Text>
            <Input
               type='number'
               placeholder='Nhập số điện thoại'
               color="white"
               outline="2px"
               focusBorderColor='white'
               borderColor='#42C2FF'
               outlineColor='#42C2FF'
               borderRadius="10px"
               border="2px"
               w="400px"
               h="45px"
               margin='0px 0px 0px 70px'
            /></Box>

            <Box display='flex' marginTop='15px'>
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
               w="400px"
               h="45px"
               margin='0px 0px 0px 121px'
            /></Box>

           <Box display='flex'   marginTop='15px'>
           <Text color='white' >Mật khẩu</Text>
           <Input 
             type={type1}
             placeholder='Nhập mật khẩu'
             color="white"
             outline="2px"
             focusBorderColor='white'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="400px"
             h="45px"
             margin='0px 0px 0px 96px'
            /> <span style={{position:'relative',
            color:'#42C2FF', right:'30px', top:'15px'}} onClick={handleToggle1}>{icon1}</span>
            </Box>

            <Box display='flex'  marginTop='15px'>
           <Text color='white' >Xác nhận mật khẩu</Text>

           <Input 
            type={type2}
             placeholder='Nhập mật khẩu xác nhận'
             color="white"
             outline="2px"
             focusBorderColor='white'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="400px"
             h="45px"
             margin='0px 0px 0px 25px'
            />
           <span style={{position:'relative',
            color:'#42C2FF', right:'30px', top:'15px'}} onClick={handleToggle2}>{icon2}</span>
            </Box>

            <Box display='flex' marginTop='15px'>
            <Text color='white'>Ngày sinh</Text>
            <Input
               type='date'
               color="white"
               outline="2px"
               focusBorderColor='white'
               borderColor='#42C2FF'
               outlineColor='#42C2FF'
               borderRadius="10px"
               border="2px"
               w="400px"
               h="45px"
               margin='0px 0px 0px 90px'
            /></Box>

            <Box display='flex'  marginTop='15px'>
           <Text color='white' >Giới tính</Text>
             <RadioGroup onChange={setValue} value={value}
                      margin='0px 0px 0px 110px' color='white'>
               <Stack direction='row'>
                <Radio value='1' marginRight='70px' colorScheme='#42C2FF'
                  borderColor='#42C2FF'>Nam</Radio>
                <Radio value='2' colorScheme='#42C2FF'  
                borderColor='#42C2FF'>Nữ</Radio>
               </Stack>
              </RadioGroup>
            </Box>
            </Box>
         </Center>
        <Link to='/profile/viewprofile'>
          <Button 
            bgColor='#42C2FF'
            colorScheme='blue'
            color='white'
            size='lg'
            borderRadius="10px"
            w="460px"
            h="50px"
            margin='25px 0px 20px 114px'
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