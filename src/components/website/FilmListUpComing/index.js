
import React from "react"
import { 
    Box,
    SimpleGrid
} from '@chakra-ui/react'
import FilmUpcoming from "./FilmUpcoming"

const FilmListUpcoming = (props) => {
    const {data} = props
    const List = data.map((item)=>(
        <FilmUpcoming data = {item} key = {data.id} />
    ))

    return(
        <SimpleGrid columns={[2, null, 4]} spacing='70px'>
            {List}
        </SimpleGrid>
    )
}

export default FilmListUpcoming