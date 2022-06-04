import React from "react";
import { Box, Flex, Image, Input, useCheckbox } from "@chakra-ui/react";

const CheckboxCard = (props) => {
    const {state, getInputProps, getCheckboxProps} = useCheckbox(props.children);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return(
        <Box as="label"
        >
            <input {...input} hidden/>
            <Flex
                {...checkbox}
                border="2px"
                cursor="pointer"
            >
                {
                    state.isChecked?
                    <Image
                        src={require('../../../../imgs/office-chair 2.png')}
                    />:
                    <Image
                        src={require('../../../../imgs/office-chair 1.png')}
                    />
                }
                {
                    console.log(props.children)
                }
            </Flex>
        </Box>
    )

}

export default CheckboxCard