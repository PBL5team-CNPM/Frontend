import React from "react";
import {Input, InputGroup, InputRightElement, Button, IconButton} from '@chakra-ui/react'
import {Search2Icon} from  '@chakra-ui/icons'

const SearchBar = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <InputGroup ml='' size='lg'>
            <Input
                border='2px'
                isInvalid
                errorBorderColor='#42C2FF'
                focusBorderColor='white'
                borderRadius='12px'
                pr='24rem'
                type='text'
                placeholder='Enter password'
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