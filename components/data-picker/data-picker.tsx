import React, {FC, useState} from "react";
import cls from "./data-picker.module.scss"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
interface DataPickerProps {
    id?: string,
    label?: string,
    small?: boolean,
}

const Datapicker:FC<DataPickerProps> = ({
    id = "",
    label = "",
    small = false,
}) => {
    const [show, setShow] = useState<boolean>(false)
    const [value, setValue] = useState<Date>(new Date)

    const handleClose = () => {
        setShow(!show)
    }


    return (
        <div className={cls.inputWrapper} style={{
            width: small ? "150px" : ""
        }}>
            <label htmlFor={id}>{label}</label>
            <input id={id} className={cls.input} value={value.toLocaleDateString()} type={"text"} readOnly={true} onClick={handleClose}/>
            {show && <div className={cls.calendarInput}>
                <Calendar onChange={(date) => {setValue(date); handleClose()}} value={value}/>
            </div> }
        </div>
    )
}

export default Datapicker