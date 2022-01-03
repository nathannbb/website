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
}from '@chakra-ui/react'

export default function Contact() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <Container>
      <Head>
        <title>
          Saunt
        </title>
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
              Contact Me
            </Text>
          </Heading>
        </Flex>
      </Stack>

    </Container>

  )
}
