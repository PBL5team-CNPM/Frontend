import React from 'react';
import { Box, Button,  Input, Text} from '@chakra-ui/react'


function EditProfile() {
        return (
          <Box bgColor='white' w='445px' h='450px' 
          boxShadow='10px 10px 10px #7c76ad'
          margin='100px 0px 0px 80px' borderRadius='10px'
          padding='10px'>
            
            <Text color='black'marginTop='20px' marginLeft='60px'>Username</Text>

            <Input
               type='text'
               color="black"
               outline={"2px"}
               focusBorderColor='white'
               borderColor='#42C2FF'
               outlineColor='#42C2FF'
               borderRadius="10px"
               border="2px"
               w="230"
               h="25"
               margin='20px 0px 20px 60px'
            />
            <Text color='black' marginLeft='60px'>Email</Text>
            <Input 
             type='email'
             color="black"
             outline="2px"
             focusBorderColor='white'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="230"
             h="25"
             margin='20px 0px 20px 60px'
            />
            <Text color='black' marginLeft='60px'>DoB</Text>
            <Input 
             type='date'
             color="black"
             outline="2px"
             focusBorderColor='white'
             borderColor='#42C2FF'
             errorBorderColor="#42C2FF"
             border="2px"
             borderRadius="10px"
             w="230"
             h="25"
             margin='20px 0px 20px 60px'
            />
            <Text color='black' marginLeft='60px'>Gender</Text>
            <div size='lg'
            borderRadius="10px"
            w="230"
            h="25"
            margin='10px 60px 20px 60px'
            >
                <input type="radio" value="Male" name="gender"/> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
            </div>
                  
          <Button 
            bgColor='#42C2FF'
            color='white'
            size='lg'
            borderRadius="10px"
            w="230"
            h="25"
            margin='10px 0px 20px 60px'
          >Save</Button>

          <Button 
            bgColor='#42C2FF'
            color='white'
            size='lg'
            borderRadius="10px"
            w="230"
            h="25"
            margin='10px 0px 20px 60px'
          >Cancel</Button>
        </Box>
        );
}


EditProfile.propTypes = {

};

export default EditProfile;