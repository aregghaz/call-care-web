import React, {FC, useCallback, useState} from "react"
import cls from "../styles/Contact.module.scss"
import MessageIcon from "../svgs/message";
import TimeIcon from "../svgs/time";
import LocationIcon from "../svgs/location";
import PhoneIcon from "../svgs/phone";
import useScreenSize from "../hooks/useScreenSize";
import Input from "@/components/input/input";
import {useSelector} from "react-redux";
import {globalSelector} from "@/store/slices/global/global.slice";
import {TContactForm} from "@/utils/types";
import validate from "@/utils/validate";
import Textarea from "@/components/textarea/textarea";
const Contact = ({

}) => {

    const screenSize = useScreenSize()

    const globalData = useSelector(globalSelector)

    const requiredFields = [
        "name",
        "email",
        "phone",
        "city",
        "message",
    ]

    const [formValues, setFormValues] = useState<TContactForm>({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    })

    const [fieldsErrors, setFieldsError] = useState<TContactForm>({} as TContactForm)

    const handleFormValuesChange:Function = (value: string, name: string):void => {
        setFieldsError({...fieldsErrors, [name]: ""})
        switch (name) {
            case "name":
                setFormValues({...formValues, name: value})
                break
            case "email":
                setFormValues({...formValues, email: value})
                break
            case "phone":
                setFormValues({...formValues, phone: value})
                break
            case "city":
                setFormValues({...formValues, city: value})
                break
            case "message":
                setFormValues({...formValues, message: value})
                break

        }
    }

    const sendData = useCallback(() => {
        alert("All okay")
        console.log(formValues)
    }, [formValues])

    const handleContactSend = async (e:any) => {
        e.preventDefault()
        const errors = validate(formValues,requiredFields)
        if (Object.keys(errors).length > 0) {
            setFieldsError(errors)
        } else {
            sendData()
        }
    }

    return (
        <div className={cls.contact}>
            <div className={cls.contactUs}>
                <div className={cls.contactContent}>
                    <div className={cls.formWrapper}>
                        <h2>Have any questions or ideas? <br/> Feel free to contact us!</h2>
                        <form className={cls.form} onSubmit={handleContactSend}>
                            <div className={cls.formDetails}>
                                <Input required={true} changeHandler={handleFormValuesChange} type={"text"} error={fieldsErrors.name} name={"name"} placeholder={"Name"} inputMode={"text"}/>
                                <Input required={true} changeHandler={handleFormValuesChange} type={"email"} error={fieldsErrors.email} name={"email"} placeholder={"E-mail"} inputMode={"email"}/>
                                <Input required={true} changeHandler={handleFormValuesChange} type={"tel"} error={fieldsErrors.phone} name={"phone"} inputMode={"tel"} placeholder={"Phone"}/>
                                <Input required={true} changeHandler={handleFormValuesChange} type={"text"} error={fieldsErrors.city} name={"city"} inputMode={"text"} placeholder={"City"}/>
                            </div>
                            <Textarea
                                changeHandler={handleFormValuesChange}
                                error={fieldsErrors.message}
                                name={"message"}
                                label={"Your message"}
                                htmlFor={"message"}
                                autoResize={true}
                                required={true}
                            />
                            <input type={"submit"} value={"Send Message"} className={cls.sendButton}/>
                            {/*<button className={cls.sendButton}>Send Message</button>*/}
                        </form>
                    </div>
                    <div className={cls.info}>
                        <h2>Contact Info</h2>
                        <div className={cls.infoContent}>
                            <ul className={cls.infoOffline}>
                                <li>
                                    <MessageIcon/>
                                    <span className={cls.infoTitile}>{globalData.email}</span>
                                </li>
                                <li>
                                    <LocationIcon/>
                                    <span className={cls.infoTitile}>We Answer Calls 24/7</span>
                                </li>
                                <li>
                                    <PhoneIcon/>
                                    <div className={cls.infoSub}>
                                        <span className={cls.infoTitile}>{globalData.phoneNumber}</span>
                                    </div>
                                </li>
                                <li>
                                    <TimeIcon/>
                                    <div className={cls.infoSub}>
                                        <span className={cls.infoTitile}>Business Hours</span>
                                        <span>24/7/365</span>
                                    </div>
                                </li>
                                <li>
                                    <TimeIcon/>
                                    <div className={cls.infoSub}>
                                        <span className={cls.infoTitile}>Office Hours</span>
                                        <span>Mon 08:00 AM – 6:00 PM</span>
                                        <span>Tue 08:00 AM – 6:00 PM</span>
                                        <span>Wed 08:00 AM – 6:00 PM</span>
                                        <span>Thu 08:00 AM – 6:00 PM</span>
                                        <span>Fri 08:00 AM – 6:00 PM</span>
                                        <span>Weekends: Appointment Only</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.mapWrapper}>
                <iframe
                    className={cls.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13650.314004079079!2d44.52395028493062!3d40.18495401592037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd218c0499f7%3A0x54165e8b3d0b54c3!2z0JrQsNGB0LrQsNC0!5e0!3m2!1sru!2sam!4v1681743418142!5m2!1sru!2sam"
                    width={screenSize.width - 5}
                    height={screenSize.height - 140}
                    style={{
                        border: "none",
                    }}
                    allowFullScreen={false}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact