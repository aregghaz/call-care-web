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
            title: "Physical Therapy",
            icon: "/images/iconCarrier.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Physical Therapy",
            icon: "/images/aboutCard2.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Physical Therapy",
            icon: "/images/aboutCard3.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Physical Therapy",
            icon: "/images/aboutCard4.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Physical Therapy",
            icon: "/images/iconCarrier.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Physical Therapy",
            icon: "/images/aboutCard2.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Physical Therapy",
            icon: "/images/aboutCard3.svg",
            arrow: "/images/arrowAbout.svg",
        },
        {
            title: "Physical Therapy",
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
                    <p>General Medical (GM) currently has a staff of over <br /> thirty-five people
                        including drivers, managers, <br /> EMT’s and accounting specialists.
                        Created in 2010,<br /> the company has enjoyed all that the American <br />
                        dream has to offer and has expanded service to <br/> reputable service agencies.</p>
                </div>
            </section>
            <section className={cls.companyInfo} data-aos={"fade-right"}>
                <div className={cls.companyInfoImg}>
                    <Image className={cls.compImg} src={'/images/ambulanceTeam.webp'} alt={"team"} width={550} height={800} />
                </div>
                <div className={cls.companyInfoText}>
                    <h2>For years our company has provided <br/> quality medical transportation.</h2>
                    <p className={cls.infoText1}>We are growing fast and we are eager to earn your <br/> business.
                        General Medical is equipped to handle all the <br/> transportation
                        needs that you can imagine. From <br/> Ambulatory Transportation
                        to in home care, we provide a  <br/>one stop shop to
                        aid medical service providers. We look <br/> forward to being
                        in contact with you, and further look <br/> forward to establish
                        a business relationship that will last <br/> for many years to come! <br/>
                        <br/>
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
                                        <AboutMedicalCard dataAos={{type: "zoom-in", delay: 300 * index}} title={title} icon={icon} arrow={arrow}/>
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