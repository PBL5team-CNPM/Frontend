import React, { useState } from 'react';
import { Box,  Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Spacer,
    Text} from '@chakra-ui/react'
import DialogAddShowtime from '../DialogAddShowtime';
import DialogDeleteShowtime from '../DialogDeleteShowtime';
import {FcHighPriority} from 'react-icons/fc'
import axios from 'axios';
import moment from 'moment';
function ShowDataShowtime(){
    const [listShowtime,setListShowtime]=useState([])
    const [message,setMessage]= useState('')
    const callbackFunction = (childData) => {
      setMessage(childData)
    }
    if(message==='Update' || message===""){ axios.get('http://localhost:8000/api/suatchieus/').
    then(
        res => {
            setListShowtime(res.data.data.map((dataShowtime)=>{
                return(
                    {
                        id: dataShowtime.id,
                        start: dataShowtime.gio_bat_dau,
                        finish: dataShowtime.gio_ket_thuc,
                        date: dataShowtime.ngay_chieu,
                        idMovie: dataShowtime.phim_id,
                        movie: dataShowtime.phim_name,
                        idRoom: dataShowtime.phongchieu_id,
                        room:dataShowtime.phongchieu_name,
                    }
                )
                  }))}).catch(error => console.log(error))
                setMessage('waiting update')
                }
    const renderTableData=listShowtime.map((showtime, index) => {
        return (
          <Tr key={showtime.id}>
            <Td >{index+1}</Td>
            <Td >
              {Date.parse(showtime.date)>=Date.now()?
              moment(showtime.date).format("DD/MM/YYYY"):
             <Flex alignItems='center'>
              {moment(showtime.date).format("DD/MM/YYYY")} 
              <Box ml='5px'>
               <FcHighPriority/>
              </Box>
              </Flex>}
            </Td>
            <Td >{moment(showtime.start,"h:mm:ss").format("LT")} - 
            {moment(showtime.finish,"h:mm:ss").format("LT")}</Td>
            <Td >{showtime.movie}</Td>
            <Td >{showtime.room}</Td>
            <Td isNumeric> 
        
            <DialogDeleteShowtime parentCallback={callbackFunction} 
                   data={showtime}/>
                   </Td>
          </Tr>
        )
      })
    return(
        <Box >
        <Heading fontSize={'6vh'} textAlign='center' textShadow='2px 3px 4px #000'>Danh sách suất chiếu</Heading>
        <TableContainer  mt='30px' w='100%' 
        boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'>
         <Table variant='striped'>
             <Thead bgColor={'#1F1D36'}>
               <Tr>
                 <Th color='white'>STT</Th>
                 <Th color='white'>Ngày chiếu</Th>
                 <Th color='white'>Thời gian chiếu</Th>
                 <Th color='white'>Phim</Th>
                 <Th color='white'>Phòng chiếu</Th>
                 <Th color='white' isNumeric>Action</Th>
               </Tr>
            </Thead>
            <Tbody>
              {renderTableData}
           </Tbody>
         </Table>
       </TableContainer>
       <Flex alignItems='center'>
       <DialogAddShowtime parentCallback={callbackFunction}/>
       <Spacer/>
       <Flex alignItems='center'>
           <FcHighPriority/>
           <Text userSelect='none' ml='5px'>Ngày chiếu quá hạn</Text>
       </Flex>
       </Flex>
     
  </Box>
    )
}

export default ShowDataShowtime