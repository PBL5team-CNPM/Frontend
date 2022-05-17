import React from 'react';
import { Box, Button,  Input, Text} from '@chakra-ui/react'


function ChangePassword() {
        return (
          <Box bgColor='white' w='450px' h='500px' 
          boxShadow='10px 10px 10px #7c76ad'
          margin='0px 0px 0px 120px' borderRadius='10px' p='30px 10px 10px 10px'
          >

            <Text  color='black' align='center' fontSize='36px' fontWeight='bold'>
              Thay đổi mật khẩu</Text>
            <Text color='black'mt='20px' marginLeft='60px'>Mật khẩu cũ</Text>

            <Input
               type='password'
               color="black"
               placeholder='Nhập mật khẩu cũ'
               outline={"2px"}
               focusBorderColor='black'
               borderColor='#42C2FF'
               outlineColor='#42C2FF'
               borderRadius="10px"
               border="2px"
               w="310px"
               h="30px"
               m='10px 0px 10px 60px'
            />
            <Text color='black' marginLeft='60px'>Mật khẩu mới</Text>
            <Input 
             type='password'
             color="black"
             placeholder='Nhập mật khẩu mới'
             outline="2px"
             focusBorderColor='black'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="310px"
             h="30px"
             margin='10px 0px 10px 60px'
            />
            <Text color='black' marginLeft='60px'>Xác nhận mật khẩu</Text>
            <Input 
             type='password'
             placeholder='Nhập mật khẩu xác nhận'
             color="black"
             outline="2px"
             focusBorderColor='black'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="310px"
             h="30px"
             margin='10px 0px 10px 60px'
            />
                  
          <Button 
            bgColor='#42C2FF'
            color='white'
            size='lg'
            borderRadius="10px"
            w="245px"
            h="35px"
            margin='20px 0px 20px 92px'
          >Lưu</Button>
        </Box>
        );
}


ChangePassword.propTypes = {

};

export default ChangePassword;