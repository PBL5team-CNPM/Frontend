import React from 'react';
import { Box, Heading,
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
    IconButton} from '@chakra-ui/react'
import ViewUsersInFo from '../ViewUsersInfo';
import { Search2Icon } from '@chakra-ui/icons';

function ShowDataUsers() {
       const [show, setShow] = React.useState(false)
       const handleClick = () => setShow(!show)
        return (
            <Box >
                <Heading mt='10px' textAlign='center' textShadow='2px 3px 4px #000'>Thông tin khách hàng</Heading>

                <Flex mt='20px'>
                 <Select focusBorderColor='none' size='sm' w='135px' 
                  shadow='0px 3px 3px 3px rgb(131, 131, 131)'
                   mt='10px' ml='70px'>
                   <option value='option1'>Mới nhất</option>
                   <option value='option2'>A-Z</option>
                   <option value='option3'>Z-A</option>
                 </Select>
                
                 <InputGroup ml='435px' size='md' w='450px' mt='5px'>
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
                <TableContainer  mt='30px' ml='70px' w='1020px' h='450px' 
                boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'
               overflowY='auto'>
                 <Table variant='striped'>
                     <Thead>
                       <Tr>
                         <Th>Ngày đăng kí</Th>
                         <Th>Tên khách hàng</Th>
                         <Th>Email</Th>
                         <Th >Chi tiết
                         </Th>
                       </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>02/04/2022</Td>
                        <Td>Bùi Văn Nhật Trường</Td>
                        <Td>bvnt@gmail.com</Td>
                        <Td ><ViewUsersInFo/></Td>
                       </Tr>
                      <Tr>
                        <Td>01/04/2022</Td>
                        <Td>Lê Công Phúc</Td>
                        <Td>lcp@gmail.com</Td>
                        <Td ><ViewUsersInFo/></Td>
                     </Tr>
                     <Tr>
                        <Td>31/03/2022</Td>
                        <Td>Huỳnh Hải Phong</Td>
                        <Td>hhp@gmail.com</Td>
                        <Td ><ViewUsersInFo/></Td>
                     </Tr>
                     <Tr>
                        <Td>30/03/2022</Td>
                        <Td>Bùi Quốc Huy</Td>
                        <Td>bqh@gmail.com</Td>
                        <Td><ViewUsersInFo/></Td>
                     </Tr>
                     <Tr>
                        <Td>29/03/2022</Td>
                        <Td>Nguyễn Văn A</Td>
                        <Td>nva@gmail.com</Td>
                        <Td><ViewUsersInFo/></Td>
                     </Tr>
                     <Tr>
                        <Td>28/03/2022</Td>
                        <Td>Lê Thị B</Td>
                        <Td>ltb@gmail.com</Td>
                        <Td><ViewUsersInFo/></Td>
                     </Tr>
                     
                   </Tbody>
                 </Table>
               </TableContainer>
          </Box>
        );
}


export default ShowDataUsers;