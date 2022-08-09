import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import ModelLoader from '../model-loader'

const LazyVoxelDog = dynamic(() => import('../model'), {
  ssr: false,
  loading: () => <ModelLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lesan's homepage" />
        <meta name="author" content="Lesan" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Lesan - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
