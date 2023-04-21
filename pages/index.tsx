import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import cls from "../styles/Home.module.scss"
import Header from "../components/header/header";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination, Navigation, Autoplay} from "swiper";
import "swiper/swiper.css"
import "swiper/css"
import React, {useState} from "react";
import "swiper/css/effect-fade"
import 'swiper/css/pagination'
import "swiper/css/navigation"
import Link from "next/link";
import Footer from "../components/footer/footer";

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
            link: "/"
        },
        {
            name: "About us",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard2.webp",
            link: "/"
        },
        {
            name: "About us",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard3.webp",
            link: "/"
        },
        {
            name: "About us",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard4.webp",
            link: "/"
        },
        {
            name: "About us",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard1.webp",
            link: "/"
        },
        {
            name: "About us",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard2.webp",
            link: "/"
        },
        {
            name: "About us",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard3.webp",
            link: "/"
        },
        {
            name: "About us",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard4.webp",
            link: "/"
        },
        {
            name: "About us",
            description: "General Medical is equipped to handle all the transportation needs that you can imagine.",
            image: "/images/calcarecard2.webp",
            link: "/"
        },
    ]

    const offerServices:{top: Array<OfferServiceProps>, bottom: Array<OfferServiceProps>} = {
        top: [
            {
                name: "Ambulatory Service",
                description: "Ambulatory Service is mobility at your front door.",
                link: "/",
                image: {
                    src: "/images/weOfferimg1.webp",
                    alt: "img1",
                    width: 100,
                    height: 100,
                }
            },
            {
                name: "Ambulatory Service",
                description: "Ambulatory Service is mobility at your front door.",
                link: "/",
                image: {
                    src: "/images/weOfferimg2.webp",
                    alt: "img1",
                    width: 100,
                    height: 100,
                }
            },
            {
                name: "Ambulatory Service",
                description: "Ambulatory Service is mobility at your front door.",
                link: "/",
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
                name: "Ambulatory Service",
                description: "Ambulatory Service is mobility at your front door.",
                link: "/",
                image: {
                    src: "/images/weOfferimg4.webp",
                    alt: "img1",
                    width: 100,
                    height: 100,
                }
            },
            {
                name: "Ambulatory Service",
                description: "Ambulatory Service is mobility at your front door.",
                link: "/",
                image: {
                    src: "/images/weOfferimg5.webp",
                    alt: "img1",
                    width: 100,
                    height: 100,
                }
            },
            {
                name: "Ambulatory Service",
                description: "Ambulatory Service is mobility at your front door.",
                link: "/",
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
                              direction={"vertical"}
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
                              <SwiperSlide className={cls.slide}>
                                  <div className={`${cls.sliderPage} ${cls.sliderPage1}`}>
                                      <video autoPlay={true} loop={true} muted={true} playsInline={true} className={cls.slideVideo}>
                                          <source src={require("../public/videos/homeVideo.mp4")} type={"video/mp4"}/>
                                      </video>
                                      <div className={`${cls.sliderPageContent} ${cls.sliderPage1Content}`}>
                                          <h1>A True Devotion <br/> To Health</h1>
                                          <p>Full service medical provider serving the great state of California</p>
                                          <Image src={"/images/arrowright.svg"} alt={"arrow right"} width={100} height={50}/>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className={cls.slide}>
                                  <div className={`${cls.sliderPage} ${cls.sliderPage2}`}>
                                      <div className={`${cls.sliderPageContent} ${cls.sliderPage1Content}`}>
                                          <h1>A True Devotion <br/> To Health 2</h1>
                                          <p>Full service medical provider serving the great state of California</p>
                                          <Image src={"/images/arrowright.svg"} alt={"arrow right"} width={100} height={50}/>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className={cls.slide}>
                                  <div className={`${cls.sliderPage} ${cls.sliderPage3}`}>
                                      <div className={`${cls.sliderPageContent} ${cls.sliderPage1Content}`}>
                                          <h1>A True Devotion <br/> To Health 3</h1>
                                          <p>Full service medical provider serving the great state of California</p>
                                          <Image src={"/images/arrowright.svg"} alt={"arrow right"} width={100} height={50}/>
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
                                      <Flip key={index} left delay={index * 200}>
                                          <Service key={index} name={name} description={description} image={image}/>
                                      </Flip>
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
                                    backgroundColor: calcarecardsSlides >= 5 ? "white" : "#D33834FF",
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
                              generalMedicalCards.map(({name, description, image}, index) => {
                                  return (
                                      <SwiperSlide
                                          key={index}
                                      >
                                          <Flip top delay={index < 3 ? index * 200 : 0}>
                                              <GeneralMedicalCard
                                                  name={name}
                                                  description={description}
                                                  image={image}
                                              />
                                          </Flip>
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
                  <button>View More</button>
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
                          delay: 3000,
                          disableOnInteraction: false,
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
                                  <h1>Our Admin Panel</h1>
                                  <p>Article 18 of the Constitution of Ireland provides that 43 of the 60 senators are to be elected from five vocational panels. The Administrative Panel is defined in Article 18.7.1º(v) as Public Administration and social services, including voluntary social activities</p>
                                  <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></button>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className={cls.slide}>
                          <div className={`${cls.appSlidePage} ${cls.sliderApp}`}>
                              <div className={cls.slidContentBox}>
                                  <h1>Our Admin Panel</h1>
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
                                        <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={cls.slide}>
                                    <div className={cls.miniSlidBox}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eius et! Praesentium sequi aut ipsa deleniti soluta quam nihil aperiam at cupiditate </p>
                                        <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={cls.slide}>
                                    <div className={cls.miniSlidBox}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eius et! Praesentium sequi aut ipsa deleniti soluta quam nihil aperiam at cupiditate </p>
                                        <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></button>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                  </div>
                  <div className={cls.infoSlidImg}>
                      <Image className={cls.imgSlide} src={"/images/ambulanceTeam.webp"} alt={"ambulanceTeam"} width={450} height={600}/>
                  </div>
              </section>
              {/*<section className={cls.formSection}>*/}
              {/*    <div className={cls.formTitle}>*/}
              {/*        <h1>Work With Us</h1>*/}
              {/*    </div>*/}
              {/*    <div className={cls.formMenu}>*/}
              {/*        <h2>Available Positions</h2>*/}
              {/*        <ul>*/}
              {/*            <li>Occupational Therapy Assistant</li>*/}
              {/*            <li>OOccupational Therapist</li>*/}
              {/*            <li>Physical Therapist</li>*/}
              {/*            <li>Physical Therapy Assistant</li>*/}
              {/*            <li>Speech Therapist</li>*/}
              {/*            <li>Contractors</li>*/}
              {/*            <li>EMT’s</li>*/}
              {/*        </ul>*/}
              {/*    </div>*/}
              {/*    <div className={cls.formInput}>*/}
              {/*        <div className={cls.formInputImg}>*/}
              {/*            /!*<Image  src={"/images/formImg.jpg"} alt={"Form"} width={482} height={466} />*!/*/}
              {/*        </div>*/}
              {/*        <div className={cls.formInputContent}>*/}
              {/*            <form action="#">*/}
              {/*                <div className={cls.inputTop}>*/}
              {/*                    <input className={cls.positionInput} type="text" placeholder={'Position Applying For'}/>*/}
              {/*                    <input className={cls.fifInputs} type="text" placeholder={'First Name'}/>*/}
              {/*                    <input className={cls.fifInputs} type="text" placeholder={'Last Name'}/>*/}
              {/*                    <input className={cls.fifInputs} type="email" placeholder={'Email'}/>*/}
              {/*                    <input className={cls.fifInputs} type="tel" placeholder={'Phone'}/>*/}
              {/*                </div>*/}
              {/*                <div className={cls.inputBottom}>*/}
              {/*                    <div className={cls.inputBottomLeft}>*/}
              {/*                        <label htmlFor={"contactTextarea"}>*/}
              {/*                            Or Copy and Paste Your Resume Bellow*/}
              {/*                        </label>*/}
              {/*                        <textarea id={"contactTextarea"} cols={30} rows={10} />*/}
              {/*                    </div>*/}
              {/*                    <div className={cls.inputBottomRight}>*/}
              {/*                        <label htmlFor={"contactFile"}>*/}
              {/*                            Upload red resume*/}
              {/*                        </label>*/}
              {/*                        <div className={cls.fileWrapper}>*/}
              {/*                            <input className={cls.fileInput} id={"contactFile"} type={"file"} multiple={true}/>*/}
              {/*                            <span className={cls.fileButton}>Choose File</span>*/}
              {/*                        </div>*/}
              {/*                        <input className={cls.submitButton} type="submit"/>*/}
              {/*                    </div>*/}
              {/*                </div>*/}
              {/*            </form>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</section>*/}
          </main>
    </>
  )
}
// export async function getServerSideProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }