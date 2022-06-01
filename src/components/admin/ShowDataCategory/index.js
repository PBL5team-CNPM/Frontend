import React, { useState } from 'react';
import { Box,  Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer} from '@chakra-ui/react'
import DialogAddCategory from '../DialogAddCategory';
import axios from 'axios';
import DialogUpdateCategory from '../DialogUpdateCategory';
import DialogDeleteCategory from '../DialogDeleteCategory';

function ShowDataCategory(props) {
  const [listTheloai,setListTheloai]=useState([])
  const [message,setMessage]= useState('')
  const callbackFunction = (childData) => {
    setMessage(childData)
  }
  
 
  if(message==='Update' || message===""){ axios.get('http://localhost:8000/api/theloais/').
  then(
      res => {
          console.log(res.data)
          setListTheloai(res.data.map((datatheloai)=>{
              return(
                  {
                      id: datatheloai.id,
                      category: datatheloai.ten_the_loai,
                      phim: datatheloai.phim
                  }
              )
                }))}).catch(error => console.log(error))
              props.parentCallback(message)
              setMessage('waiting update')
              }
   
  const renderTableData=listTheloai.map((theloai, index) => {
    const { id, category, phim} = theloai
    console.log(phim.length)
    return (
      <Tr key={id}>
        <Td >{index+1}</Td>
        <Td >{category}</Td>
        <Td >{phim.length}</Td>
        <Td isNumeric> <DialogUpdateCategory parentCallback={callbackFunction}
         idTL={id} tenTL={category}/>
               <DialogDeleteCategory parentCallback={callbackFunction} 
               idTL={id} tenTL={category}/></Td>
      </Tr>
    )
  })
        return (
            <Box >
                <Heading fontSize={'6vh'} textAlign='center' textShadow='2px 3px 4px #000'>Danh sách thể loại</Heading>
                <TableContainer  mt='30px' w='100%' 
                boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'>
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
               <DialogAddCategory parentCallback={callbackFunction}/>
          </Box>
        );
}


export default ShowDataCategory;