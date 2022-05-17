import React from 'react';
import { Box, Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Image} from '@chakra-ui/react'

function ShowDataUsers() {
        return (
            <Box >
                <Heading mt='10px' textAlign='center' textShadow='2px 3px 4px #000'>Thông tin khách hàng</Heading>
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
                        <Td ><Image h='40px' w='42px' src={require('../../../imgs/view.png')}/></Td>
                       </Tr>
                      <Tr>
                        <Td>01/04/2022</Td>
                        <Td>Lê Công Phúc</Td>
                        <Td>lcp@gmail.com</Td>
                        <Td ><Image h='40px' w='42px' src={require('../../../imgs/view.png')}/></Td>
                     </Tr>
                     <Tr>
                        <Td>31/03/2022</Td>
                        <Td>Huỳnh Hải Phong</Td>
                        <Td>hhp@gmail.com</Td>
                        <Td ><Image h='40px' w='42px' src={require('../../../imgs/view.png')}/></Td>
                     </Tr>
                     <Tr>
                        <Td>30/03/2022</Td>
                        <Td>Bùi Quốc Huy</Td>
                        <Td>bqh@gmail.com</Td>
                        <Td><Image h='40px' w='42px' src={require('../../../imgs/view.png')}/></Td>
                     </Tr>
                     <Tr>
                        <Td>29/03/2022</Td>
                        <Td>Nguyễn Văn A</Td>
                        <Td>nva@gmail.com</Td>
                        <Td><Image h='40px' w='42px' src={require('../../../imgs/view.png')}/></Td>
                     </Tr>
                     <Tr>
                        <Td>28/03/2022</Td>
                        <Td>Lê Thị B</Td>
                        <Td>ltb@gmail.com</Td>
                        <Td><Image h='40px' w='42px' src={require('../../../imgs/view.png')}/></Td>
                     </Tr>
                     
                   </Tbody>
                 </Table>
               </TableContainer>
          </Box>
        );
}


export default ShowDataUsers;