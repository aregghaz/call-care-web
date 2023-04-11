import React, {FC} from "react"
import cls from "./homeMain.module.scss"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"

const HomeMain:FC<any> = ():React.ReactElement => {
    return <>
        <div className={cls.mainGlob}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className={cls.slide}><div className={cls.sliderPage}></div></SwiperSlide>
                <SwiperSlide className={cls.slide}><div className={cls.sliderPage}></div></SwiperSlide>
                <SwiperSlide className={cls.slide}><div className={cls.sliderPage}></div></SwiperSlide>
            </Swiper>
        </div>

    </>
}

export default HomeMain