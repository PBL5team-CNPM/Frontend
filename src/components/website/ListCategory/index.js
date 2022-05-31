import {  Button, Center, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function ListCategory(props){
    const {data} = props
    const List = data.map((item)=>(

        <Link to={`/home/categorys/${item.id}`} >
        <Center>
        <Button key={item.id} variant={'link'} color='white' size='sm'> 
        {item.category}
        </Button></Center>
        </Link>
    ))
    return(
    <Center>
    <SimpleGrid mt='15px' mb='15px' columns={[1, null, 4]} spacing='50px'>
       {List}
    </SimpleGrid></Center>
    )
}

export default ListCategory