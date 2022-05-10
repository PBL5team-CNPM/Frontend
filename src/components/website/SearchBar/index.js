import React from "react";
import {Input, InputGroup, InputRightElement, IconButton} from '@chakra-ui/react'
import {Search2Icon} from  '@chakra-ui/icons'

const SearchBar = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <InputGroup ml='' size='lg' w='550px'>
            <Input
                border='2px'
                isInvalid
                errorBorderColor='#42C2FF'
                focusBorderColor='white'
                borderRadius='12px'
                type='text'
                placeholder='Tìm kiếm phim, thể loại...'
            />
            <InputRightElement width='3.5rem'>
                <IconButton
                    variant='ghost'
                    h='1.75rem'
                    size='lg'
                    icon ={<Search2Icon/>}
                    onClick={handleClick}
                    color='#42C2FF'
                />
            </InputRightElement>
        </InputGroup>
    )
}

export default SearchBar