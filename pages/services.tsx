import React, {FC, useEffect, useState} from "react"
import cls from "../styles/Services.module.scss"
import Image from "next/image";
import {Autoplay, EffectCoverflow, EffectFade, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css"
import "swiper/css"
import "swiper/css/effect-fade"
import 'swiper/css/pagination'
import BigService from "@/components/big-service/big-service";
import "swiper/css/navigation"
import useScreenSize from "@/hooks/useScreenSize";
import {symlink} from "fs";
import Type = module

const Serivces:FC<any> = ({

}) => {
    const screen = useScreenSize()
    const handleTextareaHeight = (evt) => {
        evt.target.style.height = "50px";
        evt.target.style.height = (evt.target.scrollHeight)+"px";
    }

    type serviceTypes = "HomeHealth" | "Therapy" | "Transportation" | "MedicalHomeModification"

    type TypeService = {
        serviceType: serviceTypes,
        serviceName: string,
        description: string,
    }

    const allServices:Array<TypeService> = [
        {
            serviceType: "HomeHealth",
            serviceName: "Home service",
            description: "lorem ipsum dolor sit amet 1",
        },
        {
            serviceType: "Therapy",
            serviceName: "Therapy service",
            description: "lorem ipsum dolor sit amet 2",
        },
        {
            serviceType: "Transportation",
            serviceName: "Transportation service",
            description: "lorem ipsum dolor sit amet 3",
        },
        {
            serviceType: "MedicalHomeModification",
            serviceName: "Medical Home Modification service",
            description: "lorem ipsum dolor sit amet 4",
        },
        {
            serviceType: "HomeHealth",
            serviceName: "Home service",
            description: "lorem ipsum dolor sit amet 1",
        },
        {
            serviceType: "Therapy",
            serviceName: "Therapy service",
            description: "lorem ipsum dolor sit amet 2",
        },
        {
            serviceType: "Transportation",
            serviceName: "Transportation service",
            description: "lorem ipsum dolor sit amet 3",
        },
        {
            serviceType: "MedicalHomeModification",
            serviceName: "Medical Home Modification service",
            description: "lorem ipsum dolor sit amet 4",
        },
        {
            serviceType: "Transportation",
            serviceName: "Transportation service",
            description: "lorem ipsum dolor sit amet 3",
        },
        {
            serviceType: "MedicalHomeModification",
            serviceName: "Medical Home Modification service",
            description: "lorem ipsum dolor sit amet 4",
        },
        {
            serviceType: "HomeHealth",
            serviceName: "Home service",
            description: "lorem ipsum dolor sit amet 1",
        },
        {
            serviceType: "MedicalHomeModification",
            serviceName: "Medical Home Modification service",
            description: "lorem ipsum dolor sit amet 4",
        },
    ]

    const [type, setType] = useState<serviceTypes | "All">("All")
    const [services, setServices] = useState<Array<TypeService>>(allServices)

    const handleTypeChange = (e) => {
        setType(e.currentTarget.id)
    }

    useEffect(() => {
        console.log(type)
        setServices(
            allServices.filter(item => {
                return type === "All" ? item : item.serviceType === type
            })
        )
    }, [type])

    return (
        <>
            <section className={cls.hero}>
                <div className={cls.heroContent}>
                    <h1>Our Services</h1>
                    <p>
                        General Medical is a full service medical service provider serving Greater Southern California
                    </p>
                </div>
                <div className={cls.heroRight}>
                    <div className={cls.heroRightBackground}></div>
                </div>
            </section>
            <section className={cls.services}>
                {/*<Swiper*/}
                {/*    effect={"coverflow"}*/}
                {/*    grabCursor={true}*/}
                {/*    centeredSlides={true}*/}
                {/*    slidesPerView={"auto"}*/}
                {/*    coverflowEffect={{*/}
                {/*        rotate: 50,*/}
                {/*        stretch: 0,*/}
                {/*        depth: 100,*/}
                {/*        modifier: 1,*/}
                {/*        slideShadows: true,*/}
                {/*    }}*/}
                {/*    pagination={{*/}
                {/*        clickable: true,*/}
                {/*        clickableClass: `${cls.otherBulletsWrapper}`,*/}
                {/*        bulletClass: ` ${cls.horizontalClass} swiper-pagination-bullet`,*/}
                {/*        bulletActiveClass: `${cls.activeBulletClass} swiper-pagination-bullet-active`,*/}
                {/*    }}*/}
                {/*    modules={[EffectCoverflow, Pagination]}*/}
                {/*    className="mySwiper"*/}
                {/*>*/}
                {/*    <SwiperSlide className={cls.slide}>*/}
                {/*        <BigService/>*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide className={cls.slide}>*/}
                {/*        <BigService/>*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide className={cls.slide}>*/}
                {/*        <BigService/>*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide className={cls.slide}>*/}
                {/*        <BigService/>*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide className={cls.slide}>*/}
                {/*        <BigService/>*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide className={cls.slide}>*/}
                {/*        <BigService/>*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide className={cls.slide}>*/}
                {/*        <BigService/>*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide className={cls.slide}>*/}
                {/*        <BigService/>*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide className={cls.slide}>*/}
                {/*        <BigService/>*/}
                {/*    </SwiperSlide>*/}
                {/*</Swiper>*/}
                <div className={cls.servicesNavWrapper}>
                    <div className={cls.servicesNav}>
                        <div className={cls.servicesNavInput}>
                            <h2>Services</h2>
                        </div>
                        <div className={cls.servicesNavMenu}>
                            <nav>
                                <ul>
                                    <li id={"All"} onClick={handleTypeChange}>
                                        <span>All</span>
                                        <div className={cls.line}></div>
                                    </li>
                                    <li id={"HomeHealth"} onClick={handleTypeChange}>
                                        <span >Home Health</span>
                                        <div className={cls.line}></div>
                                    </li>
                                    <li id={"Therapy"} onClick={handleTypeChange}>
                                        <span >Therapy</span>
                                        <div className={cls.line}></div>
                                    </li>
                                    <li id={"Transportation"} onClick={handleTypeChange}>
                                        <span >Transportation</span>
                                        <div className={cls.line}></div>
                                    </li>
                                    <li id={"MedicalHomeModification"} onClick={handleTypeChange}>
                                        <span >Medical Home Modification</span>
                                        <div className={cls.line}></div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className={cls.serviceContent}>
                        {console.log(services)}
                        {
                            services.map(item => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <BigService name={item.serviceName} description={item.description} link={"/"}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className={cls.serviceContact}>
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

export default Serivces