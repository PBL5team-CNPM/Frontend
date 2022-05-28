import {
  Center, HStack, Image, Flex, Radio, RadioGroup, Link
} from '@chakra-ui/react'

import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import { useState, useEffect } from 'react'

const SliderShow = () => {
    const [id, setId] = useState(0);
    function autoCount() {
        if(id>=3) {
            setId(0)
        }
        else {
            setId(id + 1)
        }
    }
    function handleClickRight() {
        if(id<3){
            setId(id+1)
        }
        else{
            setId(0)
        }
    }
    function handleClickLeft() {
        if(id!==0){
            setId(id-1)
        }
        else {
            setId(3)
        }
    }
    useEffect(
        () => {
            let time = setInterval(autoCount, 4000)
            return () => clearInterval(time)
        },
    );
    return(
        <Center bgColor='#00051D'>
            <Flex w='1090px' h='572px' overflow='hidden'>
                <Link>
                <Image
                    src="https://www.thebatman.com/images/share.jpg"
                    ml = {id===1 ? '-100%'
                                : id===2 ?
                                '-200%': id===3 ? '-300%': '0%'}
                    minW='1090px'
                    objectFit='cover'
                    transition='2s'
                    id='0'
                />
                </Link>
                <Link>
                <Image
                    src="https://novastreamnetwork.com/wp-content/uploads/2019/12/the_witcher_netflix_promos-2.jpg"
                    ml = {id===1 ? '-100%'
                                : id===2 ?
                                '-200%': id===3 ? '-300%': '0%'}
                    minW='1090px'
                    objectFit='cover'
                    transition='2s'
                    id='1'
                />
                </Link>
                <Link>
                <Image
                    src="https://static0.srcdn.com/wordpress/wp-content/uploads/2022/02/Doctor-Strange-2-Poster.jpeg?q=50&fit=crop&w=767&h=450&dpr=1.5"
                    ml = {id===1 ? '-100%'
                                : id===2 ?
                                '-200%': id===3 ? '-300%': '0%'}
                    minW='1090px'
                    objectFit='cover'
                    transition='2s'
                    id='2'
                />
                </Link>
                <Link>
                <Image
                    src="https://novastreamnetwork.com/wp-content/uploads/2019/12/the_witcher_netflix_promos-2.jpg"
                    ml = {id===1 ? '-100%'
                                : id===2 ?
                                '-200%': id===3 ? '-300%': '0%'}
                    minW='1090px'
                    objectFit='cover'
                    transition='2s'
                    id='3'
                />
                </Link>
            </Flex>
            <RadioGroup mt='500px' pos='absolute' color='white' value={id}>
                <HStack>
                    <Radio value={0} onClick={(e)=> {setId(0)}}></Radio>
                    <Radio value={1} onClick={(e)=> {setId(1)}}></Radio>
                    <Radio value={2} onClick={(e)=> {setId(2)}}></Radio>
                    <Radio value={3} onClick={(e)=> {setId(3)}}></Radio>
                </HStack>
            </RadioGroup>
            <HStack spacing={950} pos='absolute' color='white'>
                <ArrowBackIcon
                    onClick={handleClickLeft}
                    cursor='pointer'
                    boxSize='48px'
                />
                <ArrowForwardIcon
                    onClick={handleClickRight}
                    cursor='pointer' 
                    boxSize='48px'
                />
            </HStack>
        </Center>
    )
}

export default SliderShow