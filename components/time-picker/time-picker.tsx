import React, {FC, useEffect, useState} from "react"
import cls from "./time-picker.module.scss"

interface TimePickerProps {
    label?: string,
    changeHandler?: Function
    name?: string,
    error?: string,
    required?: boolean,
}

const TimePicker:FC<TimePickerProps> = ({
    label= "",
                                            changeHandler = () => {},
    name = "",
    error = "",
    required = false
}) => {
    const time: Array<string> = [];
    const hoursMinMax: Array<number> = [0, 23];
    const minutesMinMax: Array<number> = [0, 59];
    const [minutes, setMinutes] = useState("");
    const [hours, setHours] = useState("");

    const handleChange: Function = (type: string, text: string): void => {
        let min: number, max: number, value: string;
        switch (type) {
            case "hours":
                [min, max] = hoursMinMax;
                value = Math.max(min, Math.min(max, +text)).toString();
                if (value == "0") {
                    value = "00";
                }
                setHours(value);
                break;
            case "minutes":
                [min, max] = minutesMinMax;
                value = Math.max(min, Math.min(max, +text)).toString();
                if (value == "0") {
                    value = "00";
                }
                setMinutes(value);
                break;
        }
    };

    useEffect(() => {
        changeHandler(hours || minutes ? `${hours}:${minutes}` : "", name);
    }, [hours,minutes])

    return (
        <div className={`${cls.timepicker} ${error && cls.inputError}`}>
            <label>{label}{required ? "*" : ""}</label>
            <div className={`${cls.inputs} ${error && cls.inputError}`}>
                <input
                    className={cls.input}
                    type="number"
                    placeholder="--"
                    autoComplete="off"
                    data-input="true"
                    inputMode="numeric"
                    onChange={(event) => {
                        handleChange("hours", event.target.value);
                    }}
                    value={hours}
                />
                <span>:</span>
                <input
                    className={cls.input}
                    type="number"
                    placeholder="--"
                    autoComplete="off"
                    data-input="true"
                    inputMode="numeric"
                    onChange={(event) => {
                        handleChange("minutes", event.target.value);
                    }}
                    value={minutes}
                />
            </div>
            {error && <span className={cls.errorMessage}>{error}</span>}
        </div>
    )
}

export default TimePicker