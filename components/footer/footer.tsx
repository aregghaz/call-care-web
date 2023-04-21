import cls from "./footer.module.scss";
import Image from "next/image";
import React, {FC} from "react";
import NavLink from "next/link";

const Footer:FC<any> = ({

}) => {

    const headerLinks = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About Us",
            link: "/about",
        },
        {
            name: "Our Services",
            link: "/services",
        },
        {
            name: "Work With Us",
            link: "/work",
        },
        {
            name: "Refer",
            link: "/refer",
        },
        {
            name: "Contacts",
            link: "/contact",
        },
    ]
    return (
        <footer className={cls.footer}>
            <ul className={cls.footerContent}>
                <li className={cls.footerContentCol}>
                    <ul className={cls.footerInfo}>
                        <li>
                            <Image src={"/images/logoWhite.svg"} alt={"logo"} width={150} height={100}/>
                        </li>
                        <li>888 999 0000</li>
                        <li>needhelp@linoor.com</li>
                        <li>855 road, broklyn street</li>
                        <li>new york 600</li>
                    </ul>
                </li>
                <li className={cls.footerContentCol}>
                    <ul>
                        <li className={cls.footerContentTitle}>Explore</li>
                        {
                            headerLinks.map(({name, link}, index, array) => {
                                return (
                                    <>
                                        <li key={index}><NavLink className={cls.headerMenu} href={link}>{name}</NavLink></li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </li>
                <li className={cls.footerContentCol}>
                    <ul>
                        <li className={cls.footerContentTitle}>Services</li>
                        <li>Medical Home Modification</li>
                        <li>Home Health</li>
                        <li>Therapy</li>
                        <li>Transportation</li>
                    </ul>
                </li>
                <li className={cls.footerContentCol}>
                    <ul>
                        <li className={cls.footerContentTitle}>Links</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Help</li>
                    </ul>
                </li>
                <li className={`${cls.footerContentCol} ${cls.footerContentSearch}`}>
                    <div className={cls.footerContentSearchWrapper}>

                        <ul className={cls.footerContentMedia}>
                            <li><Image src={"/images/pinterestLogo.svg"} alt={"Pinterest logo"} width={14} height={18}/></li>
                            <li><Image src={"/images/linkedIn.svg"} alt={"Linkedin logo"} width={14} height={18}/></li>
                            <li><Image src={"/images/facebookLogo.svg"} alt={"Facebook logo"} width={14} height={18}/></li>
                            <li><Image src={"/images/twitterLogo.svg"} alt={"Twitter logo"} width={14} height={18}/></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </footer>
    )
}

export default Footer