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
import Link from 'next/link'
import Image from 'next/image'

const Container = ({ children }) => {

    const [display, changeDisplay] = useState('none')

    const {colorMode} = useColorMode();

    const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    
    &:hover img {
        transform: rotate(-10deg);
    }
    `
    const Logo = () => {

        return(
            <Link href="/">
                <a>
                    <LogoBox>

                        <Image src='/images/Panda-Hover.png' width={35} height={35} alt="Logo"/>
                        
                        <Text fontSize={24} color={color[colorMode]} style={{ textIndent: 15 }}>
                            Saunt ()
                        </Text>

                    </LogoBox>  
                </a>
                
            </Link>
        )
    }
    const bgColor = {
        light: '#FEF5ED',
        dark: '#252525'
    }

    const navHoverColor = {
        light: '#FEF5ED',
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
                        <Logo/>
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
                        colorScheme={useColorModeValue('teal','red')}
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
                            colorScheme={useColorModeValue('teal','red')}
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