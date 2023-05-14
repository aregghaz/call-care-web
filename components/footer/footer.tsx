import cls from "./footer.module.scss";
import Image from "next/image";
import React, {FC, useEffect} from "react";
import NavLink from "next/link";
import Link from "next/link";
import PinterestIcon from "@/svgs/pinterest";
import LinkedinIcon from "@/svgs/linkedin";
import FacebookIcon from "@/svgs/facebook";
import TwitterIcon from "@/svgs/twitter";
import database from "../../public/db.json"
import dbdata from "@/public/db.json";
import {headerLinks} from "@/components/header/header";
import {useSelector} from "react-redux";
import {servicesImportantListSelector} from "@/store/slices/services/services.slice";
import LoadingScreen from "@/components/loading-screen/loading-screen";

const Footer:FC<any> = ({

}) => {
    const importantServicesList = useSelector(servicesImportantListSelector)
    console.log(importantServicesList, "asdasdasddas")
    return (
        <footer className={cls.footer}>
            <ul className={cls.footerContent}>
                <li className={cls.footerContentCol}>
                    <ul className={cls.footerInfo}>
                        <li>
                            <Image src={"/images/logoWhite.svg"} alt={"logo"} width={150} height={100}/>
                        </li>
                        <li>{dbdata.global.phoneNumber}</li>
                        <li>{dbdata.global.email}</li>
                        <li>{dbdata.global.address}</li>
                    </ul>
                </li>
                <li className={cls.footerContentCol}>
                    <ul>
                        <li className={cls.footerContentTitle}>Explore</li>
                        {
                            headerLinks.map(({name, link}, index, array) => {
                                return (
                                    <li key={index}><Link className={cls.headerMenu} href={link}>{name}</Link></li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li className={cls.footerContentCol}>
                    <ul>
                        <li className={cls.footerContentTitle}>Services</li>
                        {
                            importantServicesList.length > 0 ? <>
                                {
                                    importantServicesList.map(item => {
                                        return (
                                            <li><Link href={`/services/${item.serviceId}`}>{item.serviceName}</Link></li>
                                        )
                                    })
                                }
                            </> : <LoadingScreen/>
                        }
                    </ul>
                </li>
                <li className={cls.footerContentCol}>
                    <ul>
                        <li className={cls.footerContentTitle}>Links</li>
                        <li><Link href={"/contact"}>Support</Link></li>
                        <li><Link href={"/privacy"}>Privacy Policy</Link></li>
                        <li><Link href={"/terms"}>Terms of Use</Link></li>
                    </ul>
                </li>
                {/*<li className={`${cls.footerContentCol} ${cls.footerContentSearch}`}>*/}
                {/*    <div className={cls.footerContentSearchWrapper}>*/}
                {/*        <ul className={cls.footerContentMedia}>*/}
                {/*            <li><Link target={"_blank"} href={"https://www.pinterest.com"}><PinterestIcon/></Link></li>*/}
                {/*            <li><Link target={"_blank"} href={"https://www.linkedin.com"}><LinkedinIcon/></Link></li>*/}
                {/*            <li><Link target={"_blank"} href={"https://www.facebook.com"}><FacebookIcon/></Link></li>*/}
                {/*            <li><Link target={"_blank"} href={"https://twitter.com/"}><TwitterIcon/></Link></li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</li>*/}
            </ul>
        </footer>
    )
}

export default Footer