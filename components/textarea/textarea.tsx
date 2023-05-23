import React, {FC} from "react"
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
}

const Textarea: FC<TextareaProps> = ({
                                         placeholder,
                                         label,
                                         name = "",
                                         changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>, name: string) => {},
                                         error = "",
                                         htmlFor = "",
    autoResize = true,
    className
}) => {

    const handleTextareaHeight = (evt: any) => {
        evt.target.style.height = "50px";
        evt.target.style.height = (evt.target.scrollHeight) + "px";
    }

    return (
        <div className={`${cls.formComment} ${className} ${error && cls.inputError}`}>
            <label htmlFor={htmlFor}>{label}</label>
            <textarea name={name} id={htmlFor} onChange={(e) => {
                handleTextareaHeight(e)
                autoResize ? changeHandler(e, name) : () => {}
            }}></textarea>
            {error && <span className={cls.errorMessage}>{error}</span>}
        </div>
    )
}

export default Textarea