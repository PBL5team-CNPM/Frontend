import React from "react"
import FilmList from "../../../components/website/FilmList"
import { Box } from '@chakra-ui/react'
import Footer from "../../../components/website/Footer"

const FilmHome = ()=> {
    return(
        <Box>
          <FilmList/>
           <Footer/>
        </Box>

    )
}

export default FilmHome