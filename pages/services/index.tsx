import React, {FC} from "react"
import cls from "../../styles/Services.module.scss"
import "swiper/swiper.css"
import "swiper/css"
import "swiper/css/effect-fade"
import 'swiper/css/pagination'
import BigService from "@/components/big-service/big-service";
import "swiper/css/navigation"
import useScreenSize from "@/hooks/useScreenSize";
import {useSelector} from "react-redux";
import {servicesListSelector} from "@/store/slices/services/services.slice";
import {useRouter} from "next/router";
import Tilt from 'react-parallax-tilt';
import Input from "@/components/input/input";


interface ServicesProps {

}

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}

const Services: FC<ServicesProps> = ({}) => {
    const screen = useScreenSize()
    const handleTextareaHeight = (evt) => {
        evt.target.style.height = "50px";
        evt.target.style.height = (evt.target.scrollHeight) + "px";
    }

    type serviceTypes = "AmbulatoryService" | "" | "Transportation" | "MedicalHomeModification"

    type TypeService = {
        serviceType: serviceTypes,
        serviceName: string,
        serviceDescription: string,
        serviceId: string | number,
    };


    const services = useSelector(servicesListSelector)

    const router = useRouter()
    return (
        <>
            <section className={cls.hero} data-aos={"fade-right"}>
                <div className={cls.heroContent}>
                    <h1>Our Services</h1>
                    <p>
                        CalCare provides comprehensive medical services to Southern California, with a mission to
                        improve patients` health outcomes through high-quality and affordable healthcare. Our skilled
                        healthcare team is committed to delivering exceptional care and support tailored to each
                        patient`s unique needs.
                    </p>
                </div>
                <div className={cls.heroRight}>
                    <div className={cls.heroRightBackground}>

                    </div>
                </div>
            </section>
            <section className={cls.servicesGlob}>
                <div className={cls.serviceGlobTitle}>
                    <div className={cls.serviceMiniTitle}>
                        <h3>OUR SERVICES</h3>
                    </div>
                    <div className={cls.serviceBigTitle}>
                        <h2>What Services We Offer</h2>
                    </div>
                </div>
                <div className={cls.servicesWrapper}>
                    {
                        services.map((item, index) => {
                            return (
                                <Tilt style={{display: "flex", justifyContent: "center"}} key={index} tiltMaxAngleX={8}
                                      tiltMaxAngleY={8}>
                                    <BigService
                                        name={item.serviceName}
                                        description={item.serviceDescription}
                                        defaultLink={"/services"}
                                        loadService={() => {
                                            router.push(`/services/${item.serviceId.toString()}`)
                                        }}
                                    />
                                </Tilt>
                            )
                        })
                    }
                </div>
            </section>

            <section className={cls.serviceContact} data-aos={"fade"}>
                <div className={cls.contactRight}>
                    <div className={cls.contactContent}>
                        <h2>Contact Us</h2>
                        <form className={cls.contactForm}>
                            <div className={cls.contactFormMain}>
                                <Input type={"text"} placeholder={"Name"} inputMode={"text"}/>
                                <Input type={"email"} placeholder={"Email"} inputMode={"email"}/>
                                <Input type={"tel"} placeholder={"Phone"} inputMode={"tel"}/>
                                <Input type={"text"} placeholder={"City"} inputMode={"text"}/>
                            </div>
                            <Input type={"text"} inputMode={"text"} placeholder={"Company"}/>
                            <div className={cls.formComment}>
                                <label htmlFor={"comment"}>Your message</label>
                                <textarea id={"comment"} onChange={handleTextareaHeight}></textarea>
                            </div>
                            <button className={cls.sendButton}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services