import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'

import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Internal Chat Nerdify</title>
        <meta name="description" content="Internal Chat nerdify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
export default MyApp
