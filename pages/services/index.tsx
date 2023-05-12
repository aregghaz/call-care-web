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


interface ServicesProps {

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
                        improve patients' health outcomes through high-quality and affordable healthcare. Our skilled
                        healthcare team is committed to delivering exceptional care and support tailored to each
                        patient's unique needs.
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
                                <Tilt key={index} tiltMaxAngleX={8} tiltMaxAngleY={8}>
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
            {/*<section className={cls.services} data-aos={"fade-up"}>*/}
            {/*    <div className={cls.servicesNavWrapper}>*/}
            {/*        <div className={cls.servicesNav}>*/}
            {/*            <div className={cls.servicesNavInput}>*/}
            {/*                <h2>Services</h2>*/}
            {/*            </div>*/}
            {/*            <div className={cls.servicesNavMenu}>*/}
            {/*                <nav>*/}
            {/*                    <ul>*/}
            {/*                        <li id={"All"} onClick={handleTypeChange}>*/}
            {/*                            <span>All</span>*/}
            {/*                        </li>*/}
            {/*                        <li id={"HomeHealth"} onClick={handleTypeChange}>*/}
            {/*                            <span>Home Health</span>*/}
            {/*                        </li>*/}
            {/*                        <li id={"Therapy"} onClick={handleTypeChange}>*/}
            {/*                            <span>Therapy</span>*/}
            {/*                        </li>*/}
            {/*                        <li id={"Transportation"} onClick={handleTypeChange}>*/}
            {/*                            <span>Transportation</span>*/}
            {/*                        </li>*/}
            {/*                        <li id={"MedicalHomeModification"} onClick={handleTypeChange}>*/}
            {/*                            <span>Medical Home Modification</span>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </nav>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={cls.serviceContent}>*/}
            {/*            {*/}
            {/*                error ? <ErrorWindow fullscreen={false}/> :*/}
            {/*                services.length <= 0 ?*/}
            {/*                    <LoadingScreen fullscreen={false}/>*/}
            {/*                    :*/}
            {/*                    services.map((item, index) => {*/}
            {/*                        return (*/}
            {/*                            <BigService*/}
            {/*                                key={index}*/}
            {/*                                loadService={loadSelectedService.bind(null, item)}*/}
            {/*                                name={item.serviceName}*/}
            {/*                                description={item.serviceDescription}*/}
            {/*                                defaultLink={"/services"}*/}
            {/*                                link={item.serviceId.toString()}*/}
            {/*                            />*/}
            {/*                        )*/}
            {/*                    })*/}
            {/*            }*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className={cls.serviceContact} data-aos={"fade"}>
                <div className={cls.contactLeft}>
                </div>
                <div className={cls.contactRight}>
                    <div className={cls.contactContent}>
                        <h2>Contact Us</h2>
                        <form className={cls.contactForm}>
                            <div className={cls.contactFormMain}>
                                <input type={"text"} placeholder={"Name"}/>
                                <input type={"email"} placeholder={"Email"}/>
                                <input type={"tel"} placeholder={"Phone"}/>
                                <input type={"text"} placeholder={"City"}/>
                            </div>
                            <input type={"text"} placeholder={"Company"}/>
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