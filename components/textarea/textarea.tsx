import React, {FC, useState} from "react"
import cls from "./textarea.module.scss"

interface TextareaProps {
    placeholder?: string,
    label: string,
    name: string,
    changeHandler: Function,
    error?: string,
    htmlFor?: string,
    autoResize: boolean,
    className?: string,
    required?: boolean
}

const Textarea: FC<TextareaProps> = ({
                                         placeholder,
                                         label,
                                         name = "",
                                         changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>, name: string) => {},
                                         error = "",
                                         htmlFor = "",
    autoResize = true,
    className,
    required= false
}) => {

    const [inputValue, setInputValue] = useState<string>("")

    const handleTextareaHeight = (evt: any) => {
        evt.target.style.height = "50px";
        evt.target.style.height = (evt.target.scrollHeight) + "px";
    }

    const handleChange:Function = (e:React.ChangeEvent<HTMLTextAreaElement>):void => {
        setInputValue(e.target.value)
    }

    return (
        <div className={`${cls.formComment} ${className} ${error && cls.inputError}`}>
            <label htmlFor={htmlFor}>{label}{required ? "*" : ""}</label>
            <textarea value={inputValue} name={name} id={htmlFor} onChange={(e) => {
                changeHandler(e.target.value,name)
                handleChange(e)
                if (autoResize) handleTextareaHeight(e)
            }}></textarea>
            {error && <span className={cls.errorMessage}>{error}</span>}
        </div>
    )
}

export default Textarea