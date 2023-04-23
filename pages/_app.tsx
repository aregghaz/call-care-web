import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from "../components/header/header"
import Footer from "@/components/footer/footer";
import cls from "../styles/App.module.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Header/>
          <div className={cls.content}>
              <Component {...pageProps} />
          </div>
          <Footer/>
      </>
  )
}
