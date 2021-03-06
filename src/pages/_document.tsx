import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head >
        <meta name="author" content="Navar Kartalian" />
        <meta name="description" content="Three.JS Next app" />
        <link rel="icon" type='image/png' href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}