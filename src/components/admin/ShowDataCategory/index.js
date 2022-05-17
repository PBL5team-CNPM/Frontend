import React from 'react';
import { Box, Button, Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer} from '@chakra-ui/react'
import DialogAddCategory from '../DialogAddCategory';

function ShowDataCategory() {
        return (
            <Box >
                <Heading mt='10px' textAlign='center' textShadow='2px 3px 4px #000'>Danh sách thể loại</Heading>
                <TableContainer  mt='30px' ml='70px' w='1020px' h='450px' 
                boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'
               overflowY='auto'>
                 <Table variant='striped'>
                     <Thead>
                       <Tr>
                         <Th>Ngày cập nhật</Th>
                         <Th>Tên thể loại</Th>
                         <Th>Phim</Th>
                         <Th isNumeric>Action
                         </Th>
                       </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>02/04/2022</Td>
                        <Td>Hành động</Td>
                        <Td>6</Td>
                        <Td isNumeric>
                            <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                            <Button size='sm' colorScheme='red'>Xóa</Button>
                        </Td>
                       </Tr>
                      <Tr>
                        <Td>01/04/2022</Td>
                        <Td>Hài hước</Td>
                        <Td>4</Td>
                        <Td isNumeric>
                            <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                            <Button size='sm' colorScheme='red'>Xóa</Button>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>31/03/2022</Td>
                        <Td>Trinh thám</Td>
                        <Td>9</Td>
                        <Td isNumeric>
                            <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                            <Button size='sm' colorScheme='red'>Xóa</Button>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>30/03/2022</Td>
                        <Td>Tội phạm</Td>
                        <Td>5</Td>
                        <Td isNumeric>
                            <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                            <Button size='sm' colorScheme='red'>Xóa</Button>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>29/03/2022</Td>
                        <Td>Kinh dị</Td>
                        <Td>3</Td>
                        <Td isNumeric>
                            <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                            <Button size='sm' colorScheme='red'>Xóa</Button>
                        </Td>
                     </Tr>
                   
                     
                   </Tbody>
                 </Table>
               </TableContainer>
               <DialogAddCategory/>
          </Box>
        );
}


export default ShowDataCategory;