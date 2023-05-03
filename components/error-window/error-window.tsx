import React, {FC, useEffect, useState} from "react"
import cls from "./error-window.module.scss"
import {useRouter} from "next/router";
import Link from "next/link";

interface ErrorWindowProps {
    fullscreen?: boolean
}

const ErrorWindow:FC<ErrorWindowProps> = ({
    fullscreen = true
}) => {
    const router = useRouter()
    const [pathname, setPathname] = useState(router.pathname)
    useEffect(() => {
        setPathname(router.asPath)
    }, [router])
    return (
        <div
            className={cls.main}
            style={{
                height: fullscreen ? "100vh" : "",
            }}
        >
            <h1>Error occurred while loading data. We apologise</h1>
            <a href={pathname}>Try Again</a>
        </div>
    )
}

export default ErrorWindow