import React, {FC, useState} from "react";
import cls from "./input.module.scss"
import {string} from "prop-types";
interface InputProps {
    required?: boolean,
    type: string,
    inputMode: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search",
    placeholder?: string,
    name: string,
    changeHandler?: Function,
    error?: string
}

const Input:FC<InputProps> = ({
    required = false,
    type,
    inputMode = "text",
    placeholder = "",
    name = "",
    changeHandler = () => {},
    error = ""
}) => {
    const [value, setValue] = useState("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <div className={`${cls.inputWrapper} ${error && cls.inputError}`}>
            <input
                className={cls.input}
                type={type}
                inputMode={inputMode}
                value={value}
                onChange={(e) => {
                    handleChange(e)
                    changeHandler(e,name)
                }}
                placeholder={`${placeholder}${required ? "*" : ""}`}
            />
            {error && <span className={cls.errorMessage}>{error}</span>}
        </div>
    )
}

export default Input