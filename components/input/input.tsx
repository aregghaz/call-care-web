import React, {FC} from "react";
import cls from "./input.module.scss"
interface InputProps {
    required?: boolean,
    type: string,
    inputMode?: string,
    placeholder?: string,
}

const Input:FC<InputProps> = ({
    required = false,
    type,
    inputMode = "text",
    placeholder = ""
}) => {
    return (
        <div className={cls.inputWrapper}>
            <input
                className={cls.input}
                type={type}
                inputMode={inputMode}
                placeholder={`${placeholder}${required ? "*" : ""}`}
            />
        </div>
    )
}

export default Input