import React from 'react'
import {
    useColorMode,
    useColorModeValue,
    Button,
    Flex,
    Box,
    Text,
    Heading,
    IconButton
}from "@chakra-ui/react"
import NextLink from 'next/link'
import styled from "@emotion/styled"
import DarkModeSwitch from './DarkModeSwitch'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {useState} from 'react'

const Container = ({ children }) => {

    const [display, changeDisplay] = useState('none')

    const {colorMode} = useColorMode();

    const bgColor = {
        light: '#fff6e8',
        dark: '#252525'
    }

    const navHoverColor = {
        light: '#fff6e8',
        dark: '#252525'
    }
    
    const color = {
        light:'black',
        dark: 'white'
    }

    const StickNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
    `
    return(
        <>
            <StickNav
                flexDirection="row"
                alignItems="center"
                maxWidth="800px"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2,6,6]}
                py={2}
                mt={8}
                mb={[0,0,8]}
                mx={"auto"}
            >
                <Flex>
                    <Box>
                        <NextLink href='/' passHref>
                            <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: navHoverColor[colorMode]}}>
                                <Text fontSize={24} color={color[colorMode]}>
                                    Saunt ()
                                </Text>
                            </Button>
                        </NextLink>
                    </Box>  
                </Flex>
                
                <Flex display={['none','none','flex','flex']}>
                    <Box>
                        <NextLink href='/Games' passHref>
                            <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: navHoverColor[colorMode]}}>
                                <Text fontWeight="normal" color={color[colorMode]}>
                                    Games
                                </Text>
                            </Button>
                        </NextLink>
                        <NextLink href='/Art' passHref>
                            <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: navHoverColor[colorMode]}}>
                                <Text fontWeight="normal" color={color[colorMode]}>
                                    Art
                                </Text>
                            </Button>
                        </NextLink>
                        <NextLink href='/Projects' passHref>
                            <Button as="a" variant="ghost" p={[6,2,4]} _hover={{backgroundColor: navHoverColor[colorMode]}}>
                                <Text fontWeight="normal" color={color[colorMode]}>
                                    Projects
                                </Text>
                            </Button>
                        </NextLink>
                        <NextLink href='/Contact' passHref>
                            <Button as="a" variant="ghost" p={[6,2,4]} _hover={{backgroundColor: navHoverColor[colorMode]}}>
                                <Text fontWeight="normal" color={color[colorMode]}>
                                    Contact Me
                                </Text>
                            </Button>
                        </NextLink>
                    </Box>    
                </Flex>

                <Flex ml='auto'> 
                    <IconButton
                        aria-label='Open Menu'
                        mr={2}
                        icon={<HamburgerIcon/>}
                        colorScheme='red'
                        display={['flex','flex','none','none']}
                        onClick={() => changeDisplay('flex')}
                    />

                    <Flex
                        w="100vw"
                        bgColor={bgColor[colorMode]}
                        zIndex={20}
                        h="100vh"
                        pos="fixed"
                        top="0"
                        left="0"
                        overflowY="auto"
                        flexDir="column"
                        display={display}
                     >
                        <Flex>
                            <IconButton
                            mt={2}
                            ml={'auto'}
                            mr={2}
                            aria-label="Close Menu"
                            icon={<CloseIcon/>}
                            onClick={() => changeDisplay('none')}
                            />
                        </Flex>

                        <Flex
                            flexDir="column"
                            align="center"
                        >
                            <NextLink href='/' passHref>
                                <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: navHoverColor[colorMode]}}>
                                    <Text fontWeight="normal" color={color[colorMode]}>
                                        Home
                                    </Text>
                                </Button>
                            </NextLink>
                            <NextLink href='/Games' passHref>
                                <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: navHoverColor[colorMode]}}>
                                    <Text fontWeight="normal" color={color[colorMode]}>
                                        Games
                                    </Text>
                                </Button>
                            </NextLink>
                            <NextLink href='/Art' passHref>
                                <Button as="a" variant="ghost" p={[1,2,4]} _hover={{backgroundColor: navHoverColor[colorMode]}}>
                                    <Text fontWeight="normal" color={color[colorMode]}>
                                        Art
                                    </Text>
                                </Button>
                            </NextLink>
                            <NextLink href='/Projects' passHref>
                                <Button as="a" variant="ghost" p={[6,2,4]} _hover={{backgroundColor: navHoverColor[colorMode]}}>
                                    <Text fontWeight="normal" color={color[colorMode]}>
                                        Projects
                                    </Text>
                                </Button>
                            </NextLink>
                            <NextLink href='/Contact' passHref>
                                <Button as="a" variant="ghost" p={[6,2,4]} _hover={{backgroundColor: navHoverColor[colorMode]}}>
                                    <Text fontWeight="normal" color={color[colorMode]}>
                                        Contact Me
                                    </Text>
                                </Button>
                            </NextLink>
                        </Flex>

                    </Flex>

                    <Flex ml={'auto'}>
                        <DarkModeSwitch/>
                    </Flex>
                </Flex>

            </StickNav>
            <Flex
                as="main"
                justify="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0,4,4]}
                mt={[4,8,8]}
            >
                {children}
            </Flex>
   
        </>
    )
}

export default Container