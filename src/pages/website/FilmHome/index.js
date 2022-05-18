import React from "react"
import FilmList from "../../../components/website/FilmList"
import { Box, Tabs, TabList, Tab, TabPanel, TabPanels, Center } from '@chakra-ui/react'
import Footer from "../../../components/website/Footer"
import SliderShow from "../../../components/website/SliderShow"
import DataFilmList from "../../../components/website/FilmList/DataFilmList"
import DataUpcomingFilmList from "../../../components/website/FilmList/DataUpcomingFilmList"

const FilmHome = ()=> {
    return(
        <Box>
            <SliderShow/>
            <Center  mt='12px'>
            <Tabs w='4xl' colorScheme='orange'>
                <TabList>
                    <Tab>PHIM ĐANG CHIẾU</Tab>
                    <Tab>PHIM SẮP CHIẾU</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <FilmList data = {DataFilmList}/>
                    </TabPanel>
                    <TabPanel>
                        <FilmList data = {DataUpcomingFilmList}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </Center>
        <Footer/>
        </Box>

    )
}

export default FilmHome