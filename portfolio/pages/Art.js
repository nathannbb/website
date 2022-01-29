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

export default function Art() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <Container>
      <Head>
        <title>
          Saunt - Art
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
          <Heading mb={6}>
            <Text fontSize={36}>
              My Art
            </Text>
          </Heading>

          <Heading mb={4}>
            <Text fontSize={24}>
              Game Concept Page
            </Text>
          </Heading>
          <Box boxSize="auto">
            <Flex mb={4}>
              <Image src='images/alone.png'></Image>
            </Flex>
            <Text style={{ textIndent: 20 }}>
              A concept page for a game I have been designing named Alone. This concept page was created as an assignment for an amazing course by Kristopher Alexander called Introduction to Game Design.
            </Text>
          </Box>
        </Flex>
      </Stack>

    </Container>

  )
}
