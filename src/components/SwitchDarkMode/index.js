import React from "react";
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon} from '@chakra-ui/icons'

const SwitchDarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    return(
        <IconButton 
        icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>} 
        onClick ={toggleColorMode}
        color = {iconColor[colorMode]}
        ></IconButton>
    )
}

export default SwitchDarkMode