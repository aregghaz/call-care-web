import React, {FC} from "react"
import cls from "./select.module.scss"

interface SelectProps {
    options?: Array<optionTypes>,
    placeholder?: string,
    required?: boolean
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
}) => {
    return (
        <div className={cls.inputWrapper}>
            <label>{label}</label>
            <select className={cls.select}>
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
                            >{option.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select