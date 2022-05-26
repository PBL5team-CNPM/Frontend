import React, { useEffect, useState } from 'react';
import { Box, Button, Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer} from '@chakra-ui/react'
import DialogAddCategory from '../DialogAddCategory';
import axios from 'axios';

function ShowDataCategory() {
  const [listTheloai,setListTheloai]=useState([])
  useEffect(()=>{axios.get('http://localhost:8000/api/theloais/').
  then(
      res => {
          console.log(res.data)
          setListTheloai(res.data.map((datatheloai)=>{
              return(
                  {
                      id: datatheloai.id,
                      category: datatheloai.ten_the_loai,
                   
                  }
              )
          },
          ))
      }
  ).catch(error => console.log(error))
 }, [])
 
  const renderTableData=listTheloai.map((theloai, index) => {
    const { id, category} = theloai
    return (
      <Tr key={id}>
        <Td >{index+1}</Td>
        <Td >{category}</Td>
        <Td >8</Td>
        <Td isNumeric> <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
            <Button size='sm' colorScheme='red'>Xóa</Button></Td>
      </Tr>
    )
  })
        return (
            <Box >
                <Heading mt='10px' textAlign='center' textShadow='2px 3px 4px #000'>Danh sách thể loại</Heading>
                <TableContainer  mt='30px' ml='70px' w='1020px' maxH='450px' 
                boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'
               overflowY='auto'>
                 <Table variant='striped'>
                     <Thead bgColor={'#1F1D36'}>
                       <Tr>
                         <Th color='white'>STT</Th>
                         <Th color='white'>Tên thể loại</Th>
                         <Th color='white'>Phim</Th>
                         <Th color='white' isNumeric>Action
                         </Th>
                       </Tr>
                    </Thead>
                    <Tbody>
                      {renderTableData}
                   </Tbody>
                 </Table>
               </TableContainer>
               <DialogAddCategory/>
          </Box>
        );
}


export default ShowDataCategory;