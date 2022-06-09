import axios from "axios";
import React, { useState } from "react";
import { Box,  Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer} from '@chakra-ui/react'
import DialogAddPopcorn from "../DialogAddPopcorn";
import DialogUpdatePopcorn from "../DialogUpdatePopcorn";
import DialogDeletePopcorn from "../DialogDeletePopcorn";

const ShowDataPopcorn = () => {
    const [listPopcorn, setListPopcorn] = useState([])
    const [message, setMessage] =useState('')
    const callbackFunction = (childData) => {
        setMessage(childData)
    }

    if(message === 'Update' || message === ""){
        axios.get('http://localhost:8000/api/food_drinks/')
        .then(
            res => {
                setListPopcorn(
                    res.data.data.map((popcorn) => {
                        return(
                            {
                                id: popcorn.id,
                                ten: popcorn.ten,
                                gia: popcorn.gia,
                                food_drink_bill: popcorn.food_drink_bill
                            }
                        )
                    })
                )
            }
        ).catch(error => console.log(error))
        setMessage('waiting update')
    }

    console.log(listPopcorn)

    const renderTableData=listPopcorn.map((popcorn, index) => {
        const { id, ten, gia, food_drink_bill} = popcorn
        return (
            <Tr key={id}>
                <Td >{index+1}</Td>
                <Td >{ten}</Td>
                <Td >{gia} đ</Td>
                <Td >{food_drink_bill}</Td>
                <Td isNumeric> 
                <DialogUpdatePopcorn data={popcorn} parentCallback={callbackFunction} />
                <DialogDeletePopcorn parentCallback={callbackFunction} 
                    data={popcorn}/>
                    </Td>
            </Tr>
            )
        })

    return(
        <Box >
            <Heading fontSize={'6vh'} textAlign='center' textShadow='2px 3px 4px #000'>Danh sách Bắp nước</Heading>
            <TableContainer  mt='30px' w='100%' 
            boxShadow='0px 3px 3px 3px rgb(131, 131, 131)'>
                <Table variant='striped'>
                    <Thead bgColor={'#1F1D36'}>
                    <Tr>
                        <Th color='white'>STT</Th>
                        <Th color='white'>Tên thực phẩm</Th>
                        <Th color='white'>Giá</Th>
                        <Th color='white'>Đã bán</Th>
                        <Th color='white' isNumeric>Action</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {renderTableData}
                    </Tbody>
                </Table>
            </TableContainer>
            <DialogAddPopcorn parentCallback={callbackFunction}/>
        </Box>
    )
}

export default ShowDataPopcorn