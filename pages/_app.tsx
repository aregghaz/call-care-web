import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import Header from "../components/header/header"
import Footer from "@/components/footer/footer";
import cls from "../styles/App.module.scss"
import AOS from "aos/dist/aos"
import "aos/dist/aos.css"
import {useEffect} from "react";
import {TermsProps} from "@/pages/terms";
import {Provider} from "react-redux";
import store from "../store/store"

const termsData: TermsProps = {
    address: "ADDRESS",
    version: "1.0",
    email: "EMAIL",
    url: "WEBSITE URL",
    date: "20.20.2020",
}

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Provider store={store}>
                <Header/>
                <div className={cls.content}>
                    <Component {...pageProps}/>
                </div>
                <Footer/>
            </Provider>
        </>
    )
}
