import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <meta name="theme-color" content="#D33834"/>
            <link rel={"icon"} href={"/images/logo.svg"}/>
            <link rel={"apple-touch-icon"} href={"/images/logo.svg"}/>
            <link rel={"apple-touch-icon-precomposed"} href={"/images/logo.svg"}/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
