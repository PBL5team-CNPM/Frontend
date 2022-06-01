import React, { useEffect, useState } from 'react';
import { Box,  Heading,
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
import DialogUpdateMovie from '../DialogUpdateMovie';
import DialogDeleteMovie from '../DialogDeleteMovie';

const ShowDataMovies=(props) => {
  const [listTheloai, setListTheloai] = useState([])
  const [listphim, setListphim] = useState([])
  const listCategory=[]
  const [message,setMessage]= useState('')
  const callbackFunction = (childData) => {
    setMessage(childData)
  }
  function xulytheloai(item, index, arr){
    listCategory.push(arr[index])
}

if(message==='Update' || message===""){ 
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
  props.parentCallback(message)
  setMessage('wait update')
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
            }
            ))
        }
    ).catch(error => console.log(error))
   }, [])
   
        listTheloai.forEach(xulytheloai)
        const renderTableData=listphim.map((phim, index) => {
            const { id, title } = phim
            return (
              <Tr key={id}>
                <Td >{index+1}</Td>
                <Td >{title}</Td>
                <Td ><ViewMovieInFo data={phim}/></Td>
                <Td isNumeric> <DialogUpdateMovie parentCallback={callbackFunction}
                 dataphim={listphim[index]}
                 datatheloai={listCategory}/>
                    <DialogDeleteMovie parentCallback={callbackFunction} 
                    tenPhim={title} idPhim={id}/></Td>
              </Tr>
            )
          })
        
        return (
            <Box >
                <Heading fontSize='6vh' textAlign='center' textShadow='2px 3px 4px #000'>Danh sách phim</Heading>
                <TableContainer  mt='30px'  w='100%' 
                boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'
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
               <DialogAddMovie data={listCategory} parentCallback={callbackFunction}/>
          </Box>
        );
}


export default ShowDataMovies;