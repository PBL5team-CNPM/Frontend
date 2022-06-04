import React, { useState } from 'react';
import { Box,  Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer} from '@chakra-ui/react'
import DialogAddRoom from '../DialogAddRoom';
import DialogDeleteRoom from '../DialogDeleteRoom';
import DialogUpdateRoom from '../DialogUpdateRoom';
import axios from 'axios';
function ShowDataCinemaRoom(){
    const [listRoom,setListRoom]=useState([])
    const [message,setMessage]= useState('')
    const callbackFunction = (childData) => {
      setMessage(childData)
    }
    if(message==='Update' || message===""){ axios.get('http://localhost:8000/api/phongchieus/').
    then(
        res => {
            setListRoom(res.data.data.map((dataRoom)=>{
                return(
                    {
                        id: dataRoom.id,
                        name: dataRoom.ten_phong,
                        row: dataRoom.soluong_day,
                        col: dataRoom.soluong_cot
                    }
                )
                  }))}).catch(error => console.log(error))
                setMessage('waiting update')
                }
    const renderTableData=listRoom.map((room, index) => {
        const { id, name, row, col} = room
        return (
          <Tr key={id}>
            <Td >{index+1}</Td>
            <Td >{name}</Td>
            <Td >{row}</Td>
            <Td >{col}</Td>
            <Td isNumeric> 
            <DialogUpdateRoom data={room} parentCallback={callbackFunction} />
            <DialogDeleteRoom parentCallback={callbackFunction} 
                   data={room}/>
                   </Td>
          </Tr>
        )
      })
    return(
        <Box >
        <Heading fontSize={'6vh'} textAlign='center' textShadow='2px 3px 4px #000'>Danh sách phòng chiếu</Heading>
        <TableContainer  mt='30px' w='100%' 
        boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'>
         <Table variant='striped'>
             <Thead bgColor={'#1F1D36'}>
               <Tr>
                 <Th color='white'>STT</Th>
                 <Th color='white'>Tên phòng</Th>
                 <Th color='white'>Số hàng</Th>
                 <Th color='white'>Số cột </Th>
                 <Th color='white' isNumeric>Action</Th>
               </Tr>
            </Thead>
            <Tbody>
              {renderTableData}
           </Tbody>
         </Table>
       </TableContainer>
       <DialogAddRoom parentCallback={callbackFunction}/>
  </Box>
    )
}

export default ShowDataCinemaRoom