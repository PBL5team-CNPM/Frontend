import React, { useState } from 'react';
import {Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Input,
    Text,
    Flex,
    Center,
    Box,
    useToast} from '@chakra-ui/react'
import axios from 'axios';

function DialogUpdatePopcorn(props){
    const { isOpen,onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast= useToast()
    const [values, setValues] = useState(
        {
            ten: props.data.ten,
            gia: props.data.gia
        }
        )

        const handleSubmit = (e) => {
        if(values.ten==="" || values.gia===""){
            e.preventDefault();
            toast({
            title: 'Warning!',
            description: "Hãy nhập đầy đủ thông tin",
            status: 'warning',
            duration: 2000,
            isClosable: true,
            })
        }
        else if(values.gia < 1000){
            e.preventDefault();
            toast({
                title: 'Warning!',
                description: "Giá phải nhập lớn hơn 1000 đ",
                status: 'warning',
                duration: 2000,
                isClosable: true,
            })
        }
        else{
        e.preventDefault();
        const Popcorn={'ten':values.ten,
                    'gia': values.gia,
                }

        axios.put(`http://localhost:8000/api/updatefooddrink/${props.data.id}`,Popcorn).then(res => {

        }).catch(error=>{
                console.log(error)
        })
        toast({
            title: 'Successfully!',
            description: "Đã sửa  "+values.ten+".",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
        props.parentCallback("Update")
        }
        }
        return(
        <>
        {
            (JSON.parse(localStorage.getItem('user-info')).action.includes("EditCategory"))
            ?
            <Button mr='5px' size='sm' colorScheme='blue' onClick={onOpen}>Sửa</Button>
            :
            <Button mr='5px' size='sm' disabled colorScheme='blue' onClick={onOpen}>Sửa</Button>
        }
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            size='md' 
            >
            <AlertDialogOverlay >
            <AlertDialogContent  bgColor='#1F1D36' border='2px' borderColor='#42C2FF'
            alignSelf='center' 
            ><form onSubmit={handleSubmit}>
                <AlertDialogHeader fontSize='2xl' fontWeight='bold'
                color='white' textAlign='center'>
                Sửa phòng chiếu
                </AlertDialogHeader>

                <AlertDialogBody color='white'>
                <Box >
                    <Center>
                    <Flex mb='20px'>
                    <Text mr='28px'>Tên thực phẩm</Text>
                    <Input w='200px' h='45px' type='text'
                    value={values.ten}
                    focusBorderColor='white'
                    border='2px'
                    borderRadius='10px'
                    borderColor='#42C2FF'
                    placeholder='Nhập tên phòng chiếu' 
                    onChange={(e)=>{setValues({ten: e.target.value,
                                            gia: values.gia,})}} />
                    </Flex>
                    </Center>
                    <Center>
                    <Flex mb='20px'>
                    <Text mr='100px'>Giá</Text>
                    <Input w='200px' h='45px' type='number'
                    value={values.gia}
                    focusBorderColor='white'
                    border='2px'
                    borderRadius='10px'
                    borderColor='#42C2FF'
                    placeholder='Nhập giá' 
                    onChange={(e)=>{setValues({ten: values.ten,
                                            gia: e.target.value,
                                                })}} />
                    </Flex>
                    </Center>
                </Box>
                
                </AlertDialogBody>

                <AlertDialogFooter>
                <Button colorScheme='red' ref={cancelRef} onClick={onClose}>
                    Hủy
                </Button>
                <Button type='submit' colorScheme='green'  ml={3} onClick={onClose}>
                    Sửa
                </Button>
                </AlertDialogFooter>
                </form>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    </>
    )
}



export default DialogUpdatePopcorn;