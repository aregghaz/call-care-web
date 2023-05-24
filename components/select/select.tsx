import React, {FC, useState} from "react"
import cls from "./select.module.scss"

interface SelectProps {
    options?: Array<optionTypes>,
    placeholder?: string,
    required?: boolean,
    label?: string,
    changeHandler?: Function,
    name: string,
    error?: string,
}

export type optionTypes = {
    name: string,
    disabled?: boolean,
    selected?: boolean,
    label?: string,
    id?: string,
}

const Select:FC<SelectProps> = ({
    options,
    placeholder,
    required = false,
    label = "",
    changeHandler = () => {},
    name,
    error = ""
}) => {
    const [selected, setSelected] = useState("")
    return (
        <div className={`${cls.inputWrapper} ${error && cls.inputError}`}>
            <label>{label}</label>
            <select onChange={(event) => {
                setSelected(event.target.value)
                changeHandler(event.target.value,name)
            }} className={cls.select}>
                {
                    placeholder ? <option selected={true} disabled={true}>{`${placeholder}${required ? "*" : ""}`}</option> : null
                }
                {
                    options?.map((option,index) => {
                        return (
                            <option
                                key={index}
                                selected={option.selected}
                                disabled={option.disabled}
                                value={option.name}
                            >{option.name}</option>
                        )
                    })
                }
            </select>
            {error && <span className={cls.errorMessage}>{error}</span>}
        </div>
    )
}

export default Select