import React, {FC} from "react"
import cls from "../styles/Refer.module.scss"
import Input from "../components/input/input";
import Select from "../components/select/select";

const Refer:FC<any> = ({

}) => {
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
                        <Input
                            type={"text"}
                            placeholder={"Date of Birth (DOB)"}
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
                            placeholder={"Medical"}
                            required={true}
                            options={[
                                {name: "medical1", disabled: false, selected: false},
                                {name: "medical2", disabled: false, selected: false},
                                {name: "medical3", disabled: false, selected: false},
                                {name: "medical4", disabled: false, selected: false},
                            ]}
                        />
                        <Select
                            placeholder={"Medical"}
                            required={true}
                            options={[
                                {name: "medical1", disabled: false, selected: false},
                                {name: "medical2", disabled: false, selected: false},
                                {name: "medical3", disabled: false, selected: false},
                                {name: "medical4", disabled: false, selected: false},
                            ]}
                        />
                        <Select
                            placeholder={"Medical"}
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
                            placeholder={"Medical"}
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