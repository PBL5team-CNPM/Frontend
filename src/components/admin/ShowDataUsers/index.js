import React, { useState } from 'react';
import { Box, Heading,Image,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Select,
    InputGroup,
    Input,
    InputRightElement,
    IconButton,
    Spacer,} from '@chakra-ui/react'
import ViewUsersInFo from '../ViewUsersInfo';
import { Search2Icon } from '@chakra-ui/icons';
import axios from 'axios'
import DialogDeleteUsers from '../DialogDeleteUsers';
import DialogGrantPermission from '../DialogGrantPermission';

function ShowDataUsers() {
       const [show, setShow] = useState(false)
       const handleClick = () => setShow(!show)


      const [listusers, setListUsers] = useState([])
      const [message,setMessage]= useState('')
      const callbackFunction = (childData) => {
        setMessage(childData)
      }

      if(message==='Update' || message===""){ 
        axios.get('http://localhost:8000/api/users/').
        then(
            res => {
                setListUsers(res.data.map((dataUser)=>{
                    return(
                        {
                            id: dataUser.id,
                            username: dataUser.name,
                            email: dataUser.email,
                            fullname: dataUser.realname,
                            phoneNumber:dataUser.phone_number,
                            gender: dataUser.gender,
                            birth:dataUser.birth,
                            avatar :dataUser.avatar,
                            permission:dataUser.permission,
                            action:dataUser.action,
                            role:dataUser.role
                        }
                    )
                }))
            }
        ).catch(error => console.log(error))
        setMessage('wait update')
          }

        const renderTableData=listusers.map((user, index) => {
          const { id, username , email, avatar} = user
          return (
            <Tr key={id}>
              <Td >{index+1}</Td>
              <Td >
                <Flex alignItems={'center'}>
                <Box mr='10px' w='84px'  h='84px' bgColor={'black'} pt='3px' pl='3px' 
                borderRadius='50%'>
                <Box w='78px'  h='78px' bgColor={'white'} pt='1px' pl='1px' borderRadius='50%'>
                <Box w='76px'  h='76px' bgColor={'black'} pt='3px' pl='3px' borderRadius='50%'>
                {avatar?<Image src={'http://localhost:8000/'+ avatar} 
                 w='70px'  h='70px' borderRadius='50%'/>
                 :
                 <Image src={require('../../../imgs/default_avatar.png')} 
                 w='70px'  h='70px' borderRadius='50%'/>}  
      
                </Box>
                </Box>
                </Box>
                 {username}
                </Flex>
                </Td>
              <Td >{email}</Td>
              <Td ><ViewUsersInFo data={user}/></Td>
              <Td isNumeric> 
              <DialogGrantPermission parentCallback={callbackFunction}
                datauser={user}/>

                  <DialogDeleteUsers parentCallback={callbackFunction}
                  username={username} idUser={id}/></Td>
            </Tr>
          )
        }) 
        return (
            <Box w='100%' h='100%'>
                <Heading textAlign='center' textShadow='2px 3px 4px #000'
                fontSize='6vh'>Thông tin khách hàng</Heading>

                <Flex mt='2%' w='100%' h='9%' alignItems={'center'}>
                 <Select focusBorderColor='none' w='125px' h='100%' size={'sm'}
                  shadow='0px 3px 3px 3px rgb(131, 131, 131)'>
                   <option value='option1'>Mới nhất</option>
                   <option value='option2'>A-Z</option>
                   <option value='option3'>Z-A</option>
                 </Select>
                 <Spacer/>
                 <InputGroup size='md' w='35%' h='100%'>
                 <Input
                    border='2px'
                    focusBorderColor='none'
                    shadow='0px 3px 3px 3px rgb(131, 131, 131)'
                    borderRadius='12px'
                    type='text'
                    placeholder='Tìm kiếm khách hàng...'
                 />
                 <InputRightElement width='3.5rem'>
                    <IconButton
                      variant='ghost'
                      h='1.75rem'
                      size='lg'
                      icon ={<Search2Icon/>}
                      onClick={handleClick}
                      color='black'
                    />
                 </InputRightElement>
                 </InputGroup>

                </Flex>
                <TableContainer  mt='3%'  w='100%' 
                boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'>
                 <Table variant='striped' >
                   <Thead bgColor={'#1F1D36'}  >
                       <Tr >
                         <Th  color={'white'}>STT</Th>
                         <Th  color={'white'}>Tài khoản</Th>
                         <Th  color={'white'}>Email</Th>
                         <Th  color={'white'}>Chi tiết </Th>
                         <Th isNumeric color={'white'}>Action</Th>
                       </Tr>
                    </Thead>
                    <Tbody>
                    {renderTableData}
                   </Tbody>
                 </Table>
               </TableContainer>
          </Box>
        );
}


export default ShowDataUsers;