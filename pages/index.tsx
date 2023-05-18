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
import {servicesImportantListSelector, servicesShortcutListSelector} from "@/store/slices/services/services.slice";
import {useSelector} from "react-redux";
import sortInSubarray from "@/utils/sortInSubArr";

const inter = Inter({subsets: ['latin']})


export default function Home(props: any) {
    // const testNkar = dynamic(() => import("../public/images/herosliderimage1.webp"))
    const [calcarecardsSlides, setcalcarecardsSlides] = useState(0)

    const services = useSelector(servicesImportantListSelector)

    // const services: Array<ServiceProps> = [
    //     {
    //         name: "Ambulatory Service",
    //         description: "At CalCare, we understand that  \n mobility can be a challenge for some individuals, which is why we offer \n a comprehensive ambulatory service.",
    //         image: {
    //             src: "/images/service1.svg",
    //             alt: "service 1",
    //             width: 100,
    //             height: 100,
    //         }
    //     },
    //     {
    //         name: "Wheelchair Services",
    //         description: "We are tailored to meet the unique needs of our clients. Our vehicles are equipped with electric wheelchair ramps and lifts, making it easy and convenient for our clients to enter and exit the vehicle comfortably and safely.",
    //         image: {
    //             src: "/images/service2.svg",
    //             alt: "service 2",
    //             width: 100,
    //             height: 100,
    //         }
    //     },
    //     {
    //         name: "Stretcher Services",
    //         description: "At CalCare, we understand that some patients require transportation on a stretcher, and we are equipped to provide safe and reliable stretcher services to meet their needs.",
    //         image: {
    //             src: "/images/service3.svg",
    //             alt: "service 3",
    //             width: 100,
    //             height: 100,
    //         }
    //     },
    //     {
    //         name: "Ambulance Transportation",
    //         description: "At CalCare, we understand that there are times when urgent medical attention is required outside of a hospital setting. ",
    //         image: {
    //             src: "/images/service4.svg",
    //             alt: "service 4",
    //             width: 100,
    //             height: 100,
    //         }
    //     },
    // ]

    const generalMedicalCards: Array<GeneralMedicalCardProps> = [
        {
            name: "About us",
            description: "At Cal Care, we are proud to have a team of highly skilled and compassionate healthcare professionals who are committed to providing personalized care that meets the unique needs of each patient.",
            image: "/images/calcarecard1.webp",
            link: "/about"
        },
        {
            name: "Our services",
            description: "Cal Care offers a wide range of healthcare services to individuals and families across Greater Southern California. ",
            image: "/images/calcarecard2.webp",
            link: "/services"
        },
        {
            name: "Work with us",
            description: " We believe that our employees are the foundation of our success, and we are committed to providing a supportive and collaborative work environment where our team members can thrive.",
            image: "/images/calcarecard3.webp",
            link: "/work"
        },
        {
            name: "Refer",
            description: "At CalCare, we believe that the highest compliment our patients can give us is the referral of their friends and family.",
            image: "/images/calcarecard4.webp",
            link: "/refer"
        },
        {
            name: "Contacts",
            description: "If you need to get in touch with Cal Care, we offer multiple ways to contact us. ",
            image: "/images/calcarecard5.webp",
            link: "/contact"
        },
        {
            name: "Our Admin Panel",
            description: "CalCare's admin panel is a powerful, user-friendly tool that streamlines operations and enables efficient management of all aspects of the company's healthcare services.",
            image: "/images/calcarecard6.webp",
            link: "/"
        },
        // {
        //     name: "Mobile App",
        //     description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
        //     image: "/images/calcarecard3.webp",
        //     link: "/"
        // },


    ]

    const offerServices = useSelector(servicesShortcutListSelector)

    // const offerServices: { top: Array<OfferServiceProps>, bottom: Array<OfferServiceProps> } = {
    //     top: [
    //         {
    //             name: "Ambulatory Service",
    //             description: "Which is why we offer a comprehensive ambulatory service..",
    //             link: "/services",
    //             image: {
    //                 src: "/images/weOfferimg1.webp",
    //                 alt: "img1",
    //                 width: 100,
    //                 height: 100,
    //             }
    //         },
    //         {
    //             name: "Wheelchair Services",
    //             description: "We are tailored to meet the unique needs of our clients. ",
    //             link: "/services",
    //             image: {
    //                 src: "/images/aboutMainImg.webp",
    //                 alt: "img1",
    //                 width: 100,
    //                 height: 100,
    //             }
    //         },
    //         {
    //             name: "Stretcher Services",
    //             description: "At CalCare, we understand that some patients require transportation on a stretcher",
    //             link: "/services",
    //             image: {
    //                 src: "/images/weOfferimg3.webp",
    //                 alt: "img1",
    //                 width: 100,
    //                 height: 100,
    //             }
    //         }
    //     ],
    //
    //     bottom: [
    //         {
    //             name: "Ambulance Transportation",
    //             description: "At CalCare, we understand that there are times when urgent medical attention is required outside of a hospital setting.",
    //             link: "/services",
    //             image: {
    //                 src: "/images/weOfferimg4.webp",
    //                 alt: "img1",
    //                 width: 100,
    //                 height: 100,
    //             }
    //         },
    //         {
    //             name: "Basic Life Support",
    //             description: "At CalCare, we understand the importance of providing the right level of medical care to patients in need. ",
    //             link: "/services",
    //             image: {
    //                 src: "/images/weOfferimg5.webp",
    //                 alt: "img1",
    //                 width: 100,
    //                 height: 100,
    //             }
    //         },
    //         {
    //             name: "Advance Life Support ",
    //             description: "At CalCare, we understand that some patients require a higher level of medical care during transportation.",
    //             link: "/services",
    //             image: {
    //                 src: "/images/weOfferimg6.webp",
    //                 alt: "img1",
    //                 width: 100,
    //                 height: 100,
    //             }
    //         }
    //     ]
    // }


    const screenSize = useScreenSize()

    let indexCount = 0 // offerServices




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
                            horizontalClass: `${cls.paginationClass}`,
                            clickableClass: `${cls.bulletsWrapper}`,
                            bulletClass: `${cls.bulletClass} swiper-pagination-bullet`,
                            bulletActiveClass: `${cls.activeBulletClass} swiper-pagination-bullet-active`,
                        }}
                        effect={"fade"}
                        autoplay={{
                            delay: 10500,
                            disableOnInteraction: true,
                        }}
                    >
                        {screenSize.width > 1024 && <>
                            <SwiperSlide className={cls.slide}>
                                <div className={`${cls.sliderPage} ${cls.sliderPage1}`}>
                                    <video autoPlay={true} loop={true} muted={true} playsInline={true}
                                           className={cls.slideVideo}>
                                        <source src={require("../public/videos/homeVideo.webm")} type={"video/webm"}/>
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
                                    <Link href={"/contact"}>
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
                            services.map(({serviceName, serviceDescription, serviceIcon}, index) => {
                                return (
                                    <Service className={cls.service} dataAos={{type: "fade-right", duration: 0, delay: index * 200}} key={index} name={serviceName} description={serviceDescription} image={serviceIcon}/>
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
                    <div className={cls.believeSecWrapper}>
                        <h1>We are here to transport you to and from your destination with care and comfort.</h1>
                        <p>At CalCare, we hold the belief that the core of healthcare is providing quality service to our clients.
                            Our team of professionals is dedicated to catering to all your home health care needs with a range of services,
                            from Intravenous Injection Therapy to Respiratory Therapy, as well as the expertise of Registered Nurses,
                            Licensed Vocational Nurses, and Physical Therapists. Rest assured that we are committed to providing timely and efficient care.</p>
                        <Link rel="stylesheet" href="/about" className={cls.buttonLink}>
                            <button>View More</button>
                        </Link>
                    </div>
                </section>
                <section className={cls.weOffer}>
                    <div className={cls.titleBox}>
                        <h1>What We Offer</h1>
                    </div>
                    <div className={cls.contentBox}>
                        <div>
                            {
                                sortInSubarray(offerServices, 3).map((item, index) => {
                                    return (
                                        <div className={cls.topContent} key={index}>
                                            {
                                                item.map(({
                                                    serviceName,
                                                    serviceDescription,
                                                    serviceId,
                                                    image,
                                                }, index) => {
                                                    return (
                                                        <OfferService key={index} name={serviceName} description={serviceDescription} link={`/services/${serviceId}`} image={image}/>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                            {/*<div className={cls.topContent}>*/}
                            {/*    {*/}
                            {/*        offerServices.top.map(({name, description, link, image}, index) => {*/}
                            {/*            return (*/}
                            {/*                <OfferService*/}
                            {/*                    dataAos={{*/}
                            {/*                        type: "zoom-in",*/}
                            {/*                        delay: 200 * index,*/}
                            {/*                        duration: 1000,*/}
                            {/*                    }}*/}
                            {/*                    name={name}*/}
                            {/*                    description={description}*/}
                            {/*                    link={link}*/}
                            {/*                    image={image}*/}
                            {/*                    key={index}*/}
                            {/*                />*/}
                            {/*            )*/}
                            {/*        })*/}
                            {/*    }*/}
                            {/*</div>*/}
                            {/*<div className={`${cls.topContent} ${cls.bottomContent}`}>*/}
                            {/*    {*/}
                            {/*        offerServices.bottom.map(({name, description, link, image}, index) => {*/}
                            {/*            return (*/}
                            {/*                <OfferService*/}
                            {/*                    dataAos={{*/}
                            {/*                        type: "zoom-in",*/}
                            {/*                        delay: 300 * index,*/}
                            {/*                        duration: 1000,*/}
                            {/*                    }}*/}
                            {/*                    name={name}*/}
                            {/*                    description={description}*/}
                            {/*                    link={link}*/}
                            {/*                    image={image}*/}
                            {/*                    key={index}*/}
                            {/*                />*/}
                            {/*            )*/}
                            {/*        })*/}
                            {/*    }*/}
                            {/*</div>*/}
                        </div>
                    </div>

                </section>
                <section className={cls.applications}>
                    <div className={cls.applicationsWrapper} data-aos={"flip-right"} data-aos-duration={2000}>
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
                                <div className={cls.adminItem}>
                                    <div className={`${cls.adminLeftImg} ${cls.sliderAdmin}`}></div>
                                    <div className={cls.adminRightContent}>
                                        <h1>Our Admin Panel</h1>
                                        <p>CalCare`s admin panel is a powerful, user-friendly tool that streamlines operations and enables efficient management
                                            of all aspects of the company`s healthcare services. It offers real-time access to key data and metrics,
                                            allowing for quick decision-making and strategic planning. The panel features patient information management,
                                            staff scheduling, financial performance monitoring, and easy communication between staff members. </p>
                                        <Link href={"/adminPanel"} className={cls.buttonLinkBox}>
                                            <button>
                                                Read More
                                                <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30}/>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={cls.slide}>
                                <div className={cls.adminItem}>
                                    <div className={`${cls.adminLeftImg} ${cls.sliderAdmin}`}></div>
                                    <div className={cls.adminRightContent}>
                                        <h1>Our Admin Panel</h1>
                                        <p>CalCare`s admin panel is a powerful, user-friendly tool that streamlines operations and enables efficient management
                                            of all aspects of the company`s healthcare services. It offers real-time access to key data and metrics,
                                            allowing for quick decision-making and strategic planning. The panel features patient information management,
                                            staff scheduling, financial performance monitoring, and easy communication between staff members. </p>
                                        <Link href={"/adminPanel"} className={cls.buttonLinkBox}>
                                            <button>
                                                Read More
                                                <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30}/>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={cls.slide}>
                                <div className={cls.adminItem}>
                                    <div className={`${cls.adminLeftImg} ${cls.sliderAdmin}`}></div>
                                    <div className={cls.adminRightContent}>
                                        <h1>Our Admin Panel</h1>
                                        <p>CalCare`s admin panel is a powerful, user-friendly tool that streamlines operations and enables efficient management
                                            of all aspects of the company`s healthcare services. It offers real-time access to key data and metrics,
                                            allowing for quick decision-making and strategic planning. The panel features patient information management,
                                            staff scheduling, financial performance monitoring, and easy communication between staff members. </p>
                                        <Link href={"/adminPanel"} className={cls.buttonLinkBox}>
                                            <button>
                                                Read More
                                                <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30}/>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={cls.slide}>
                                <div className={cls.adminItem}>
                                    <div className={`${cls.adminLeftImg} ${cls.sliderAdmin}`}></div>
                                    <div className={cls.adminRightContent}>
                                        <h1>Our Admin Panel</h1>
                                        <p>CalCare`s admin panel is a powerful, user-friendly tool that streamlines operations and enables efficient management
                                            of all aspects of the company`s healthcare services. It offers real-time access to key data and metrics,
                                            allowing for quick decision-making and strategic planning. The panel features patient information management,
                                            staff scheduling, financial performance monitoring, and easy communication between staff members. </p>
                                        <Link href={"/adminPanel"} className={cls.buttonLinkBox}>
                                            <button>
                                                Read More
                                                <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30}/>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className={cls.infoSec}>
                    <div className={cls.infoSecWrapper}>
                        <h2>How CalCare is Revolutionizing Medical Transportation in California</h2>
                        <p>CalCare&apos;s commitment to excellence is demonstrated by its reputation for reliability, professionalism, and efficiency. The company&apos;s licensing and insurance credentials ensure that patients can trust that they are in good hands during transport. If you are in need of medical transportation services in California, CalCare is a reputable and reliable company that can provide safe and efficient transport to your desired destination.</p>
                        <p>The company&apos;s NEMT services are particularly noteworthy, as they cater to patients who require non-emergency medical care, such as medical appointments, outpatient procedures, or dialysis treatments. CalCare&apos;s NEMT vehicles are designed with patient comfort and safety in mind, with features like wheelchair accessibility and medical equipment available to transport patients who require additional medical assistance during transport.</p>
                        <Link href={"/contact"} className={cls.button}>
                            <button>Our Contacts</button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}
