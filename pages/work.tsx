import React, {FC, useCallback, useState} from "react"
import cls from '../styles/work.module.scss'
import {useSelector} from "react-redux";
import {availablePositionsSelector} from "@/store/slices/work/work.slice";
import Input from "@/components/input/input";
import FileInput from "@/components/file-input/file-input";
import Textarea from "@/components/textarea/textarea";
import validate from "@/utils/validate";

type TWorkForm = {
    position: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    resumeFile: string,
    resumeText: string,
}

const Work:FC<any> = ({

}) => {
    const availablePositions = useSelector(availablePositionsSelector)
    // const dispatch = useDispatch<AppDispatch>()
    // useEffect(() => {
    //     dispatch(fetchWork())
    // }, [dispatch])
    const requiredFields:Array<string> = [
        "position",
        "firstName",
        "lastName",
        "email",
        "phone",
        "resumeFile",
        "resumeText",
    ]

    const [formValues, setFormValues] = useState<TWorkForm>({
        position: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resumeFile: "",
        resumeText: "",
    })

    const [fieldsErrors, setFieldsErrors] = useState<TWorkForm>({} as TWorkForm)

    const handleFormValuesChange:Function = (value: string, name: string):void => {
        if (name === "resumeText") {
            setFieldsErrors({...fieldsErrors, [name]: "", resumeFile: ""})
        } else if (name === "resumeFile") {
            setFieldsErrors({...fieldsErrors, [name]: "", resumeText: ""})
        } else {
            setFieldsErrors({...fieldsErrors, [name]: ""})
        }
        setFormValues({...formValues, [name]: value})
    }

    const sendData = useCallback( () => {
        alert("all okay!")
        console.log(formValues)
    }, [formValues])

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errors = validate(formValues,requiredFields)
        if (Object.keys(errors).length > 0 && errors.resumeFile && errors.resumeText === undefined || Object.keys(errors).length > 0 && errors.resumeText && errors.resumeFile === undefined) {
            sendData()
        } else if (Object.keys(errors).length > 0) {
            if (errors.resumeFile === undefined && errors.resumeText) {
                delete errors.resumeText
            } else if (errors.resumeText === undefined && errors.resumeFile) {
                delete errors.resumeFile
            }
            setFieldsErrors(errors)
        } else {
            sendData()
        }
    }

    return (
        <div className={cls.work}>
            <div className={cls.workInfo}>
                <h1>Work With Us</h1>
                <div className={cls.workMenu}>
                    <h2>Available Positions</h2>
                    <ul>
                        {
                            availablePositions.map((position:string, index:number) => {
                                return (
                                    <li key={index}>{position}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={cls.workForm}>
                <form action="#" onSubmit={handleSubmit}>
                    <div className={cls.inputInfos}>
                        <Input error={fieldsErrors["position"]} required={true} changeHandler={handleFormValuesChange} type={"text"} inputMode={"text"} name={"position"} className={cls.inputPosition} placeholder={"Position Applying For"}/>
                        <Input error={fieldsErrors["firstName"]} required={true} changeHandler={handleFormValuesChange} type={"text"} inputMode={"text"} name={"firstName"} placeholder={"First Name"} className={cls.inputsWork}/>
                        <Input error={fieldsErrors["lastName"]} required={true} changeHandler={handleFormValuesChange} type={"text"} inputMode={"text"} name={"lastName"} placeholder={"Last Name"} className={cls.inputsWork} />
                        <Input error={fieldsErrors["email"]} required={true} changeHandler={handleFormValuesChange} type={"email"} inputMode={"email"} name={"email"} placeholder={"Email"} className={cls.inputsWork}/>
                        <Input error={fieldsErrors["phone"]} required={true} changeHandler={handleFormValuesChange} type={"tel"} inputMode={"tel"} name={"phone"} placeholder={"Phone"} className={cls.inputsWork}/>
                    </div>
                    <div className={cls.inputComment}>
                        <FileInput
                            label={"Upload Your Resume"}
                            maxFileSize={25600}
                            allowedFileExt={["pdf"]}
                            name={"resumeFile"}
                            changeHandler={handleFormValuesChange}
                            error={fieldsErrors["resumeFile"]}
                        />
                        <Textarea
                            required={true}
                            error={fieldsErrors["resumeText"]}
                            label={"Or Copy and Paste Your Resume Bellow"}
                            className={cls.commentTextarea}
                            name={"resumeText"}
                            changeHandler={handleFormValuesChange}
                            autoResize={false}
                        />
                    </div>
                    <div className={cls.buttonWrapper}>
                        <button className={cls.workSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Work