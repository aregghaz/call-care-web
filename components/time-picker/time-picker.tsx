import React, {FC, useState} from "react"
import cls from "./time-picker.module.scss"

interface TimePickerProps {
    label?: string
}

const TimePicker:FC<TimePickerProps> = ({
    label= ""
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

    return (
        <div className={cls.timepicker}>
            <label>{label}</label>
            <div className={cls.inputs}>
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
        </div>
    )
}

export default TimePicker