import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from "../components/header/header"
import Footer from "@/components/footer/footer";
import cls from "../styles/App.module.scss"
import AOS from "aos/dist/aos"
import "aos/dist/aos.css"
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init()
    }, [])
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
