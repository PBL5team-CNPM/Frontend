import React from 'react';
import { Box, Select, Text} from '@chakra-ui/react';
import {
        Table,
        Thead,
        Tbody,
        Tr,
        Th,
        Td,
        TableContainer,
      } from '@chakra-ui/react'

function Revenue() {
        return (
            <Box >
               <Select size='sm' w='135px' placeholder='Chọn phim'
                   mt='10px' ml='50px'>
                  <option value='option1'>Batman</option>
                  <option value='option2'>Docter Strange xsxsdsdsdsd</option>
                  <option value='option3'>One Piece</option>
               </Select>
               <Box w='1020px' h='180px' display='flex' mt='20px' ml='50px'>
                  <Box w='350px' h='180px' mr='60px' p='10px'
                  borderRadius='10px'  boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'>
                     <Text align='center' color='black'>TỔNG</Text>
                     <Text align='center' mt='30px' fontWeight='black' fontSize='36px' color='black'>
                             56.000.000vnd</Text>
                  </Box>

                  <Box w='300px' h='180px' mr='60px' p='10px'
                  borderRadius='10px'  boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'>
                      <Text align='center' color='black'>SỐ LƯỢNG BÁN</Text>
                      <Text align='center' mt='30px' fontWeight='black' fontSize='36px' color='black'>
                             560 vé</Text>
                  </Box>

                  <Box w='250px' h='180px'  p='10px'
                  borderRadius='10px'  boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'>
                     <Text align='center' color='black'>SỐ SUẤT CHIẾU</Text>
                     <Text align='center' mt='30px' fontWeight='black' fontSize='36px' color='black'>
                             16</Text>
                  </Box>
               </Box>
               <TableContainer  mt='30px' ml='50px' h='350px' boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'
               overflowY='auto'>
                 <Table variant='striped'>
                     <Thead>
                       <Tr>
                         <Th>Ngày chiếu</Th>
                         <Th>Số suất chiếu</Th>
                         <Th>Số vé</Th>
                         <Th isNumeric>Thu</Th>
                       </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>02/04/2022</Td>
                        <Td>2</Td>
                        <Td>40</Td>
                        <Td isNumeric>4.000.000vnd</Td>
                       </Tr>
                      <Tr>
                        <Td>01/04/2022</Td>
                        <Td>2</Td>
                        <Td>50</Td>
                        <Td isNumeric>5.000.000vnd</Td>
                     </Tr>
                     <Tr>
                        <Td>31/03/2022</Td>
                        <Td>3</Td>
                        <Td>70</Td>
                        <Td isNumeric>7.000.000vnd</Td>
                     </Tr>
                     <Tr>
                        <Td>30/03/2022</Td>
                        <Td>3</Td>
                        <Td>100</Td>
                        <Td isNumeric>10.000.000vnd</Td>
                     </Tr>
                     <Tr>
                        <Td>29/03/2022</Td>
                        <Td>3</Td>
                        <Td>150</Td>
                        <Td isNumeric>15.000.000vnd</Td>
                     </Tr>
                     <Tr>
                        <Td>28/03/2022</Td>
                        <Td>3</Td>
                        <Td>150</Td>
                        <Td isNumeric>15.000.000vnd</Td>
                     </Tr>
                     
                   </Tbody>
                 </Table>
               </TableContainer>
          </Box>
        );
}


export default Revenue;