import cls from "./footer.module.scss";
import Image from "next/image";
import React, {FC} from "react";
import NavLink from "next/link";
import Link from "next/link";
import PinterestIcon from "@/svgs/pinterest";
import LinkedinIcon from "@/svgs/linkedin";
import FacebookIcon from "@/svgs/facebook";
import TwitterIcon from "@/svgs/twitter";

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
                                    <li key={index}><Link className={cls.headerMenu} href={link}>{name}</Link></li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li className={cls.footerContentCol}>
                    <ul>
                        <li className={cls.footerContentTitle}>Services</li>
                        <li><Link href={"/"}>Medical Home Modification</Link></li>
                        <li><Link href={"/"}>Home Health</Link></li>
                        <li><Link href={"/"}>Therapy</Link> </li>
                        <li><Link href={"/"}>Transportation</Link> </li>
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