import React, {FC, useRef, useState} from "react";
import cls from "./data-picker.module.scss"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import useOnClickOutside from "@/hooks/useOutsideClick";
interface DataPickerProps {
    id?: string,
    label?: string,
    small?: boolean,
    name?: string,
    changeHandler: Function,
    error?: string
}

const Datapicker:FC<DataPickerProps> = ({
    id = "",
    label = "",
    small = false,
    name = "",
    changeHandler = () => {},
    error = "",
}) => {
    const [show, setShow] = useState<boolean>(false)
    const [value, setValue] = useState<Date>(new Date)
    const calendarRef = useRef<HTMLDivElement>(null)

    const handleClose = () => {
        setShow(!show)
    }

    useOnClickOutside(calendarRef, () => {setShow(false)})

    return (
        <div ref={calendarRef} className={`${cls.inputWrapper} ${error && cls.inputError}`} style={{
            width: small ? "150px" : "auto"
        }}>
            <label htmlFor={id}>{label}</label>
            <input id={id} className={cls.input} value={value.toLocaleDateString()} type={"text"} readOnly={true} onClick={handleClose}/>
            {show && <div className={cls.calendarInput}>
                <Calendar onChange={(date:any) => {
                    setValue(date)
                    handleClose()
                    changeHandler(date.toLocaleDateString(),name)
                }} value={value}/>
            </div> }
            {error && <span className={cls.errorMessage}>{error}</span>}
        </div>
    )
}

export default Datapicker