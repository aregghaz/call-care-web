import React, {FC} from "react"
import cls from "../styles/Services.module.scss"
import Image from "next/image";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
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
                <div className={cls.heroRight}></div>
            </section>
            <section className={cls.services}>
                <Swiper
                    modules={[EffectFade, Pagination, Autoplay, Navigation]}
                    direction={"horizontal"}
                    className={cls.serviceSlider}
                    navigation={{
                        enabled: true,
                    }}
                    spaceBetween={50}
                    slidesPerView={screen.width > 1350 ? 4 : screen.width < 700 ? 1 : 2}
                    pagination={{
                        clickable: true,
                        // clickableClass: `${cls.bulletsWrapper} swiper-pagination Services_bulletsWrapper__JIyJm swiper-pagination-bullets swiper-pagination-horizontal}`,
                        // bulletClass: `${cls.bulletClass} swiper-pagination-bullet`,
                        // bulletActiveClass: `${cls.activeBulletClass} swiper-pagination-bullet-active`,
                    }}
                    effect={"cards"}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
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