import { useColorMode, IconButton, useColorModeValue, Flex, Button, Switch } from '@chakra-ui/react'
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import NextLink from 'next/link'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'orange',
        dark: 'purple'
    }
    return (
        <Flex>
            <IconButton
                aria-label="Toggle dark mode"
                colorScheme={useColorModeValue('purple','orange')}
                icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
                onClick={toggleColorMode}
            >    
            </IconButton>
        </Flex>
    )
}

export default DarkModeSwitch