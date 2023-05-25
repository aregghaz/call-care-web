import React, {FC, useCallback, useState} from "react"
import cls from "../styles/Refer.module.scss"
import Input from "../components/input/input";
import Select from "../components/select/select";
import Datapicker from "@/components/data-picker/data-picker";
import TimePicker from "@/components/time-picker/time-picker";
import Textarea from "@/components/textarea/textarea";
import {TContactForm} from "@/utils/types";
import validate from "@/utils/validate";
import {usStates} from "@/utils/states";
import {string} from "prop-types";

type TReferForm = {
    patientFullname: string,
    patientLastname: string,
    patientStreet: string,
    patientCity: string,
    patientZipcode: string,
    patientEmail: string,
    patientPhone: string,
    patientHeight: string,
    patientWeight: string,
    facilityName: string,
    facilityPhone: string,
    facilityStreet: string,
    facilityCity: string,
    facilityZipcode: string,
    instructions: string,
    facilityState: string,
    facilityOxygen: string,
    facilityTherapy: string,
    patientGender: string,
    patientState: string,
    patientDateOfBirth: string,
    facilityAppointmentDate: string,
    facilityAppointmentTime: string,

}

const Refer: FC<any> = ({}) => {

    const requiredFields:Array<string> = [
        "patientFullname",
        "patientLastname",
        "patientStreet",
        "patientCity",
        "patientState",
        "patientZipcode",
        "patientEmail",
        "patientPhone",
        "patientGender",
        "patientHeight",
        "patientWeight",
        "facilityName",
        "facilityPhone",
        "facilityStreet",
        "facilityCity",
        "facilityZipcode",
        "instructions",
        "facilityTherapy",
        "facilityOxygen",
        "facilityState",
        "patientDateOfBirth",
        "facilityAppointmentDate",
        "facilityAppointmentTime",
    ]

    const [fieldsErrors, setFieldsError] = useState<TReferForm>({} as TReferForm)

    const [formValues, setFormValues] = useState<TReferForm>({
        patientFullname: "",
        patientLastname: "",
        patientStreet: "",
        patientCity: "",
        patientState: "",
        facilityState: "",
        facilityOxygen: "",
        facilityTherapy: "",
        patientZipcode: "",
        patientEmail: "",
        patientPhone: "",
        patientGender: "",
        patientHeight: "",
        patientWeight: "",
        facilityName: "",
        facilityPhone: "",
        facilityStreet: "",
        facilityCity: "",
        facilityZipcode: "",
        instructions: "",
        patientDateOfBirth: "",
        facilityAppointmentDate: "",
        facilityAppointmentTime: "",
    })

    const handleFormValuesChange:Function = (value: string, name: string):void => {
        setFieldsError({...fieldsErrors, [name]: ""})
        setFormValues({...formValues, [name]: value})
    }

    const handleSend = useCallback(() => {
        alert("all okay")
        console.log(formValues)
    }, [formValues])

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errors = validate(formValues,requiredFields)
        if (Object.keys(errors).length > 0) {
            setFieldsError(errors)
        } else {
            handleSend()
        }
    }

    return (
        <div className={cls.main}>
            <h1>Refer to us</h1>
            <form className={cls.form} onSubmit={handleSubmit}>
                <div className={cls.patient}>
                    <h2>Patient information</h2>
                    <div className={cls.formRepeat2}>
                        <Input
                            placeholder={"Full name"}
                            required={true}
                            type={"text"}
                            inputMode={"text"}
                            name={"patientFullname"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["patientFullname"]}
                        />
                        <Input
                            placeholder={"Last name"}
                            required={true}
                            type={"text"}
                            inputMode={"text"}
                            name={"patientLastname"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["patientLastname"]}
                        />
                    </div>
                    <div className={cls.formRepeat1}>
                        <Input
                            type={"text"}
                            placeholder={"Street Address"}
                            required={true}
                            inputMode={"text"}
                            name={"patientStreet"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["patientStreet"]}
                        />
                    </div>
                    <div className={cls.formRepeat3}>
                        <Input
                            type={"text"}
                            placeholder={"City"}
                            required={true}
                            inputMode={"text"}
                            name={"patientCity"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["patientCity"]}
                        />
                        <Select
                            placeholder={"State"}
                            required={true}
                            options={[
                                ...usStates
                            ]}
                            changeHandler={handleFormValuesChange}
                            name={"patientState"}
                            error={fieldsErrors["patientState"]}
                        />
                        <Input
                            type={"text"}
                            placeholder={"Zip Code"}
                            required={true}
                            inputMode={"text"}
                            name={"patientZipcode"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["patientZipcode"]}
                        />
                    </div>
                    <div className={cls.formRepeat2}>
                        <Input
                            type={"text"}
                            placeholder={"Email"}
                            inputMode={"text"}
                            name={"patientEmail"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["patientEmail"]}
                            required={true}
                        />
                        <Input
                            type={"tel"}
                            placeholder={"Phone"}
                            inputMode={"tel"}
                            name={"patientPhone"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["patientPhone"]}
                            required={true}
                        />
                        <Select
                            placeholder={"Gender"}
                            required={true}
                            options={[
                                {name: "male", disabled: false, selected: false},
                                {name: "female", disabled: false, selected: false},
                            ]}
                            changeHandler={handleFormValuesChange}
                            name={"patientGender"}
                            error={fieldsErrors["patientGender"]}
                        />
                        <Datapicker
                            label={"Date of Birth (DOB)"}
                            name={"patientDateOfBirth"}
                            changeHandler={handleFormValuesChange}
                            required={true}
                            error={fieldsErrors["patientDateOfBirth"]}
                        />
                        <Input
                            type={"number"}
                            placeholder={"Height"}
                            inputMode={"numeric"}
                            name={"patientHeight"}
                            required={true}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["patientHeight"]}
                        />
                        <Input
                            type={"number"}
                            placeholder={"Weight"}
                            inputMode={"numeric"}
                            name={"patientWeight"}
                            required={true}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["patientWeight"]}
                        />
                    </div>

                </div>
                <div className={cls.submitter}>
                    <h2>Submitter</h2>
                    <div className={cls.formRepeat3}>
                        {/*<Select*/}
                        {/*    label={"Transportation Service"}*/}
                        {/*    placeholder={"Please Choose"}*/}
                        {/*    options={[*/}
                        {/*        {name: "medical1", disabled: false, selected: false},*/}
                        {/*        {name: "medical2", disabled: false, selected: false},*/}
                        {/*        {name: "medical3", disabled: false, selected: false},*/}
                        {/*        {name: "medical4", disabled: false, selected: false},*/}
                        {/*    ]}*/}
                        {/*/>*/}
                        <Select
                            label={"Therapy"}
                            placeholder={"Please Choose"}
                            options={[
                                {name: "medical1", disabled: false, selected: false},
                                {name: "medical2", disabled: false, selected: false},
                                {name: "medical3", disabled: false, selected: false},
                                {name: "medical4", disabled: false, selected: false},
                            ]}
                            changeHandler={handleFormValuesChange}
                            name={"facilityTherapy"}
                            error={fieldsErrors["facilityTherapy"]}
                            required={true}
                        />
                        <Select
                            label={"Oxygen Stair Chair "}
                            placeholder={"Please Choose"}
                            options={[
                                {name: "Yes", disabled: false, selected: false},
                                {name: "No", disabled: false, selected: false},
                            ]}
                            required={true}
                            changeHandler={handleFormValuesChange}
                            name={"facilityOxygen"}
                            error={fieldsErrors["facilityOxygen"]}
                        />
                        {/*<Select*/}
                        {/*    label={"Medical Home Modification"}*/}
                        {/*    placeholder={"Please Choose"}*/}
                        {/*    required={true}*/}
                        {/*    options={[*/}
                        {/*        {name: "medical1", disabled: false, selected: false},*/}
                        {/*        {name: "medical2", disabled: false, selected: false},*/}
                        {/*        {name: "medical3", disabled: false, selected: false},*/}
                        {/*        {name: "medical4", disabled: false, selected: false},*/}
                        {/*    ]}*/}
                        {/*/>*/}
                    </div>
                    {/*<div className={cls.picker}>*/}
                    {/*    <label>Is Translation Service Requested?</label>*/}
                    {/*    <div className={cls.radio}>*/}
                    {/*        <input onChange={transportationHandler} defaultChecked={true} id={"transportationYes"} type={"radio"} name={"transportation"}/><label htmlFor={"transportationYes"}>Yes</label>*/}
                    {/*    </div>*/}
                    {/*    <div className={cls.radio}>*/}
                    {/*        <input onChange={transportationHandler} id={"transportationNo"} type={"radio"} name={"transportation"}/><label htmlFor={"transportationNo"}>No</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*{*/}
                    {/*    transportation && <>*/}
                    {/*        <Select*/}
                    {/*            label={"Please select language"}*/}
                    {/*            options={[*/}
                    {/*                {name: "English", disabled: false, selected: false},*/}
                    {/*                {name: "medical2", disabled: false, selected: false},*/}
                    {/*                {name: "medical3", disabled: false, selected: false},*/}
                    {/*                {name: "medical4", disabled: false, selected: false},*/}
                    {/*            ]}*/}
                    {/*        />*/}
                    {/*    </>*/}
                    {/*}*/}
                    <div className={cls.formRepeat2}>
                        <Datapicker
                            label={"Appointment Date"}
                            small={true}
                            required={true}
                            changeHandler={handleFormValuesChange}
                            name={"facilityAppointmentDate"}
                            error={fieldsErrors["facilityAppointmentDate"]}
                        />
                        <TimePicker
                            label={"Appointment Time"}
                            changeHandler={handleFormValuesChange}
                            required={true}
                            name={"facilityAppointmentTime"}
                            error={fieldsErrors["facilityAppointmentTime"]}
                        />
                    </div>
                    <div className={cls.formRepeat2}>
                        <Input
                            type={"text"}
                            placeholder={"Facility Name"}
                            inputMode={"text"}
                            name={"facilityName"}
                            required={true}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["facilityName"]}
                        />
                        <Input
                            type={"tel"}
                            placeholder={"Facility Phone"}
                            inputMode={"tel"}
                            required={true}
                            name={"facilityPhone"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["facilityPhone"]}
                        />
                    </div>
                    <div className={cls.formRepeat1}>
                        <Input
                            type={"text"}
                            placeholder={"Facility Street Address"}
                            inputMode={"text"}
                            required={true}
                            name={"facilityStreet"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["facilityStreet"]}
                        />
                    </div>
                    <div className={cls.formRepeat3}>
                        <Input
                            type={"text"}
                            placeholder={"City"}
                            inputMode={"text"}
                            required={true}
                            name={"facilityCity"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["facilityCity"]}
                        />
                        <Select
                            placeholder={"State"}
                            required={true}
                            options={[
                                ...usStates
                            ]}
                            name={"facilityState"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["facilityState"]}
                        />
                        <Input
                            type={"text"}
                            placeholder={"Zip Code"}
                            inputMode={"text"}
                            required={true}
                            name={"facilityZipcode"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["facilityZipcode"]}
                        />
                    </div>
                    <div className={cls.formRepeat1}>
                        <Textarea className={cls.textarea} label={"Special Instructions"} name={"instructions"}
                                  changeHandler={handleFormValuesChange} autoResize={false} required={true} error={fieldsErrors["instructions"]}/>
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