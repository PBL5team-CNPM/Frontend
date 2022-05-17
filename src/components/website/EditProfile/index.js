import React from 'react';
import { Box, Button,  Input, Radio, RadioGroup, Stack, Text} from '@chakra-ui/react'


function EditProfile() {
        const [value, setValue] = React.useState('1')
        return (
          <Box bgColor='white' w='450px' h='500px' 
          boxShadow='10px 10px 10px #7c76ad'
          margin='0px 0px 0px 120px' borderRadius='10px' p='20px 10px 10px 10px'
          >

            <Text  color='black' align='center' fontSize='36px' fontWeight='bold'>
              Sửa thông tin</Text>
            <Text color='black'mt='20px' marginLeft='60px'>Họ và tên</Text>

            <Input
               type='text'
               color="black"
               placeholder='Nhập họ và tên'
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
            <Text color='black' marginLeft='60px'>Email</Text>
            <Input 
             type='email'
             color="black"
             placeholder='Nhập Email'
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
            <Text color='black' marginLeft='60px'>Ngày sinh</Text>
            <Input 
             type='date'
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
            <Text color='black' marginLeft='60px'>Giới tính</Text>
            <RadioGroup onChange={setValue} value={value}
                      margin='5px 0px 0px 110px' color='black'>
               <Stack direction='row'>
                <Radio value='1' marginRight='70px' borderColor='#42C2FF' >Nam</Radio>
                <Radio value='2'  borderColor='#42C2FF' >Nữ</Radio>
               </Stack>
            </RadioGroup>
                  
          <Button 
            colorScheme='blue'
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


EditProfile.propTypes = {

};

export default EditProfile;