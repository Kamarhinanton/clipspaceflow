import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/favicon/favicon.png"
        />
      </Head>
      <body>
        <div className="wrapper">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
