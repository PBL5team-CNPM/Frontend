import React from "react"
import { Box,  Spacer,  Stack } from '@chakra-ui/react'
import SliderShow from "../../../components/website/SliderShow"
import NowShowingSlider from "../../../components/website/NowShowingSlider"
import ComingSoonSlider from "../../../components/website/ComingSoonSlider"

const FilmHome = (props)=> {
   
    return(
        <Box>
            <SliderShow/>
            <Stack minH='640px' color='white' bgColor='#1F1D36'  px={50} py={18}>
                <Box>
                <NowShowingSlider data={props.listphimdangchieu}/>
                </Box>
                <Spacer/><Spacer/>
                <Box>
                <ComingSoonSlider data={props.listphimsapchieu}/>
                </Box>
               
            </Stack>
        </Box>

    )
}

export default FilmHome