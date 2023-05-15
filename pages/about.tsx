import React, {FC} from "react"
import cls from "../styles/About.module.scss"
import Image from 'next/image'
import "swiper/swiper.css"
import "swiper/css"
import "swiper/css/effect-fade"
import 'swiper/css/pagination'
import "swiper/css/navigation"
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination, Navigation, Autoplay} from "swiper";
import AboutMedicalCard, {AboutMedicalCardProps} from "../components/aboutMedicalCard/aboutMedicalCard";
import useScreenSize from "@/hooks/useScreenSize";

const About = ({

                 }) => {
    const slideContent:Array<AboutMedicalCardProps> = [
        {
            title: "Ambulatory Service",
            icon: "/images/iconCarrier.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Stretcher Services",
            icon: "/images/aboutCard2.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Wheelchair Services",
            icon: "/images/aboutCard3.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Ambulance Transportation",
            icon: "/images/aboutCard4.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Basic Life Support ",
            icon: "/images/iconCarrier.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Advance Life Support ",
            icon: "/images/aboutCard2.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Translation Legal & Medical",
            icon: "/images/aboutCard3.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Critical Care Transport ",
            icon: "/images/aboutCard4.svg",
            arrow: "/images/arrowAbout.svg",
        },
    ]

    const screenSize = useScreenSize()

    return (
        <div className={cls.about} data-aos={"zoom-in"}>
            <section className={cls.aboutMain}>
                <div className={cls.aboutInfoMain}>
                    <h1>About Us</h1>
                    <h2>Why choose us</h2>
                    <p>Cal Care currently employs over 35 professionals including drivers,<br /> managers, EMTs, and accounting specialists.
                        Established in 2010, <br /> our company has experienced tremendous growth and success<br /> in providing quality healthcare services.
                        We have expanded our services<br />  to partner with reputable agencies, delivering the best possible care to our clients.<br />
                        At Cal Care, we are committed to maintaining the American<br />  dream of hard work and success, while continuously striving to <br /> improve and innovate our healthcare services.</p>
                </div>
            </section>
            <section className={cls.companyInfo} data-aos={"fade-right"}>
                <div className={cls.companyInfoImg}>
                    <Image className={cls.compImg} src={'/images/ambulanceTeam.webp'} alt={"team"} width={550} height={800} />
                </div>
                <div className={cls.companyInfoText}>
                    <h2>For years our company has provided <br/> quality medical transportation.</h2>
                    <p className={cls.infoText1}>At CalCare, we are committed to providing safe and reliable transportation services to our members. As a company, we are growing fast and are eager to earn your business. We understand that medical transportation needs can vary greatly, which is why we strive to offer a comprehensive range of services to meet your needs.
                        Whether you require ambulatory transportation, in-home care, or any other type of medical transportation service, we are here to help. Our goal is to provide a one-stop-shop for medical service providers, offering the convenience and peace of mind that comes with knowing that all your transportation needs are being taken care of by a single trusted provider.
                        We look forward to the opportunity to earn your business and establish a long-lasting business relationship that will benefit both our organizations for many years to come.
                        Sincerely,</p>
                    <p className={cls.infoText2}>Joe Mkhitaryan</p>
                    <p className={cls.infoText3}>Director, Client Relations General Medical Transportation</p>
                </div>
            </section>
            <div className={cls.aboutSlider}>
                <Swiper
                    className={cls.generalSlider}
                    modules={[Pagination, EffectFade, Autoplay]}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        enabled: true,
                        clickable: true,
                        clickableClass: `${cls.otherBulletsWrapper}`,
                        bulletClass: ` ${cls.horizontalClass} swiper-pagination-bullet`,
                        bulletActiveClass: `${cls.activeBulletClass} swiper-pagination-bullet-active`,
                    }}
                    slidesPerView={screenSize.width < 700 ? 1 :screenSize.width < 1024 ? 2 : screenSize.width < 1300 ? 3 : 4}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                        {
                            slideContent.map(({title,icon,arrow}, index) => {
                                return (
                                    <SwiperSlide
                                        className={cls.slide}
                                        key={index}
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <AboutMedicalCard link={"/services"} dataAos={{type: "zoom-in", delay: 300 * index}} title={title} icon={icon} arrow={arrow}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                </Swiper>
            </div>
        </div>

    )
}

export default About