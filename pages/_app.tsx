import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Head from 'next/head'

import '@/app/styles/index.scss'

const narrowBlack = localFont({
  src: [
    {
      path: '../public/fonts/Obviously-NarrowBlack.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Obviously-NarrowBlack.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  preload: true,
  display: 'swap',
})

const matter = localFont({
  src: [
    {
      path: '../public/fonts/Matter-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Matter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Matter-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Matter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  preload: true,
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-family-primary: ${narrowBlack.style.fontFamily};
          --font-family-secondary: ${matter.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
