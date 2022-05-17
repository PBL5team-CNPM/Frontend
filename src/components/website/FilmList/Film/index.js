
import { 
    Box,
    Image,
    Button,
    Heading,
} from '@chakra-ui/react'
import { useState } from 'react'



const Film = (props) => {
    const [style, setStyle] = useState({opacity: 0})
    return(
        <Box 
            onMouseLeave={(e) => {setStyle({opacity: 0})}}
            onMouseEnter ={(e) => {setStyle({opacity: 1})}}
            >
            <Heading transition='0.7s' style={style} fontSize='32px' ml='20px' mt='20px' bgColor='' color='white' pos='absolute' noOfLines={2} maxW='400px'>{props.data.title}</Heading>
            <Box ml='220px' mt='190px' pos='absolute'>
                <Button transition='0.7s' style={style} bgColor='rgb(255,0,0,0.5)' mr='10px' colorScheme='red'>Mua vé</Button>
                <Button transition='0.7s' style={style} bgColor='rgb(0,0,255,0.5)' colorScheme='blue'>Chi tiết</Button>
            </Box>
            <Image
                src={props.data.imageUrl}
                w='490px' 
                h='250px'
                objectFit='cover'
            />
        </Box>
    )
}

export default Film