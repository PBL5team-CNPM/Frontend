import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/website/Footer";
import axios from 'axios'

const TheLoai = () => {
    
    const [phim, setPhim] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8000/api/phims/').
        then(
            res => {
                console.log(res.data)
                setPhim(res.data)
            }
        ).catch(error => console.log(error))
    }, [])
    
    const allphim = phim.map((data)=>{
        return(
            <Box>
                <Box>{data.ten}</Box>
                <Image src={data.poster}/>
                <Box>{data.thoiluong}</Box>
                <Box>{data.dao_dien}</Box>
            </Box>
        )
    })
    
    const listphim = phim.map((dataphim)=>{
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
                content:dataphim.tom_tat
            }
        )
    })

    return(
        <Box>
            
            {console.log(listphim)}
            <Footer/>
        </Box>
    )
}

export default TheLoai