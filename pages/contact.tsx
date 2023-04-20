import React, {FC} from "react"
import cls from "../styles/Contact.module.scss"
// import useScreenSize from "../svgs/hooks/useScreenSize";
import MessageIcon from "../svgs/message";
import TimeIcon from "../svgs/time";
import LocationIcon from "../svgs/location";
import PhoneIcon from "../svgs/phone";
import PinterestIcon from "../svgs/pinterest";
import Link from "next/link";
import SocialLinks from "../components/social-links/social-links";
import useScreenSize from "@/hooks/useScreenSize";
const Contact = ({

}) => {

    const screenSize = useScreenSize()

    const handleTextareaHeight = (evt) => {
        evt.target.style.height = "50px";
        evt.target.style.height = (evt.target.scrollHeight)+"px";
    }

    return (
        <div className={cls.contact}>
            <div className={cls.contactUs}>
                <div className={cls.contactContent}>
                    <div className={cls.formWrapper}>
                        <h2>Have any questions or ideas? <br/> Feel free to contact us!</h2>
                        <form className={cls.form}>
                            <div className={cls.formDetails}>
                                <input type={"text"} placeholder={"Name"}/>
                                <input type={"email"} placeholder={"E-mail"}/>
                                <input type={"tel"} placeholder={"Phone"}/>
                                <input type={"city"} placeholder={"City"}/>
                            </div>
                            <div className={cls.formComment}>
                                <label htmlFor={"comment"}>Your message</label>
                                <textarea id={"comment"} onChange={handleTextareaHeight}>

                                </textarea>
                            </div>
                            <button className={cls.sendButton}>Send Message</button>
                        </form>
                    </div>
                    <div className={cls.info}>
                        <h2>Contact Info</h2>
                        <div className={cls.infoContent}>
                            <ul className={cls.infoOffline}>
                                <li>
                                    <MessageIcon/>
                                    <span className={cls.infoTitile}>info@mygeneralmed.com</span>
                                </li>
                                <li>
                                    <LocationIcon/>
                                    <span className={cls.infoTitile}>We Answer Calls 24/7</span>
                                </li>
                                <li>
                                    <PhoneIcon/>
                                    <div className={cls.infoSub}>
                                        <span className={cls.infoTitile}>(877) 930-9595</span>
                                        <span className={cls.infoTitile}>(877) 930-9595</span>
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
                            <SocialLinks className={cls.socialLinks} colors={"black"}/>
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
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact