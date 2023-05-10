import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import cls from "../styles/Home.module.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination, Navigation, Autoplay, EffectCreative} from "swiper";
import "swiper/swiper.css"
import "swiper/css"
import React, {useEffect, useState} from "react";
import "swiper/css/effect-fade"
import 'swiper/css/pagination'
import "swiper/css/navigation"
import Link from "next/link";

import Service, {ServiceProps} from "../components/service/service";
import GeneralMedicalCard, {GeneralMedicalCardProps} from "../components/general-medical-card/general-medical-card";
import OfferService, {OfferServiceProps} from "../components/offer-service/offer-service";
import useScreenSize from "../hooks/useScreenSize";
import {rotate} from "next/dist/server/lib/squoosh/impl";

const inter = Inter({subsets: ['latin']})


export default function Home(props: any) {
    // const testNkar = dynamic(() => import("../public/images/herosliderimage1.webp"))
    const [calcarecardsSlides, setcalcarecardsSlides] = useState(0)

    const services: Array<ServiceProps> = [
        {
            name: "Medical Home\n" + "Modification",
            description: "Lorem ipsum dolor sit amet \m consectetur adipisicing elit.",
            image: {
                src: "/images/service1.svg",
                alt: "service 1",
                width: 100,
                height: 100,
            }
        },
        {
            name: "Home Health",
            description: "Lorem ipsum dolor sit amet \m consectetur adipisicing elit.",
            image: {
                src: "/images/service2.svg",
                alt: "service 2",
                width: 100,
                height: 100,
            }
        },
        {
            name: "Therapy",
            description: "Lorem ipsum dolor sit amet \m consectetur adipisicing elit.",
            image: {
                src: "/images/service3.svg",
                alt: "service 3",
                width: 100,
                height: 100,
            }
        },
        {
            name: "Transportation",
            description: "Lorem ipsum dolor sit amet \m consectetur adipisicing elit.",
            image: {
                src: "/images/service4.svg",
                alt: "service 4",
                width: 100,
                height: 100,
            }
        },
    ]

    const generalMedicalCards: Array<GeneralMedicalCardProps> = [
        {
            name: "About us",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard1.webp",
            link: "/about"
        },
        {
            name: "Our services",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard2.webp",
            link: "/services"
        },
        {
            name: "Work whit us",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard3.webp",
            link: "/work"
        },
        {
            name: "Refer",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard4.webp",
            link: "/refer"
        },
        {
            name: "Contacts",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard1.webp",
            link: "/contact"
        },
        {
            name: "Our Admin Panel",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard2.webp",
            link: "/"
        },
        {
            name: "Mobile App",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard3.webp",
            link: "/"
        },


    ]

    const offerServices: { top: Array<OfferServiceProps>, bottom: Array<OfferServiceProps> } = {
        top: [
            {
                name: "Ambulatory Id",
                description: "Ambulatory Id is mobility at your front door.",
                link: "/services",
                image: {
                    src: "/images/weOfferimg1.webp",
                    alt: "img1",
                    width: 100,
                    height: 100,
                }
            },
            {
                name: "Wheelchair Services",
                description: "General Medical provides exceptional wheelchair transportation",
                link: "/services",
                image: {
                    src: "/images/weOfferimg2.webp",
                    alt: "img1",
                    width: 100,
                    height: 100,
                }
            },
            {
                name: "Stretcher Services",
                description: "Patients in need of transportation that require the use of a stretcher",
                link: "/services",
                image: {
                    src: "/images/weOfferimg3.webp",
                    alt: "img1",
                    width: 100,
                    height: 100,
                }
            }
        ],

        bottom: [
            {
                name: "Ambulance Transportation",
                description: "Ambulance Transportation is for people who need acute",
                link: "/services",
                image: {
                    src: "/images/weOfferimg4.webp",
                    alt: "img1",
                    width: 100,
                    height: 100,
                }
            },
            {
                name: "OUR SERVICES",
                description: "Ambulatory Transportation, Wheelchair Transportation, Stretcher Transportation",
                link: "/services",
                image: {
                    src: "/images/weOfferimg5.webp",
                    alt: "img1",
                    width: 100,
                    height: 100,
                }
            },
            {
                name: "QUOTE / REFERRAL",
                description: "Complete our easy-to-use quote request form to learn how we can serve .",
                link: "/services",
                image: {
                    src: "/images/weOfferimg6.webp",
                    alt: "img1",
                    width: 100,
                    height: 100,
                }
            }
        ]
    }


    const screenSize = useScreenSize()


    return (
        <>
            <Head>
                <title>CalCare</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <main>
                <section className={cls.hero}>
                    <Swiper
                        modules={[EffectFade, Pagination, Autoplay]}
                        direction={screenSize.width <= 1024 ? "horizontal" : "vertical"}
                        className={cls.heroSlider}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            clickableClass: `${cls.bulletsWrapper}`,
                            bulletClass: `${cls.bulletClass} swiper-pagination-bullet`,
                            bulletActiveClass: `${cls.activeBulletClass} swiper-pagination-bullet-active`,
                        }}
                        effect={"fade"}
                        autoplay={{
                            delay: 20000,
                            disableOnInteraction: true,
                        }}
                    >
                        {screenSize.width > 1024 && <>
                            <SwiperSlide className={cls.slide}>
                                <div className={`${cls.sliderPage} ${cls.sliderPage1}`}>
                                    <video autoPlay={true} loop={true} muted={true} playsInline={true}
                                           className={cls.slideVideo}>
                                        <source src={require("../public/videos/homeVideo.mp4")} type={"video/mp4"}/>
                                    </video>
                                    <div className={`${cls.sliderPageContent} ${cls.sliderPage1Content}`}>
                                        <h1>Your Health is Our Top Priority</h1>
                                        <p>Comprehensive Healthcare Services for Californians: Your Partner in Health and Wellness</p>
                                        <Link href={"/services"}>
                                            <Image className={cls.arrowHero} src={"/images/arrowright.svg"}
                                                   alt={"arrow right"} width={100} height={50}/>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>}
                        <SwiperSlide className={cls.slide}>
                            <div className={`${cls.sliderPage} ${cls.sliderPage2}`}>
                                <div className={`${cls.sliderPageContent} ${cls.sliderPage1Content}`}>
                                    <h1>The first wealth is health.</h1>
                                    <p>The patient is not a customer, but a partner in the medical process</p>
                                    <Link href={"/about"}>
                                        <Image className={cls.arrowHero} src={"/images/arrowright.svg"}
                                               alt={"arrow right"}
                                               width={100} height={50}/>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cls.slide}>
                            <div className={`${cls.sliderPage} ${cls.sliderPage3}`}>
                                <div className={`${cls.sliderPageContent} ${cls.sliderPage1Content}`}>
                                    <h1>True Care for Your Health</h1>
                                    <p>The greatest satisfaction for a healthcare provider is to see their patient healthy and happy</p>
                                    <Link href={"/work"}>
                                        <Image className={cls.arrowHero} src={"/images/arrowright.svg"}
                                               alt={"arrow right"}
                                               width={100} height={50}/>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className={cls.services}>
                    <ul>
                        {
                            services.map(({name, description, image}, index) => {
                                return (
                                    <Service className={cls.service} dataAos={{type: "fade-right", duration: 0, delay: index * 200}} key={index} name={name} description={description} image={image}/>
                                )
                            })
                        }
                    </ul>
                </section>
                <section className={cls.generalMedical}>
                    <div className={cls.generalMedicalTop}>
                        <h2> Cal Care is a comprehensive healthcare provider, offering a wide range of medical services to individuals throughout California.</h2>
                        <p>Cal Care is dedicated to providing high-quality and comprehensive healthcare services to individuals and families.<br />
                            Our team of healthcare professionals is committed to helping patients achieve their best possible health outcomes by <br />offering personalized care that meets their unique needs.
                        </p>
                    </div>
                    <div className={cls.generalMedicalBottom}>
                        <div className={cls.generalSliderControls}>
                            <button
                                className={"cardLeft"}
                                style={{
                                    backgroundColor: "#D33834FF",
                                }}
                            >
                                <Image
                                    src={"/images/arrSlide.svg"}
                                    alt={"arrowLeft"} width={40} height={40}
                                    style={{
                                        color: "red",
                                    }}
                                />
                            </button>
                            <button
                                className={"cardRight"}
                                style={{
                                    backgroundColor: "#D33834FF",
                                }}
                            >
                                <Image
                                    style={{
                                        rotate: "180deg"
                                    }}
                                    src={"/images/arrSlide.svg"} alt={"arrowLeft"} width={40} height={40}
                                />
                            </button>
                        </div>
                        <Swiper
                            className={cls.generalSlider}
                            modules={[Navigation, Autoplay]}
                            spaceBetween={screenSize.width > 1000 ? 100 : screenSize.width > 1350 ? 50 : 20}
                            loop={true}
                            slidesPerView={screenSize.width < 600 ? 1 : screenSize.width < 800 ? 1 : screenSize.width < 1300 ? 2 : 3}
                            onSlideChange={swiper => {
                                setcalcarecardsSlides(swiper.activeIndex)
                            }}
                            navigation={{
                                prevEl: ".cardLeft",
                                nextEl: ".cardRight",
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            {
                                generalMedicalCards.map(({name, description, image, link}, index) => {
                                    return (
                                        <SwiperSlide
                                            key={index}
                                        >
                                            <GeneralMedicalCard
                                                dataAos={{
                                                    type: "fade-right",
                                                    delay: index * 200,
                                                }}
                                                link={link}
                                                name={name}
                                                description={description}
                                                image={image}
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </section>
                <section className={cls.believeSec} data-aos={"fade"}>
                    <h1>We are here to transport you to and from your destination with care and comfort.</h1>
                    <p>At CalCare, we hold the belief that the core of healthcare is providing quality service to our clients.
                        Our team of professionals is dedicated to catering to all your home health care needs with a range of services,
                        from Intravenous Injection Therapy to Respiratory Therapy, as well as the expertise of Registered Nurses,
                        Licensed Vocational Nurses, and Physical Therapists. Rest assured that we are committed to providing timely and efficient care.</p>
                    <Link rel="stylesheet" href="/about" className={cls.buttonLink}>
                        <button>View More</button>
                    </Link>
                </section>
                <section className={cls.weOffer}>
                    <div className={cls.titleBox}>
                        <h1>What We Offer</h1>
                    </div>
                    <div className={cls.contentBox}>
                        <div>
                            <div className={cls.topContent}>
                                {
                                    offerServices.top.map(({name, description, link, image}, index) => {
                                        return (
                                            <OfferService
                                                dataAos={{
                                                    type: "zoom-in",
                                                    delay: 200 * index,
                                                    duration: 1000,
                                                }}
                                                name={name}
                                                description={description}
                                                link={link}
                                                image={image}
                                                key={index}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className={`${cls.topContent} ${cls.bottomContent}`}>
                                {
                                    offerServices.bottom.map(({name, description, link, image}, index) => {
                                        return (
                                            <OfferService
                                                dataAos={{
                                                    type: "zoom-in",
                                                    delay: 300 * index,
                                                    duration: 1000,
                                                }}
                                                name={name}
                                                description={description}
                                                link={link}
                                                image={image}
                                                key={index}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </section>
                <section className={cls.applications} data-aos={"flip-right"} data-aos-duration={2000}>
                    <Swiper
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },

                        }}
                        modules={[EffectCreative, Pagination]}
                        className="mySwiper"
                        pagination={{
                            clickable: true,
                            clickableClass: `${cls.otherBulletsWrapper}`,
                            bulletClass: ` ${cls.horizontalClass} swiper-pagination-bullet`,
                            bulletActiveClass: `${cls.activeBulletClass} swiper-pagination-bullet-active`,
                        }}
                    >

                        <SwiperSlide className={cls.slide}>
                            <div className={`${cls.appSlidePage} ${cls.sliderAdmin}`}>
                                <div className={cls.slidContentBox}>
                                    <h1>Our Admin Panel</h1>
                                    <p>CalCare's admin panel is a powerful, user-friendly tool that streamlines operations and enables efficient management
                                        of all aspects of the company's healthcare services. It offers real-time access to key data and metrics,
                                        allowing for quick decision-making and strategic planning. The panel features patient information management,
                                        staff scheduling, financial performance monitoring, and easy communication between staff members. It is highly
                                        customizable, with options for creating custom reports, setting up automated alerts, and integrating with other
                                        software systems. CalCare's admin panel is an essential tool for any healthcare organization looking to optimize its operations
                                        , enhance patient care, and improve overall efficiency.</p>
                                    <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30}
                                                             height={30}/>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cls.slide}>
                            <div className={`${cls.appSlidePage} ${cls.sliderMobile}`}>
                                <div className={cls.slidContentBox}>
                                    <h1>Admin Trips</h1>
                                    <p>CalCare's Admin Panel Trips provides a comprehensive solution for managing all aspects of patient transportation.
                                        With our user-friendly interface, you can easily schedule and manage trips, view trip histories, and access real-time data on trip status.
                                        Our advanced tracking system allows you to monitor the progress of each trip in real-time, ensuring that patients arrive at
                                        their destination on time and with the highest level of care. Additionally, our Admin Panel Trips feature provides customizable
                                        reporting and analytics, allowing you to easily track key performance metrics and make data-driven decisions to improve your transportation
                                        services. With CalCare's Admin Panel Trips, you can streamline your transportation operations and provide exceptional patient care.</p>
                                    <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30}
                                                             height={30}/>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cls.slide}>
                            <div className={`${cls.appSlidePage} ${cls.sliderAdmin2}`}>
                                <div className={cls.slidContentBox}>
                                    <h1>Price List and More</h1>
                                    <p>CalCare's admin panel offers a comprehensive price list for all our healthcare services, from wheelchair transportation to home health care. Our transparent pricing model ensures that clients have full visibility of the costs associated with their care, enabling them to make informed decisions about their healthcare needs.
                                    </p>
                                    <button>Download now <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30}
                                                                height={30}/></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cls.slide}>
                            <div className={`${cls.appSlidePage} ${cls.sliderAdmin3}`}>
                                <div className={cls.slidContentBox}>
                                    <h1>Admin Panel Dashboard</h1>
                                    <p>The Cal Care admin panel dashboard is highly customizable, allowing healthcare providers
                                        to tailor it to their specific needs and preferences. From setting up automated alerts to
                                        integrating with other software systems, the dashboard offers a range of options to help streamline operations and boost efficiency.
                                    </p>
                                    <button>Download now <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30}
                                                                height={30}/></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/*<SwiperSlide className={cls.slide}>*/}
                        {/*    <div className={`${cls.appSlidePage} ${cls.sliderApp}`}>*/}
                        {/*        <div className={cls.slidContentBox}>*/}
                        {/*            <h1>Mobile App CallCare</h1>*/}
                        {/*            <p>Article 18 of the Constitution of Ireland provides that 43 of the 60 senators are*/}
                        {/*                to be*/}
                        {/*                elected from five vocational panels. The Administrative Panel is defined in*/}
                        {/*                Article*/}
                        {/*                18.7.1º(v) as Public Administration and social services, including voluntary*/}
                        {/*                social*/}
                        {/*                activities</p>*/}
                        {/*            <button>Download now <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30}*/}
                        {/*                                        height={30}/></button>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</SwiperSlide>*/}

                    </Swiper>
                </section>
                <section className={cls.infoSec}>
                    <div className={cls.infoSlidWrapper}>
                        <div className={cls.miniSlid}>
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                direction={"horizontal"}
                                className={cls.heroSlider}
                                spaceBetween={0}
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                    clickableClass: `${cls.otherBulletsWrapper}`,
                                    bulletClass: ` ${cls.horizontalClass} swiper-pagination-bullet`,
                                    bulletActiveClass: `${cls.activeBulletClass} swiper-pagination-bullet-active`,
                                }}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                            >
                                <SwiperSlide className={`${cls.slide}`}>
                                    <div className={cls.miniSlidBox}>
                                        <p>Cal Care offers transparent pricing with a comprehensive price list for all services, enabling clients to make informed decisions about their healthcare needs. </p>
                                        <button>Read More <Link href={"/about"}> <Image src={"/images/Arrow 3.svg"}
                                                                                        alt={"arrow"} width={30}
                                                                                        height={30}/></Link></button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={cls.slide}>
                                    <div className={cls.miniSlidBox}>
                                        <p>Cal Care offers a transparent pricing model with no hidden fees, ensuring fair and competitive pricing for all our services. We strive to make the healthcare experience stress-free for both healthcare providers and patients.
                                        </p>
                                        <button>Read More <Link href={"/about"}> <Image src={"/images/Arrow 3.svg"}
                                                                                        alt={"arrow"} width={30}
                                                                                        height={30}/></Link></button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={cls.slide}>
                                    <div className={cls.miniSlidBox}>
                                        <p>Cal Care offers dedicated customer support from a team of healthcare professionals who are committed to providing the highest level of care and support. </p>
                                        <button>Read More <Link href={"/about"}> <Image src={"/images/Arrow 3.svg"}
                                                                                        alt={"arrow"} width={30}
                                                                                        height={30}/></Link></button>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className={cls.infoSlidImg}>
                        <Image className={cls.imgSlide} src={"/images/ambulanceTeam.webp"} alt={"ambulanceTeam"}
                               width={450}
                               height={600}/>
                    </div>
                </section>
            </main>
        </>
    )
}
