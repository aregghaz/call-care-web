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
                    <p>Cal Care currently employs over 35 professionals including drivers,<br/> managers, EMTs, and
                        accounting specialists.
                        Established in 2010, <br/> our company has experienced tremendous growth and success<br/> in
                        providing quality healthcare services.
                        We have expanded our services<br/> to partner with reputable agencies, delivering the best
                        possible care to our clients.<br/>
                        At Cal Care, we are committed to maintaining the American<br/> dream of hard work and success,
                        while continuously striving to <br/> improve and innovate our healthcare services.</p>
                </div>
            </section>
            <section className={cls.companyInfo} data-aos={"fade-right"}>
                <div className={cls.companyInfoImg}>
                    <Image className={cls.compImg} src={'/images/ambulanceTeam.webp'} alt={"team"} width={550}
                           height={800}/>
                </div>
                <div className={cls.companyInfoText}>
                    <h2>For years our company has provided <br/> quality medical transportation.</h2>
                    <p className={cls.infoText1}>At CalCare, we are committed to providing safe and reliable
                        transportation services to our members. As a company, we are growing fast and are eager to earn
                        your business. We understand that medical transportation needs can vary greatly, which is why we
                        strive to offer a comprehensive range of services to meet your needs.
                        Whether you require ambulatory transportation, in-home care, or any other type of medical
                        transportation service, we are here to help. Our goal is to provide a one-stop-shop for medical
                        service providers, offering the convenience and peace of mind that comes with knowing that all
                        your transportation needs are being taken care of by a single trusted provider.
                        We look forward to the opportunity to earn your business and establish a long-lasting business
                        relationship that will benefit both our organizations for many years to come.
                        Sincerely,</p>
                    <p className={cls.infoText3}>Director, Client Relations General Medical Transportation</p>
                </div>
            </section>
            <section className={cls.aboutBottomWrapper}>
                <div className={cls.aboutWrapperLeft}>
                    <div className={cls.aboutLeftText}>
                        <p>Thank you for choosing Calcare as your healthcare partner.
                            We look forward to serving you and being a part of your journey towards a healthier,
                            happier life.</p>
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