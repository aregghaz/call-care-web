import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import cls from "../styles/Home.module.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination, Navigation, Autoplay, EffectCreative} from "swiper";
import "swiper/swiper.css"
import "swiper/css"
import React, {useState} from "react";
import "swiper/css/effect-fade"
import 'swiper/css/pagination'
import "swiper/css/navigation"
import Link from "next/link";

import Service, {ServiceProps} from "../components/service/service";
import GeneralMedicalCard, {GeneralMedicalCardProps} from "../components/general-medical-card/general-medical-card";
import OfferService, {OfferServiceProps} from "../components/offer-service/offer-service";
import useScreenSize from "../hooks/useScreenSize";
import {rotate} from "next/dist/server/lib/squoosh/impl";

const inter = Inter({ subsets: ['latin'] })

import Fade from "react-reveal/Fade"
import Flip from "react-reveal/Flip"


export default function Home(props:any) {
    // const testNkar = dynamic(() => import("../public/images/herosliderimage1.webp"))
    const [calcarecardsSlides, setcalcarecardsSlides] = useState(0)

    const services:Array<ServiceProps> = [
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

    const generalMedicalCards:Array<GeneralMedicalCardProps> = [
        {
            name: "About us",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard1.webp",
            link: "/about"
        },
        {
            name: "our services",
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

    const offerServices:{top: Array<OfferServiceProps>, bottom: Array<OfferServiceProps>} = {
        top: [
            {
                name: "Ambulatory Service",
                description: "Ambulatory Service is mobility at your front door.",
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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
          <main>
                  <Fade>
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
                                          <video autoPlay={true} loop={true} muted={true} playsInline={true} className={cls.slideVideo}>
                                              <source src={require("../public/videos/homeVideo.mp4")} type={"video/mp4"}/>
                                          </video>
                                          <div className={`${cls.sliderPageContent} ${cls.sliderPage1Content}`}>
                                              <h1>A True Devotion <br/> To Health</h1>
                                              <p>Full service medical provider serving the great state of California</p>
                                              <Link href={"/services"}>
                                                  <Image src={"/images/arrowright.svg"} alt={"arrow right"} width={100} height={50}/>
                                              </Link>
                                          </div>
                                      </div>
                                  </SwiperSlide>
                              </>}
                              <SwiperSlide className={cls.slide}>
                                  <div className={`${cls.sliderPage} ${cls.sliderPage2}`}>
                                      <div className={`${cls.sliderPageContent} ${cls.sliderPage1Content}`}>
                                          <h1>A True Devotion <br/> To Health 2</h1>
                                          <p>Full service medical provider serving the great state of California</p>
                                          <Link href={"/about"}>
                                              <Image src={"/images/arrowright.svg"} alt={"arrow right"} width={100} height={50}/>
                                          </Link>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className={cls.slide}>
                                  <div className={`${cls.sliderPage} ${cls.sliderPage3}`}>
                                      <div className={`${cls.sliderPageContent} ${cls.sliderPage1Content}`}>
                                          <h1>A True Devotion <br/> To Health 3</h1>
                                          <p>Full service medical provider serving the great state of California</p>
                                          <Link href={"/work"}>
                                              <Image src={"/images/arrowright.svg"} alt={"arrow right"} width={100} height={50}/>
                                          </Link>
                                      </div>
                                  </div>
                              </SwiperSlide>
                          </Swiper>
                      </section>
                  </Fade>
              <Fade>
                  <section className={cls.services}>
                      <ul>
                          {
                              services.map(({name,description,image}, index) => {
                                  return (
                                      <Fade key={index} left delay={index * 200}  className={cls.flipWrapper}>
                                          <Service key={index} name={name} description={description} image={image}/>
                                      </Fade>
                                  )
                              })
                          }
                      </ul>
                  </section>
              </Fade>
              <section className={cls.generalMedical}>
                  <div className={cls.generalMedicalTop}>
                      <h2>General Medical is a full service medical provider <br/> serving the great state of California</h2>
                      <p>General Medical is a leading healthcare provider, ensuring quality access to quality care</p>
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
                          spaceBetween={screenSize.width > 1000 ? 150 : 50}
                          loop={true}
                          slidesPerView={screenSize.width < 600 ? 1 :screenSize.width < 800 ? 1 : screenSize.width < 1300 ? 2 : 3}
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
                              generalMedicalCards.map(({name, description, image,link}, index) => {
                                  return (
                                      <SwiperSlide
                                          key={index}
                                      >
                                          <Fade delay={index < 3 ? index * 200 : 0}>
                                              <GeneralMedicalCard
                                                  link={link}
                                                  name={name}
                                                  description={description}
                                                  image={image}
                                              />
                                          </Fade>
                                      </SwiperSlide>
                                  )
                              })
                          }
                      </Swiper>
                  </div>
              </section>
              <section className={cls.believeSec}>
                  <h1>We believe the heart of healthcare is service</h1>
                  <p>At General Medical our staff will be happy to assist you with any home health care need you have. We offer Home Health Services including Intravenous Injection Therapy, Respiratory Therapy, Registered Nurses, Licensed Vocational Nurses and Physical Therapists. We have a professional team that will meet your needs in a timely fashion.</p>
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
                                  offerServices.top.map(({name,description,link,image}, index) => {
                                      return (
                                          <OfferService
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
                                 offerServices.bottom.map(({name,description,link,image}, index) => {
                                     return (
                                         <OfferService
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
              <section className={cls.applications}>

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
                                    <p>Article 18 of the Constitution of Ireland provides that 43 of the 60 senators are to be elected from five vocational panels. The Administrative Panel is defined in Article 18.7.1º(v) as Public Administration and social services, including voluntary social activities</p>
                                    <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></button>
                                </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className={cls.slide}>
                          <div className={`${cls.appSlidePage} ${cls.sliderMobile}`}>
                              <div className={cls.slidContentBox}>
                                  <h1>Admin Trips</h1>
                                  <p>Article 18 of the Constitution of Ireland provides that 43 of the 60 senators are to be elected from five vocational panels. The Administrative Panel is defined in Article 18.7.1º(v) as Public Administration and social services, including voluntary social activities</p>
                                  <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></button>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className={cls.slide}>
                          <div className={`${cls.appSlidePage} ${cls.sliderAdmin2}`}>
                              <div className={cls.slidContentBox}>
                                  <h1>Price List and More</h1>
                                  <p>Article 18 of the Constitution of Ireland provides that 43 of the 60 senators are to be elected from five vocational panels. The Administrative Panel is defined in Article 18.7.1º(v) as Public Administration and social services, including voluntary social activities</p>
                                  <button>Download now <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></button>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className={cls.slide}>
                          <div className={`${cls.appSlidePage} ${cls.sliderAdmin3}`}>
                              <div className={cls.slidContentBox}>
                                  <h1>Admin Panel Dashboard</h1>
                                  <p>Article 18 of the Constitution of Ireland provides that 43 of the 60 senators are to be elected from five vocational panels. The Administrative Panel is defined in Article 18.7.1º(v) as Public Administration and social services, including voluntary social activities</p>
                                  <button>Download now <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></button>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className={cls.slide}>
                          <div className={`${cls.appSlidePage} ${cls.sliderApp}`}>
                              <div className={cls.slidContentBox}>
                                  <h1>Mobile App CallCare</h1>
                                  <p>Article 18 of the Constitution of Ireland provides that 43 of the 60 senators are to be elected from five vocational panels. The Administrative Panel is defined in Article 18.7.1º(v) as Public Administration and social services, including voluntary social activities</p>
                                  <button>Download now <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></button>
                              </div>
                          </div>
                      </SwiperSlide>

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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eius et! Praesentium sequi aut ipsa deleniti soluta quam nihil aperiam at cupiditate </p>
                                        <button>Read More <Link href={"/about"}> <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></Link></button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={cls.slide}>
                                    <div className={cls.miniSlidBox}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eius et! Praesentium sequi aut ipsa deleniti soluta quam nihil aperiam at cupiditate </p>
                                        <button>Read More <Link href={"/about"}> <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></Link></button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={cls.slide}>
                                    <div className={cls.miniSlidBox}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eius et! Praesentium sequi aut ipsa deleniti soluta quam nihil aperiam at cupiditate </p>
                                        <button>Read More <Link href={"/about"}> <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></Link></button>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                  </div>
                  <div className={cls.infoSlidImg}>
                      <Image className={cls.imgSlide} src={"/images/ambulanceTeam.webp"} alt={"ambulanceTeam"} width={450} height={600}/>
                  </div>
              </section>
          </main>
    </>
  )
}
