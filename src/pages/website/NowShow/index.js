import { ChevronRightIcon } from "@chakra-ui/icons";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading, Icon, Spacer, Stack, Text } from "@chakra-ui/react";
import React  from "react";
import {FaHome} from 'react-icons/fa';
import { Link } from "react-router-dom";
import FilmList from "../../../components/website/FilmList";

function NowShow(props){
    return(
        <Box>
            <Stack minH='640px' color='white' bgColor='#1F1D36'  px={50} py={18}>
              
                <Box>
                <Breadcrumb spacing='8px' separator={<Text fontSize={'32px'}><ChevronRightIcon /></Text>}>
                    <BreadcrumbItem  >
                        <BreadcrumbLink href='#'>
                            <Icon pt='6px' as={FaHome}  fontSize='32px' />
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'><Heading fontSize='24px'>Phim</Heading></BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'><Heading fontSize='24px'>Phim Đang Chiếu</Heading></BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <hr/>
                <Flex mt='30px' mb='5px'>
                <Heading fontSize='34px'>PHIM ĐANG CHIẾU</Heading>
                <Spacer/>
                <Link to='/home/movies/coming-soon'><Text mt='10px' color='gray' fontSize='27px'>PHIM SẮP CHIẾU</Text></Link>
                </Flex>
                <hr/>
                <Box mt='30px'>
                {props.listphimdangchieu.length===0?'Hiện tại chưa cập nhật phim!':
                <FilmList data={props.listphimdangchieu}/>}
                </Box>
                
                </Box>

            </Stack>
        </Box>
    )
}

export default NowShow