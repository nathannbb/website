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
          <Flex>
            <Heading fontSize={18}>
              Email:
            </Heading>
            <Text style={{ textIndent: 20 }}>
              nathanbasant.nb@gmail.com
            </Text>
          </Flex>
          <Flex mt={4}>
            <Heading fontSize={18}>
              LinkedIn:
            </Heading>
            <NextLink href='https://www.linkedin.com/in/nathanbasant/' passHref>
              <Text style={{ textIndent: 20 }}>linkedin.com/in/nathanbasant/</Text>
            </NextLink>
          </Flex>
        </Flex>
      </Stack>

    </Container>

  )
}
