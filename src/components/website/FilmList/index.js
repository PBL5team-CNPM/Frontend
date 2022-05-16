
import React from "react"
import { 
    Box,
    SimpleGrid
} from '@chakra-ui/react'
import Film from "./Film"

const FilmList = (props) => {
    const {data} = props
    const List = data.map((item)=>(
        <Film data = {item} key = {data.id} />
    ))

    return(
        <SimpleGrid columns={[2, null, 3]} spacing='70px'>
            {List}
        </SimpleGrid>
    )
}

export default FilmList