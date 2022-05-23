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
    Textarea,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
  import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';
function DialogAddMovie(){
    const [values, setValues] = useState(
      {
        title: "",
        trailer: "",
        imageUrl: "",
        time: "",
        length: "",
        director: "",
        actor: "",
        content: ""
      }
    )
    const { isOpen,onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const [category]=useState(["Kinh dị", "Hài hước", "Tình cảm", 
        "Trinh thám", "Khoa học-viễn tưởng", "Hành động", "Phiêu lưu"]);

    const handleSubmit = (e) => {
      e.preventDefault();
      const phim = {
        ten: values.title,
        trailer: values.trailer,
        poster: values.imageUrl,
        ngay_chieu: values.time,
        thoiluong: values.length,
        dao_dien: values.director,
        dien_vien: values.actor,
        tom_tat: values.content
      }
      console.log(phim)
      
      axios.post('http://localhost:8000/api/addphims', phim).then(res => {

      }).catch(error=>{
            console.log(error)
      })
    }

    return(
    <>
      <Button ml='70px' mt='30px' colorScheme='green' size='lg'
        shadow='0px 3px 3px 3px #344a3b' onClick={onOpen}>Thêm mới</Button>
       
       <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size='xl' 
        
        >
        <AlertDialogOverlay >
          <AlertDialogContent   bgColor='#1F1D36' border='2px' borderColor='#42C2FF' 
          >
            <form onSubmit={handleSubmit}>
              <AlertDialogHeader fontSize='2xl' fontWeight='bold'
              color='white' textAlign='center'>
                Thêm phim
              </AlertDialogHeader>

              <AlertDialogBody color='white'>
                <Box >
                  <Center>
                  <Flex mb='20px'>
                    <Text mr='140px'>Tên phim</Text>
                    <Input w='400px' h='45px' type='text' 
                    focusBorderColor='white'
                    border='2px'
                    borderRadius='10px'
                    borderColor='#42C2FF'
                    placeholder='Nhập tên phim' 
                    value={values.title}
                    onChange={(e)=>{
                      setValues({
                                title: e.target.value,
                                trailer: values.trailer,
                                imageUrl: values.imageUrl,
                                time: values.time,
                                length: values.length,
                                director: values.director,
                                actor: values.actor,
                                content: values.content
                              })}}
                    />
                  </Flex>
                  </Center>

                  <Center>
                  <Flex mb='20px'>
                    <Text mr='125px'>Thời lượng</Text>
                    <Input w='400px' h='45px' type='text' 
                    focusBorderColor='white'
                    border='2px'
                    borderRadius='10px'
                    borderColor='#42C2FF'
                    placeholder='Nhập thời lượng phim'
                    value={values.length}
                    onChange={(e)=>{setValues({
                    title: values.title,
                    trailer: values.trailer,
                    imageUrl: values.imageUrl,
                    time: values.time,
                    length: e.target.value,
                    director: values.director,
                    actor: values.actor,
                    content: values.content})}}
                    />
                  </Flex>
                  </Center>

                  <Center>
                  <Flex mb='20px'>
                    <Text mr='166px'>Trailer</Text>
                    <Input w='400px' h='45px' type='url'
                    focusBorderColor='white'
                    border='2px'
                    borderRadius='10px'
                    borderColor='#42C2FF'
                    placeholder='Nhập url'
                    value={values.trailer}
                    onChange={(e)=>{setValues({
                    title: values.title,
                    trailer: e.target.value,
                    imageUrl:values.imageUrl,
                    time: values.time,
                    length: values.length,
                    director: values.director,
                    actor: values.actor,
                    content: values.content})}}
                    />
                  </Flex>
                  </Center>

                  <Center>
                  <Flex mb='20px'>
                    <Text mr='140px'>Đạo diễn</Text>
                    <Input w='400px' h='45px' type='text' 
                    focusBorderColor='white'
                    border='2px'
                    borderRadius='10px'
                    borderColor='#42C2FF'
                    placeholder='Nhập tên đạo diễn'
                    value={values.director}
                    onChange={(e)=>{setValues({
                    title: values.title,
                    trailer: values.trailer,
                    imageUrl: values.imageUrl,
                    time: values.time,
                    length: values.length,
                    director: e.target.value,
                    actor: values.actor,
                    content: values.content})}}
                    />
                  </Flex>
                  </Center>

                  <Center>
                  <Flex mb='20px'>
                    <Text mr='140px'>Diễn viên</Text>
                    <Input w='400px' h='45px' type='text' 
                    focusBorderColor='white'
                    border='2px'
                    borderRadius='10px'
                    borderColor='#42C2FF'
                    placeholder='Nhập tên các diễn viên'
                    value={values.actor}
                    onChange={(e)=>{setValues({
                    title: values.title,
                    trailer: values.trailer,
                    imageUrl: values.imageUrl,
                    time: values.time,
                    length: values.length,
                    director: values.director,
                    actor: e.target.value,
                    content: values.content})}}
                    />
                  </Flex>
                  </Center>

                  <Center>
                  <Flex mb='20px'>
                    <Text mr='139px'>Nội dung</Text>
                    <Textarea w='400px'  type='text' 
                    focusBorderColor='white'
                    border='2px'
                    borderRadius='10px'
                    borderColor='#42C2FF'
                    placeholder='Nhập nội dung phim'
                    value={values.content}
                    onChange={(e)=>{setValues({
                    title: values.title,
                    trailer: values.trailer,
                    imageUrl: values.imageUrl,
                    time: values.time,
                    length: values.length,
                    director: values.director,
                    actor: values.actor,
                    content: e.target.value})}}
                    />
                  </Flex>
                  </Center>

                  <Center>
                  <Flex mb='20px'>
                    <Text mr='50px'>Ngày bắt đầu chiếu</Text>
                    <Input w='400px' h='45px' type='date'
                    focusBorderColor='white'
                    border='2px'
                    borderRadius='10px'
                    borderColor='#42C2FF'
                    value={values.time}
                    onChange={(e)=>{setValues({
                    title: values.title,
                    trailer: values.trailer,
                    imageUrl: values.imageUrl,
                    time: e.target.value,
                    length: values.length,
                    director: values.director,
                    actor: values.actor,
                    content: values.content})}}
                    />
                  </Flex>
                  </Center>

                  <Center>
                  <Flex >
                    <Text mr='120px'>Poster Phim</Text>
                    <Input w='400px' h='45px' type='text' 
                    focusBorderColor='white'
                    border='2px'
                    borderRadius='10px'
                    borderColor='#42C2FF'
                    value={values.imageUrl}
                    onChange={(e)=>{setValues({
                    title: values.title,
                    trailer: values.trailer,
                    imageUrl: e.target.value,
                    time: values.time,
                    length: values.length,
                    director: values.director,
                    actor: values.actor,
                    content: values.content})}}
                    />
                  </Flex>
                  </Center>

                  <Center>
                  <Flex mt='20px' mb='20px'>
                    <Text mr='150px'>Thể loại</Text>
                    <Multiselect className='mse-category'
                    isObject={false} placeholder='Chọn thể loại' hidePlaceholder='true'
                    options={category}    showCheckbox='true' 
                    avoidHighlightFirstOption='true'
                    style={ {chips: { background: "#42C2FF" }, 
                    searchBox: { border: "2px solid #42C2FF",  "border-radius": "10px"}} }
                    />
                  </Flex>
                  </Center>
                </Box>
                
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button colorScheme='red' ref={cancelRef} onClick={onClose}>
                  Hủy
                </Button>
                <Button type='submit' colorScheme='green' ml={3}>
                  Thêm
                </Button>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
   </>
    )
}



export default DialogAddMovie;