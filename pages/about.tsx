import React from "react"
import cls from "../styles/About.module.scss"
import Image from 'next/image'
import "swiper/swiper.css"
import "swiper/css"
import "swiper/css/effect-fade"
import 'swiper/css/pagination'
import "swiper/css/navigation"
import sortInSubarray from "@/utils/sortInSubArr";
import useScreenSize from "@/hooks/useScreenSize";
import {useSelector} from "react-redux";
import {servicesImportantListSelector} from "@/store/slices/services/services.slice";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const About = ({}) => {
    // const screenSize = useScreenSize()

    const importantServices = useSelector(servicesImportantListSelector)

    return (
        <div className={cls.about} data-aos={"zoom-in"}>
            <section className={cls.aboutMain}>
                <div className={cls.aboutInfoMain}>
                    <h1>About Us</h1>
                    <h2>Why choose us</h2>
                    <p>"Cal Care currently employs over 35 transportation professionals,<br /> including drivers,
                        logistics managers, and dispatchers. Established in 2010, <br />our company has experienced
                        remarkable growth and success in providing reliable<br /> transportation services.
                        We have expanded our services to collaborate with reputable agencies,<br /> ensuring the highest standards of
                        transportation for our clients.<br />  At Cal Care, we are committed to upholding the American dream of diligence and achievement,<br />
                        while constantly seeking ways to enhance and innovate our transportation solutions."</p>
                </div>
            </section>
            <section className={cls.companyInfo} data-aos={"fade-right"}>
                <div className={cls.companyInfoImg}>
                    <Image className={cls.compImg} src={'/images/ambulanceTeam.webp'} alt={"team"} width={550}
                           height={800}/>
                </div>
                <div className={cls.companyInfoText}>
                    <h2>For years our company has provided <br/> quality medical transportation.</h2>
                    <p className={cls.infoText1}>At CalCare, we are dedicated to delivering secure and dependable
                        transportation solutions tailored to our clients' specific requirements.
                        As a company, we are rapidly expanding and are excited to earn your trust.
                        We recognize the diverse nature of transportation needs in the medical field,
                        which is why we strive to offer a comprehensive array of transportation services.
                        Whether you need non-emergency medical transportation, wheelchair-accessible vehicles,
                        or specialized medical transportation, our team is here to assist you.
                        Our objective is to serve as your primary resource for all your transportation needs,
                        offering the convenience and assurance that comes with relying on a single, reputable provider.
                        We eagerly anticipate the opportunity to earn your trust and establish a mutually beneficial,
                        enduring partnership between our organizations. Sincerely,</p>
                    <p className={cls.infoText3}>Director, Client Relations General Medical Transportation</p>
                </div>
            </section>
            <section className={cls.aboutBottomWrapper}>
                <div className={cls.aboutWrapperLeft}>
                    <div className={cls.aboutLeftText}>
                        <p>Thank you for choosing CalCare as your transportation provider.
                            We are committed to your safety and comfort, providing reliable solutions tailored to your needs.
                            Your trust in us is valued, and we look forward to serving you with care and dedication.</p>
                    </div>
                    <div className={cls.aboutLeftImg}>
                        <Image src={"/images/aboutLeftImg.webp"} alt={"about"} width={200} height={200}
                               className={cls.aboutImg}/>
                    </div>
                </div>
                <div className={cls.aboutWrapperRight}>
                    {
                        sortInSubarray(importantServices, 2).map((item,index) => {
                            return (
                                <div className={`${index === 0 ? cls.aboutItemsTop : cls.aboutItemsBottom}`} key={index}>
                                    {
                                        item.map(({
                                                      serviceName,
                                                      serviceDescription,
                                                      serviceIcon,
                                                        serviceId,
                                                  }, index) => {
                                            return (
                                                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} key={index}>
                                                    <Link href={`/services/${serviceId}`} style={{textDecoration: "none", color: "black"}}>
                                                        <div className={cls.aboutItems} key={index}>
                                                            <Image src={serviceIcon} alt={"service"} width={80}
                                                                   height={80}/>
                                                            <h2>{serviceName}</h2>
                                                            <p>{serviceDescription}</p>
                                                        </div>
                                                    </Link>
                                                </Tilt>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default About