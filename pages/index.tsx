import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import cls from "../styles/Home.module.scss"
import Header from "@/components/header/header";
import HomeMain from "@/components/homeMain/homeMain"
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination} from "swiper";
import "swiper/swiper.css"
import "swiper/css"
import React from "react";
import "swiper/css/effect-fade"
import 'swiper/css/pagination'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props:any) {
  return (
    <>
      <Head>
        <title>CalCare</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
          <main>
              <section className={cls.hero}>
                  <Swiper
                      modules={[EffectFade, Pagination]}
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
                      autoplay={true}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                  >
                      <SwiperSlide className={cls.slide}>
                          <div className={`${cls.sliderPage} ${cls.sliderPage1}`}>
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
              <section className={cls.services}>
                  <ul>
                      <li className={cls.service}>
                          <div className={cls.serviceContent}>
                              <Image src={"/images/service1.svg"} alt={"service 1"} width={100} height={100}/>
                              <h2>Medical Home <br/> Modification</h2>
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                          </div>
                      </li>
                      <li className={cls.service}>
                          <div className={cls.serviceContent}>
                              <Image src={"/images/service2.svg"} alt={"service 2"} width={100} height={100}/>
                              <h2>Home Health</h2>
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                          </div>
                      </li>
                      <li className={cls.service}>
                          <div className={cls.serviceContent}>
                              <Image src={"/images/service3.svg"} alt={"service 3"} width={100} height={100}/>
                              <h2>Therapy</h2>
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                          </div>
                      </li>
                      <li className={cls.service}>
                          <div className={cls.serviceContent}>
                              <Image src={"/images/service4.svg"} alt={"service 4"} width={100} height={100}/>
                              <h2>Transportation</h2>
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                          </div>
                      </li>
                  </ul>
              </section>
              <section className={cls.generalMedical}>

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
                      <ul>
                          <div className={cls.topContent}>
                              <li className={cls.offerService}>
                                  <div className={cls.serviceImg}>
                                      <Image className={cls.imgSize} src={"/images/weOfferimg1.jpg"} alt={"img1"} width={100} height={100} />
                                  </div>
                                  <div className={cls.serviceInfo}>
                                      <div className={cls.serviceTitle}>
                                          <h2>Ambulatory Service</h2>
                                          <p>Ambulatory Service is mobility at your front door.</p>
                                      </div>
                                      <div className={cls.serviceReadMore}>
                                          <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={40} height={40} /></button>
                                      </div>
                                  </div>
                              </li>
                              <li className={cls.offerService}>
                                  <div className={cls.serviceImg}>
                                      <Image className={cls.imgSize} src={"/images/weOfferimg2.jpg"} alt={"img1"} width={100} height={100} />
                                  </div>
                                  <div className={cls.serviceInfo}>
                                      <div className={cls.serviceTitle}>
                                          <h2>Ambulatory Service</h2>
                                          <p>Ambulatory Service is mobility at your front door.</p>
                                      </div>
                                      <div className={cls.serviceReadMore}>
                                          <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={40} height={40} /></button>
                                      </div>
                                  </div>
                              </li>
                              <li className={cls.offerService}>
                                  <div className={cls.serviceImg}>
                                      <Image className={cls.imgSize} src={"/images/weOfferimg3.jpg"} alt={"img1"} width={100} height={100} />
                                  </div>
                                  <div className={cls.serviceInfo}>
                                      <div className={cls.serviceTitle}>
                                          <h2>Ambulatory Service</h2>
                                          <p>Ambulatory Service is mobility at your front door.</p>
                                      </div>
                                      <div className={cls.serviceReadMore}>
                                          <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={40} height={40} /></button>
                                      </div>
                                  </div>
                              </li>
                          </div>
                         <div className={`${cls.topContent} ${cls.bottomContent}`}>
                             <li className={cls.offerService}>
                                 <div className={cls.serviceImg}>
                                     <Image className={cls.imgSize} src={"/images/weOfferimg4.jpg"} alt={"img1"} width={100} height={100} />
                                 </div>
                                 <div className={cls.serviceInfo}>
                                     <div className={cls.serviceTitle}>
                                         <h2>Ambulatory Service</h2>
                                         <p>Ambulatory Service is mobility at your front door.</p>
                                     </div>
                                     <div className={cls.serviceReadMore}>
                                         <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={40} height={40} /></button>
                                     </div>
                                 </div>
                             </li>
                             <li className={cls.offerService}>
                                 <div className={cls.serviceImg}>
                                     <Image className={cls.imgSize} src={"/images/weOfferimg5.jpg"} alt={"img1"} width={100} height={100} />
                                 </div>
                                 <div className={cls.serviceInfo}>
                                     <div className={cls.serviceTitle}>
                                         <h2>Ambulatory Service</h2>
                                         <p>Ambulatory Service is mobility at your front door.</p>
                                     </div>
                                     <div className={cls.serviceReadMore}>
                                         <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={40} height={40} /></button>
                                     </div>
                                 </div>
                             </li>
                             <li className={cls.offerService}>
                                 <div className={cls.serviceImg}>
                                     <Image className={cls.imgSize} src={"/images/weOfferimg6.jpg"} alt={"img1"} width={100} height={100} />
                                 </div>
                                 <div className={cls.serviceInfo}>
                                     <div className={cls.serviceTitle}>
                                         <h2>Ambulatory Service</h2>
                                         <p>Ambulatory Service is mobility at your front door.</p>
                                     </div>
                                     <div className={cls.serviceReadMore}>
                                         <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={40} height={40} /></button>
                                     </div>
                                 </div>
                             </li>
                         </div>
                     </ul>
                  </div>
                  <div className={cls.infoBox}>
                      <div className={cls.infoBoxTitle}>
                          <h2>You can also send us an email and we’ll get in touch shortly, or Call us</h2>
                      </div>
                      <div className={cls.infoBoxcontants}>
                          <button>
                              <Image src={"/images/mailIcon.svg"} alt={"mail"} width={25} height={25} />
                              info@mygeneralmed.com
                          </button>
                          <button>
                              <Image src={"/images/phoneIcon.svg"} alt={"phone"} width={25} height={25} />
                              info@mygeneralmed.com
                          </button>
                      </div>
                  </div>
              </section>
              <section className={cls.applications}>
                  <Swiper
                      modules={[Pagination]}
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
                      autoplay={true}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                  >

                      <SwiperSlide className={cls.slide}>
                          <div className={`${cls.appSlidePage} ${cls.sliderAdmin}`}>
                                <div className={cls.slidContentBox}>
                                    <h1>Our Admin Panel</h1>
                                    <p>Article 18 of the Constitution of Ireland provides that 43 of the 60 senators are to be elected from five vocational panels. The Administrative Panel is defined in Article 18.7.1º(v) as "Public Administration and social services, including voluntary social activities</p>
                                    <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></button>
                                </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className={cls.slide}>
                          <div className={`${cls.appSlidePage} ${cls.sliderMobile}`}>
                              <div className={cls.slidContentBox}>
                                  <h1>Our Admin Panel</h1>
                                  <p>Article 18 of the Constitution of Ireland provides that 43 of the 60 senators are to be elected from five vocational panels. The Administrative Panel is defined in Article 18.7.1º(v) as "Public Administration and social services, including voluntary social activities</p>
                                  <button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={30} height={30} /></button>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className={cls.slide}>
                          <div className={`${cls.appSlidePage} ${cls.sliderApp}`}>
                              <div className={cls.slidContentBox}>
                                  <h1>Our Admin Panel</h1>
                                  <p>Article 18 of the Constitution of Ireland provides that 43 of the 60 senators are to be elected from five vocational panels. The Administrative Panel is defined in Article 18.7.1º(v) as "Public Administration and social services, including voluntary social activities</p>
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
                                modules={[Pagination]}
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
                                autoplay={true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
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
                      <Image className={cls.imgSlide} src={"/images/ambulanceTeam.jpg"} alt={"ambulanceTeam"} width={500} height={500}/>
                  </div>
              </section>
              <section className={cls.formSection}>
                  <div className={cls.formTitle}>
                      <h1>Work With Us</h1>
                  </div>
                  <div className={cls.formMenu}>
                      <h2>Available Positions</h2>
                      <ul>
                          <li>Occupational Therapy Assistant</li>
                          <li>OOccupational Therapist</li>
                          <li>Physical Therapist</li>
                          <li>Physical Therapy Assistant</li>
                          <li>Speech Therapist</li>
                          <li>Contractors</li>
                          <li>EMT’s</li>
                      </ul>
                  </div>
                  <div className={cls.formInput}>
                      <div className={cls.formInputImg}>
                          {/*<Image  src={"/images/formImg.jpg"} alt={"Form"} width={482} height={466} />*/}
                      </div>
                      <div className={cls.formInputContent}>
                          <form action="#">
                              <div className={cls.inputTop}>
                                  <input className={cls.positionInput} type="text" placeholder={'Position Applying For'}/>
                                  <input className={cls.fifInputs} type="text" placeholder={'First Name'}/>
                                  <input className={cls.fifInputs} type="text" placeholder={'Last Name'}/>
                                  <input className={cls.fifInputs} type="email" placeholder={'Email'}/>
                                  <input className={cls.fifInputs} type="tel" placeholder={'Phone'}/>
                              </div>
                              <div className={cls.inputBottom}>
                                  <div className={cls.inputBottomLeft}>
                                      <label htmlFor="">
                                          Or Copy and Paste Your Resume Bellow
                                      </label>
                                      <textarea name="" id="" cols="30" rows="10" />
                                  </div>
                                  <div className={cls.inputBottomRight}>
                                      <label htmlFor="">
                                          Upload Your Resume
                                      </label>
                                      <div className={cls.fileWrapper}>
                                          <input className={cls.fileInput} type="file" multiple={"multiple"}/>
                                          <span className={cls.fileButton}>Chose File</span>
                                      </div>
                                      <input className={cls.submitButton} type="submit"/>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </section>
          </main>
    </>
  )
}
// export async function getServerSideProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }