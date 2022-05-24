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
  const listCategory=[]
  function xulytheloai(item, index, arr){
    listCategory.push(arr[index].category)
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
                        category: datatheloai.ten_the_loai,
                    }
                )
            },
            ))
        }
    ).catch(error => console.log(error))
}, [])
        listTheloai.forEach(xulytheloai)
        return (
            <Box >
                <Heading mt='10px' textAlign='center' textShadow='2px 3px 4px #000'>Danh sách phim</Heading>
                <TableContainer  mt='30px' ml='70px' w='1020px' h='450px' 
                boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'
               overflowY='auto'>
                 <Table variant='striped'>
                     <Thead>
                       <Tr>
                         <Th>Ngày cập nhật</Th>
                         <Th>Tên phim</Th>
                         <Th>Chi tiết</Th>
                         <Th isNumeric>Action
                         </Th>
                       </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>02/04/2022</Td>
                        <Td>The Batman</Td>
                        <Td><ViewMovieInFo/></Td>
                        <Td isNumeric>
                            <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                            <Button size='sm' colorScheme='red'>Xóa</Button>
                        </Td>
                       </Tr>
                      <Tr>
                        <Td>01/04/2022</Td>
                        <Td>The Witcher</Td>
                        <Td><ViewMovieInFo/></Td>
                        <Td isNumeric>
                            <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                            <Button size='sm' colorScheme='red'>Xóa</Button>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>31/03/2022</Td>
                        <Td>Docter Strange</Td>
                        <Td><ViewMovieInFo/></Td>
                        <Td isNumeric>
                            <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                            <Button size='sm' colorScheme='red'>Xóa</Button>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>30/03/2022</Td>
                        <Td>ETERNALS</Td>
                        <Td><ViewMovieInFo/></Td>
                        <Td isNumeric>
                            <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                            <Button size='sm' colorScheme='red'>Xóa</Button>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>29/03/2022</Td>
                        <Td>Hobs and Shaw</Td>
                        <Td><ViewMovieInFo/></Td>
                        <Td isNumeric>
                            <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                            <Button size='sm' colorScheme='red'>Xóa</Button>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td>28/03/2022</Td>
                        <Td>Spiderman</Td>
                        <Td><ViewMovieInFo/></Td>
                        <Td isNumeric>
                            <Button mr='5px' size='sm' colorScheme='blue'>Sửa</Button>
                            <Button size='sm' colorScheme='red'>Xóa</Button>
                        </Td>
                     </Tr>
                     
                   </Tbody>
                 </Table>
               </TableContainer>
               <DialogAddMovie data={listCategory}/>
          </Box>
        );
}


export default ShowDataMovies;