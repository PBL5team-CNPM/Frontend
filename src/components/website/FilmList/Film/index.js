
import { 
    Box,
    Image,
    Button,
    Heading,
    Text
} from '@chakra-ui/react'



const Film = () => {
    return(
        <Box>
            <Text bgColor='blackAlpha.600' color='white' pos='absolute'>THE BAT MAN</Text>
            <Image
                src="https://www.thebatman.com/images/share.jpg"
                w='490px'
                h='250px'
                objectFit='cover'
            />
        </Box>
    )
}

export default Film