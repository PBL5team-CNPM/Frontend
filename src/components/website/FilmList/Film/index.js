
import { 
    Box,
    Image,
    Button,
    Heading,
    Center,
} from '@chakra-ui/react'
import { useState } from 'react'
import PlayTrailer from '../../PlayTrailer'



const Film = (props) => {
    const [style, setStyle] = useState({opacity: 0})
    return(
        <Box
            onMouseLeave={(e) => {setStyle({opacity: 0})}}
            onMouseEnter ={(e) => {setStyle({opacity: 1})}}
            >
            <Heading transition='0.7s' style={style} fontSize='30px' ml='20px' mt='20px' bgColor='' color='white' pos='absolute' noOfLines={2} maxW='400px'>{props.data.title}</Heading>
            <Box ml='80px' mt='350px' pos='absolute'>
                <Button transition='0.7s' style={style} bgColor='rgb(255,0,0,0.5)' mr='10px' colorScheme='red'>Mua vé</Button>
                <Button  transition='0.7s' style={style} bgColor='rgb(0,0,255,0.5)' colorScheme='blue'>Chi tiết</Button>
            </Box>
            <Box ml='130px' mt='180px' pos='absolute' 
            onClick={(e) => {setStyle({opacity: 0})}} >
                <PlayTrailer styleProp={style}/>
            </Box>
            <Box w='320px' h='420px' bgColor='black' pt='10px'>
            <Center>
              <Image w='300px' h='400px' border='2px' 
                src={props.data.imageUrl} borderColor='white'
                objectFit='cover'
            />
            </Center>
            </Box>
           
        </Box>
    )
}

export default Film