import React, {FC} from "react"
import cls from "@/components/error-window/error-window.module.scss";

const ErrorPage:FC<any> = () => {
    return (
        <div
            className={cls.main}
            style={{
                height: "100vh"
            }}
        >
            <h1>This page seems like not exists</h1>
            <a href={"/"}>Go back to homepage</a>
        </div>
    )
}

export default ErrorPage