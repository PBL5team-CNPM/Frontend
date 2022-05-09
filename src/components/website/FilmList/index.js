
import React from "react"
import { 
    Box,
    SimpleGrid
} from '@chakra-ui/react'
import Film from "./Film"

const FilmList = () => {
    return(
        <SimpleGrid columns={[2, null, 3]} spacing='70px'>
            <Film/>
            <Film/>
            <Film/>
            <Film/>
            <Film/>
            <Film/>
        </SimpleGrid>
    )
}

export default FilmList