import '../index.css'
import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mahesh Muttinti Portfolio | Mahesh Muttinti</title>
      </Head>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </>
  )
}
