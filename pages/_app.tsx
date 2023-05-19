import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import Header from "../components/header/header"
import Footer from "@/components/footer/footer";
import cls from "../styles/App.module.scss"
import AOS from "aos/dist/aos"
import "aos/dist/aos.css"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchServices} from "@/store/slices/services/services.api";
import {AppDispatch, wrapper} from "@/store/store";
import {fetchGlobal} from "@/store/slices/global/global.api";
import {globalSelector} from "@/store/slices/global/global.slice";
import LoadingScreen from "@/components/loading-screen/loading-screen";

export default wrapper.withRedux(function App({Component, pageProps}: AppProps) {
    const dispatch = useDispatch<AppDispatch>()
    const globalData = useSelector(globalSelector)
    useEffect(() => {
        AOS.init()
        // dispatch(fetchGlobal())
        // dispatch(fetchServices())
    }, [dispatch])
    return (
        <>
            {/*<Provider store={store}>*/}
            {
              <>
                    <Header/>
                    <div
                        className={cls.content}
                    >
                        <Component {...pageProps}/>
                    </div>
                    <Footer/>
                </>
            }
            {/*</Provider>*/}
        </>
    )
})
