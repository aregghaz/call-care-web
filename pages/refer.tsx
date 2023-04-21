import React, {FC, useState} from "react"
import cls from "../styles/Refer.module.scss"
import Input from "../components/input/input";
import Select from "../components/select/select";
import Datapicker from "@/components/data-picker/data-picker";
import TimePicker from "@/components/time-picker/time-picker";

const Refer:FC<any> = ({

}) => {
    const [transportation, setTransportation] = useState<boolean>(true)
    const transportationHandler = (e) => {
        if (e.target.id === "transportationYes") {
            setTransportation(true)
        } else {
            setTransportation(false)
        }
    }
    return (
        <div className={cls.main}>
            <h1>Refer to us</h1>
            <form className={cls.form}>
                <div className={cls.patient}>
                    <h2>Patient information</h2>
                    <div className={cls.formRepeat2}>
                        <Input
                            placeholder={"Full name"}
                            required={true}
                            type={"text"}
                        />
                        <Input
                            placeholder={"Full name"}
                            required={true}
                            type={"text"}
                        />
                    </div>
                    <div className={cls.formRepeat1}>
                        <Input
                            type={"text"}
                            placeholder={"Street Address"}
                        />
                    </div>
                    <div className={cls.formRepeat3}>
                        <Input
                            type={"text"}
                            placeholder={"City"}
                        />
                        <Select
                            placeholder={"State"}
                            required={true}
                            options={[
                                {name: "medical1", disabled: false, selected: false},
                                {name: "medical2", disabled: false, selected: false},
                                {name: "medical3", disabled: false, selected: false},
                                {name: "medical4", disabled: false, selected: false},
                            ]}
                        />
                        <Input
                            type={"text"}
                            placeholder={"Zip Code"}
                        />
                    </div>
                    <div className={cls.formRepeat2}>
                        <Input
                            type={"text"}
                            placeholder={"Email"}
                        />
                        <Input
                            type={"text"}
                            placeholder={"Phone"}
                        />
                        <Select
                            placeholder={"Gender"}
                            required={true}
                            options={[
                                {name: "medical1", disabled: false, selected: false},
                                {name: "medical2", disabled: false, selected: false},
                                {name: "medical3", disabled: false, selected: false},
                                {name: "medical4", disabled: false, selected: false},
                            ]}
                        />
                        <Datapicker
                            label={"Date of Birth (DOB)"}
                        />
                        <Input
                            type={"text"}
                            placeholder={"Height"}
                        />
                        <Input
                            type={"text"}
                            placeholder={"Weight"}
                        />
                    </div>

                </div>
                <div className={cls.submitter}>
                    <h2>Submitter</h2>
                    <div className={cls.formRepeat3}>
                        <Select
                            label={"Transportation Service"}
                            placeholder={"Please Choose"}
                            options={[
                                {name: "medical1", disabled: false, selected: false},
                                {name: "medical2", disabled: false, selected: false},
                                {name: "medical3", disabled: false, selected: false},
                                {name: "medical4", disabled: false, selected: false},
                            ]}
                        />
                        <Select
                            label={"Therapy"}
                            placeholder={"Please Choose"}
                            options={[
                                {name: "medical1", disabled: false, selected: false},
                                {name: "medical2", disabled: false, selected: false},
                                {name: "medical3", disabled: false, selected: false},
                                {name: "medical4", disabled: false, selected: false},
                            ]}
                        />
                        <Select
                            label={"Medical Home Modification"}
                            placeholder={"Please Choose"}
                            required={true}
                            options={[
                                {name: "medical1", disabled: false, selected: false},
                                {name: "medical2", disabled: false, selected: false},
                                {name: "medical3", disabled: false, selected: false},
                                {name: "medical4", disabled: false, selected: false},
                            ]}
                        />
                    </div>
                    <div className={cls.picker}>
                        <label>Is Translation Service Requested?</label>
                        <br/>
                        <input onChange={transportationHandler} id={"transportationYes"} type={"radio"} name={"transportation"}/><label htmlFor={"transportationYes"}>Yes</label>
                        <br/>
                        <input onChange={transportationHandler} id={"transportationNo"} type={"radio"} name={"transportation"}/><label htmlFor={"transportationNo"}>No</label>
                    </div>
                    {
                        <Select
                            label={"Please select language"}
                            options={[
                                {name: "English", disabled: false, selected: false},
                                {name: "medical2", disabled: false, selected: false},
                                {name: "medical3", disabled: false, selected: false},
                                {name: "medical4", disabled: false, selected: false},
                            ]}
                        />
                    }
                    <div className={cls.formRepeat2}>
                        <Datapicker
                            label={"Appointment Date"}
                            width={"small"}
                            small={true}
                        />
                        <TimePicker label={"Appointment Time"}/>
                    </div>
                    <div className={cls.formRepeat2}>
                        <Input
                            type={"text"}
                            placeholder={"Facility Name"}
                        />
                        <Input
                            type={"text"}
                            placeholder={"Facility Phone"}
                        />
                    </div>
                    <div className={cls.formRepeat1}>
                        <Input
                            type={"text"}
                            placeholder={"Facility Street Address"}
                        />
                    </div>
                    <div className={cls.formRepeat3}>
                        <Input
                            type={"text"}
                            placeholder={"City"}
                        />
                        <Select
                            placeholder={"State"}
                            required={true}
                            options={[
                                {name: "medical1", disabled: false, selected: false},
                                {name: "medical2", disabled: false, selected: false},
                                {name: "medical3", disabled: false, selected: false},
                                {name: "medical4", disabled: false, selected: false},
                            ]}
                        />
                        <Input
                            type={"text"}
                            placeholder={"Zip Code"}
                        />
                    </div>
                    <div className={cls.formRepeat1}>
                        <label htmlFor="#" className={cls.labelText}>
                            Special Instructions
                        </label>
                        <textarea className={cls.textarea}>

                        </textarea>
                    </div>
                    <div className={cls.buttonSubmit}>
                        <input type="Submit"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Refer