import Head from 'next/head'
import Container from '../components/Container'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  useColorModeValue,
  Button,
  Link,
  LinkBox,
  Image
}from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Index() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const navHoverColor = {
    light: '#FEF5ED',
    dark: '#252525'
  }

  const color = {
    light:'black',
    dark: 'white'
  }

  const linkedin = `images/linkedin${useColorModeValue('light','dark')}.png`

  const github = `images/github${useColorModeValue('light','dark')}.png`

  const itchio = `images/itchio${useColorModeValue('light','dark')}.png`

  return (
    <Container>
      <Head>
        <title>
          Saunt
        </title>
        <link rel="shortcut icon" type="image/png" href="images/favicon.png"></link>
      </Head>

      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        m='0 auto 2rem auto'
        maxWidth='700px'
      >
        <Box bg={useColorModeValue('#D3E4CD','#363636')} borderRadius='lg' p={3}>

          Welcome to my personal portfolio website!

        </Box>
      </Flex>

      <Stack
        as="main"
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}
      >

        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >
          <Heading mb={2}>
            <Text fontSize={36}>
              Nathan Basant
            </Text>
          </Heading>
          <Text color={colorSecondary}>Game Developer / Artist / Programmer / Computer Science Student</Text>
        </Flex>

        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >
          <Heading mt={6} mb={2}>
            About Me
          </Heading>

          <Text style={{ textIndent: 20 }}>
            Hello! My name is Nathan Basant, throughout my life I've always had an interest in 
            computers. Specifically, I have a love for video games and the development process. 
            As a result, my passion has lead me to the field of Software and Game Development allowing me to express 
            my creativity to create interesting projects and solve problems. I enjoy developing my 
            own games, software and learning new ways to improve my programming skills and challenge 
            them too!
          </Text>

          <Heading mt={6} mb={2}>
            Game Development
          </Heading>

          <Text style={{ textIndent: 20 }}>
            Following my interest in Video Games, in 2019 I began learning how to develop my own games.
            Through tutorials online, and trial and error, I began developing my very own games! My previous projects
            and prototypes are displayed on my{' '}<NextLink href='/Games' passHref>
              <Link color='red'>Games</Link>
            </NextLink> page or at my itch.io!
          </Text>
          
          <Heading mt={6} mb={2}>
            Art
          </Heading>
          <Text style={{ textIndent: 20 }}>

          </Text>

          <Heading mt={6} mb={2}>
            Checkout My Other Web Pages!
          </Heading>

          <Flex >
            <Flex mr={6}>
              <Box boxSize='20' >
                <Link href='https://www.linkedin.com/in/nathanbasant/' passHref>
                  <Image src={linkedin}></Image>
                </Link>
              </Box>
            </Flex>
            
            <Flex mr={6}>
              <Box boxSize='20' >
                <Link href='https://github.com/nathannbb' passHref>
                  <Image src={github}></Image>
                </Link>
              </Box>
            </Flex>

            <Flex>
              <Box boxSize='20' >
                <Link href='https://saunty.itch.io/' passHref>
                  <Image src={itchio}></Image>
                </Link>
              </Box>
            </Flex>
          </Flex>

        </Flex>

      </Stack>

    </Container>

  )
}
