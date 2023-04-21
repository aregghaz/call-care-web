import React, {FC} from "react"
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

const Serivces:FC<any> = ({

}) => {
    const screen = useScreenSize()
    const handleTextareaHeight = (evt) => {
        evt.target.style.height = "50px";
        evt.target.style.height = (evt.target.scrollHeight)+"px";
    }

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
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                        clickableClass: `${cls.otherBulletsWrapper}`,
                        bulletClass: ` ${cls.horizontalClass} swiper-pagination-bullet`,
                        bulletActiveClass: `${cls.activeBulletClass} swiper-pagination-bullet-active`,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className={cls.slide}>
                        <BigService/>
                    </SwiperSlide>
                    <SwiperSlide className={cls.slide}>
                        <BigService/>
                    </SwiperSlide>
                    <SwiperSlide className={cls.slide}>
                        <BigService/>
                    </SwiperSlide>
                    <SwiperSlide className={cls.slide}>
                        <BigService/>
                    </SwiperSlide>
                    <SwiperSlide className={cls.slide}>
                        <BigService/>
                    </SwiperSlide>
                    <SwiperSlide className={cls.slide}>
                        <BigService/>
                    </SwiperSlide>
                    <SwiperSlide className={cls.slide}>
                        <BigService/>
                    </SwiperSlide>
                    <SwiperSlide className={cls.slide}>
                        <BigService/>
                    </SwiperSlide>
                    <SwiperSlide className={cls.slide}>
                        <BigService/>
                    </SwiperSlide>
                </Swiper>
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