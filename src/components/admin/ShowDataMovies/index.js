import React, { useEffect, useState } from 'react';
import { Box, Button, Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer} from '@chakra-ui/react'
    
import DialogAddMovie from '../DialogAddMovie';
import ViewMovieInFo from '../ViewMovieInfo';
import axios from 'axios';

const ShowDataMovies=() => {
  const [listTheloai, setListTheloai] = useState([])
  const [listphim, setListphim] = useState([])
  const listCategory=[]
  function xulytheloai(item, index, arr){
    listCategory.push(arr[index])
}
  useEffect( ()=> {
    axios.get('http://localhost:8000/api/theloais/').
    then(
        res => {
            console.log(res.data)
            setListTheloai(res.data.map((datatheloai)=>{
                return(
                    {
                        id: datatheloai.id,
                        ten_the_loai: datatheloai.ten_the_loai,
                    }
                )
            },
            ))
        }
    ).catch(error => console.log(error))
   }, [])
   useEffect(()=>{
      axios.get('http://localhost:8000/api/phims/').
    then(
        res => {
            setListphim(res.data.map((dataphim)=>{
                return(
                    {
                        id: dataphim.id,
                        title: dataphim.ten,
                        trailer: dataphim.trailer,
                        imageUrl: dataphim.poster,
                        time:dataphim.ngay_chieu,
                        length: dataphim.thoiluong,
                        director:dataphim.dao_dien,
                        actor:dataphim.dien_vien,
                        content:dataphim.tom_tat,
                        finish:dataphim.ngay_ketthuc,
                        theloai:dataphim.theloai
                    }
                )
            }))
        }
    ).catch(error => console.log(error))
   },[])
        listTheloai.forEach(xulytheloai)
        const renderTableData=listphim.map((phim, index) => {
            const { id, title } = phim
            return (
              <Tr key={id}>
                <Td >{index+1}</Td>
                <Td >{title}</Td>
                <Td ><ViewMovieInFo data={listphim[index]}/></Td>
                <Td isNumeric> <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                    <Button size='sm' colorScheme='red'>Xóa</Button></Td>
              </Tr>
            )
          })
        
        return (
            <Box >
                <Heading mt='10px' textAlign='center' textShadow='2px 3px 4px #000'>Danh sách phim</Heading>
                <TableContainer   mt='30px' ml='70px' w='1030px'  overflowY={'auto'} 
                boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'  maxH={'450px'}
               >
                 <Table  variant={'striped'} >
                     <Thead bgColor={'#1F1D36'} >
                       <Tr >
                         <Th  color={'white'}>STT</Th>
                         <Th  color={'white'}>Tên phim</Th>
                         <Th  color={'white'}>Chi tiết</Th>
                         <Th  isNumeric  color={'white'}>Action
                         </Th>
                       </Tr>
                    </Thead>
                    
                    <Tbody >
                     {renderTableData}
                    </Tbody>
              
                    
                 </Table>
               </TableContainer>
               <DialogAddMovie data={listCategory}/>
          </Box>
        );
}


export default ShowDataMovies;