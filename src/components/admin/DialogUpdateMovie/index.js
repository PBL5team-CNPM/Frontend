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
    useToast,
  } from '@chakra-ui/react'
  import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';

function DialogUpdateMovie(props){
    const toast=useToast()
    const [Theloai,setTheloai]=useState(props.dataphim.theloai)
    const SelectCategory = val => {
      setTheloai(val)
      console.log(Theloai)
    }
    const [values, setValues] = useState(
      {
        title: props.dataphim.title,
        trailer: props.dataphim.trailer,
        imageUrl: props.dataphim.imageUrl,
        time: props.dataphim.time,
        length: props.dataphim.length,
        director: props.dataphim.director,
        actor: props.dataphim.actor,
        content: props.dataphim.content,
        finish:props.dataphim.finish,
      }
    )
    const { isOpen,onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const category=props.datatheloai;

    const handleSubmit = (e) => {
      if(values.title==="" || values.trailer==="" ||values.imageUrl==="" || !Theloai.length ||
      values.length==="" ||values.director==="" ||values.actor==="" ||values.content==="" ){
        e.preventDefault();
        const a=[]
        function xulyTheloai(item,index,arr){
            a.push(arr[index].id)
       }
       Theloai.forEach(xulyTheloai)
       console.log(a)
        toast({
          title: 'Warning!',
          description: "Hãy nhập đủ thông tin.",
          status: 'warning',
          duration: 2000,
          isClosable: true,
        })
      }
      else{
      e.preventDefault();
      const phim = {
        ten: values.title,
        trailer: values.trailer,
        poster: values.imageUrl,
        ngay_chieu: values.time,
        thoiluong: values.length,
        dao_dien: values.director,
        dien_vien: values.actor,
        tom_tat: values.content,
        ngay_ketthuc: values.finish,
        theloai: []
      }
      function xulyTheloai(item,index,arr){
         phim.theloai.push(arr[index].id)
      }
      Theloai.forEach(xulyTheloai)
      console.log(phim.theloai)
      
      axios.put(`http://localhost:8000/api/updatephim/${props.dataphim.id}`, phim).then(res => {

      }).catch(error=>{
            console.log(error)
      })
     
      toast({
        title: 'Successfully!',
        description: "Đã sửa phim "+values.title+".",
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
        (JSON.parse(localStorage.getItem('user-info')).action.includes("EditPhim"))
        ?
        <Button mr='5px' size='sm' colorScheme='blue' onClick={onOpen}>Sửa</Button>
        :
        <Button mr='5px' size='sm' disabled colorScheme='blue' onClick={onOpen}>Sửa</Button>
      }
       <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size='4xl' 
        
        >
          
        <AlertDialogOverlay >
          <AlertDialogContent alignSelf={'center'}  bgColor='#1F1D36' border='2px' borderColor='#42C2FF' 
          >
            <form onSubmit={handleSubmit}>
              <AlertDialogHeader fontSize='2xl' fontWeight='bold'
              color='white' textAlign='center'>
                Sửa phim
              </AlertDialogHeader>

              <AlertDialogBody color='white'>
              
              <Center>
                <Flex>
                <Box mr='35px'>
                  <Box mb='15px'>
                    <Text mb='10px'>Tên phim (*)</Text>
                    <Input w='360px' h='45px' type='text' 
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
                                content: values.content,
                                finish: values.finish,
                                 
                              })}}
                    />
                  </Box>

                  <Box mb='15px'>
                    <Text mb='10px'>Thời lượng (*)</Text>
                    <Input w='360px' h='45px' type='number' 
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
                    content: values.content,
                    finish: values.finish,
                      
                  })}}
                    />
                  </Box>

                  <Box mb='15px'>
                    <Text mb='10px'>Trailer (*)</Text>
                    <Input w='360px' h='45px' type='url'
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
                    content: values.content,
                    finish: values.finish,
                       
                  })}}
                    />
                  </Box>

                  <Box mb='15px'>
                    <Text mb='10px'>Đạo diễn (*)</Text>
                    <Input w='360px' h='45px' type='text' 
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
                    content: values.content,
                    finish: values.finish,
                     
                  })}}
                    />
                  </Box>

                  <Box >
                    <Text mb='10px'>Thể loại (*)</Text>
                    <Multiselect className='mse-category' 
                    placeholder='Chọn thể loại' hidePlaceholder='true'
                    selectedValues={Theloai}
                    options={category} showCheckbox='true' displayValue="ten_the_loai"
                    onSelect={SelectCategory}
                    onRemove={SelectCategory}
                    avoidHighlightFirstOption='true'
                    style={ {chips: { background: "#42C2FF" },
                    searchBox: {color:"white", border: "2px solid #42C2FF",  "borderRadius": "10px"}} }
                    />
                  </Box>
                  </Box>
                  <Box>
                 

                  <Box mb='15px'>
                    <Text mb='10px'>Ngày bắt đầu chiếu</Text>
                    <Input w='360px' h='45px' type='date'
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
                    content: values.content,
                    finish: values.finish,
                     
                  })}}
                    />
                  </Box>

                  <Box mb='15px'>
                    <Text mb='10px' >Ngày kết thúc dự kiến</Text>
                    <Input w='360px' h='45px' type='date'
                    focusBorderColor='white'
                    border='2px'
                    borderRadius='10px'
                    borderColor='#42C2FF'
                    value={values.finish}
                    onChange={(e)=>{setValues({
                    title: values.title,
                    trailer: values.trailer,
                    imageUrl: values.imageUrl,
                    time: values.time,
                    length: values.length,
                    director: values.director,
                    actor: values.actor,
                    content: values.content,
                    finish: e.target.value,
                     
                  })}}
                    />
                  </Box>

                  <Box mb='15px'>
                    <Text mb='10px'>Poster Phim (*)</Text>
                    <Input w='360px' h='45px' type='text' 
                    focusBorderColor='white'
                    placeholder='Nhập link poster'
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
                    content: values.content,
                    finish: values.finish,
                     
                  })}}
                    />
                  </Box>

                  <Box mb='15px'>
                    <Text mb='10px'>Diễn viên (*) </Text>
                    <Input w='360px' h='45px' type='text' 
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
                    content: values.content,
                    finish: values.finish,
                     
                  })}}
                    />
                  </Box>

                  <Box>
                    <Text mb='10px'>Nội dung (*)</Text>
                    <Textarea w='360px'  type='text' 
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
                    content: e.target.value,
                    finish: values.finish,
                     
                  })}}
                    />
                  </Box>
                </Box>
                </Flex>
                </Center>
                
              </AlertDialogBody>
             
              <AlertDialogFooter>
                <Button colorScheme='red' ref={cancelRef} onClick={onClose}>
                  Hủy
                </Button>
                <Button type='submit' colorScheme='green' ml={3} onClick={onClose}>
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



export default DialogUpdateMovie;