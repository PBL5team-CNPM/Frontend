import {React, useState, useEffect} from "react"
import FilmList from "../../../components/website/FilmList"
import FilmListUpcoming from "../../../components/website/FilmListUpComing"
import { Box, Tabs, TabList, Tab, TabPanel, TabPanels, Center } from '@chakra-ui/react'
import Footer from "../../../components/website/Footer"
import SliderShow from "../../../components/website/SliderShow"
import axios from 'axios'

const FilmHome = ()=> {
    const listphimdangchieu = []
    const listphimsapchieu = []
    const [listphim, setListphim] = useState([])
    function xulyphim(item, index, arr){
        if(Date.parse((arr[index].time)) <= Date.now()){
            listphimdangchieu.push(arr[index])
        }
        else {
            listphimsapchieu.push(arr[index])
        }
    }
    useEffect( ()=> {
        axios.get('http://localhost:8000/api/phims/').
        then(
            res => {
                console.log(res.data)
                setListphim(res.data.map((dataphim)=>{
                    return(
                        {
                            id: dataphim.id,
                            title: dataphim.ten,
                            trailer: dataphim.trailer,
                            imageUrl: dataphim.poster,
                            time:dataphim.ngay_chieu,
                            length: dataphim.thoiluong,
                            director:dataphim.dao_dien,
                            actor:dataphim.dien_vien,
                            category:"dsadsad",
                            content:dataphim.tom_tat,
                            finish:dataphim.ngay_ketthuc,
                            theloai:dataphim.theloai
                        }
                    )
                }))
            }
        ).catch(error => console.log(error))
    }, [])
    

    listphim.forEach(xulyphim);
    console.log(listphimdangchieu)
    console.log(listphimsapchieu)

    return(
        <Box>
            <SliderShow/>
            <Center  mt='12px'>
            <Tabs w='6xl' colorScheme='orange'>
                <TabList>
                    <Tab>PHIM ĐANG CHIẾU</Tab>
                    <Tab>PHIM SẮP CHIẾU</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <FilmList data = {listphimdangchieu}/>
                    </TabPanel>
                    <TabPanel>
                        <FilmListUpcoming data = {listphimsapchieu}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </Center>
        <Footer/>
        </Box>

    )
}

export default FilmHome