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
  Image,
}from '@chakra-ui/react'
import NextLink from 'next/link'


export default function Games() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <Container>
      <Head>
        <title>
          Saunt - Games
        </title>
        <link rel="shortcut icon" type="image/png" href="images/favicon.png"></link>
      </Head>

      <Stack
        as="main"
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='600px'
        px={2}
      >
    
        <Heading mb={8}>
          <Text fontSize={36}>
            Video Game Projects
          </Text>
        </Heading>
        
        <Heading mb={4}>
          <Text fontSize={24}>
            Bounds
          </Text>
        </Heading>
        <Box boxSize='auto'>
          <Flex mb={4}>
            <Image src='images/bounds.png'></Image>
          </Flex>
          <Text style={{ textIndent: 20 }}>
            A simple platforming game made using unity, the player may control the slime to jump to the top of the level and collect a coin to win. This game was made as a prototype to test my player movement script and increse my familiarity with the Unity Engine and is playable at 
            <NextLink href='https://saunty.itch.io/bound' passHref>
              <Text color='red' style={{ textIndent: 1 }}>saunty.itch.io/bound</Text>
            </NextLink>
          </Text>
        </Box>
        
        <Heading mb={4}>
          <Text fontSize={24}>
            Java Game Engine
          </Text>
        </Heading>
        <Box boxSize="auto">
          <Flex mb={4}>
            <Image src='images/java.png'></Image>
          </Flex>
          <Text style={{ textIndent: 20 }}>
            A top down 2D game engine with collision, animations, and a tilemap system. The player is able to walk around throughout the enviornment and the tilemap system may be used to create maps. This project was created to increase my knowledge in Java and help me learn how to make my own game engine. The code is available at my 
            <NextLink href='https://github.com/nathannbb/Java-Engine' passHref>
              <Text color='red' style={{ textIndent: 1 }}>github</Text>
            </NextLink>
          </Text>
        </Box>

      </Stack>

    </Container>

  )
}
