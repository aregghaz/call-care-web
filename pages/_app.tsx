import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import Header from "../components/header/header"
import Footer from "@/components/footer/footer";
import cls from "../styles/App.module.scss"
import AOS from "aos/dist/aos"
import "aos/dist/aos.css"
import {useEffect} from "react";
import {TermsProps} from "@/pages/terms";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/store"
import {fetchServices} from "@/store/slices/services/services.api";
import {AppDispatch, wrapper} from "@/store/store";
import {fetchGlobal} from "@/store/slices/global/global.api";
import {store} from "next/dist/build/output/store";

const termsData: TermsProps = {
    address: "ADDRESS",
    version: "1.0",
    email: "EMAIL",
    url: "WEBSITE URL",
    date: "20.20.2020",
}

export default wrapper.withRedux(function App({Component, pageProps}: AppProps) {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        AOS.init()
        return () => {
            dispatch(fetchGlobal())
            dispatch(fetchServices())
        }
    }, [])
    return (
        <>
            {/*<Provider store={store}>*/}
                <Header/>
                <div className={cls.content}>
                    <Component {...pageProps}/>
                </div>
                <Footer/>
            {/*</Provider>*/}
        </>
    )
})
