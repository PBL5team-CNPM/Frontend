import { Button } from "@chakra-ui/react"
import React from "react"

const xulyDisable=(props)=>{
    if(props.Check==='0'){
        return (
            <Button mr='20px' fontSize='24px' h='63px' w='164px' 
            colorScheme='blue'>Mua Vé</Button> 
        )
    }
    else{
        return (
            <Button mr='20px' fontSize='24px' h='63px' w='164px'
             colorScheme='blue' disabled>Mua Vé</Button>
        )
    }
}
export default xulyDisable