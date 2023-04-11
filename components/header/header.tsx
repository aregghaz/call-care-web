import React, {FC} from "react"
import cls from "./header.module.scss"
import Link from "next/link";
import Image from "next/image";

const headerLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About Us",
        link: "/",
    },
    {
        name: "Our Services",
        link: "/",
    },
    {
        name: "Work With Us",
        link: "/",
    },
    {
        name: "Refer",
        link: "/",
    },
    {
        name: "Contacts",
        link: "/",
    },
]

const Header:FC<any> = ():React.ReactElement => {
    return (
        <header className={cls.header}>
            <div className={cls.headerContent}>
                <div className={cls.headerLeft}>
                    <Link href={"/"}>
                        <Image width={100} height={100} src={"/images/logo.svg"} alt={"logo"}/>
                    </Link>
                </div>
                <div className={cls.headerRight}>
                    <div className={cls.headerInfos}>
                        <div className={cls.headerInfo}>
                            <div className={cls.infoIcon}>
                                <img src={"/images/locationIcon.svg"}/>
                            </div>
                            <div className={cls.infoText}>
                                <span>Location:</span>
                                <span>We Answer Calls 24/7</span>
                            </div>
                        </div>
                        <div className={cls.seperator}></div>
                        <div className={cls.headerInfo}>
                            <div className={cls.infoIcon}>
                                <img src={"/images/letterIcon.svg"}/>
                            </div>
                            <div className={cls.infoText}>
                                <span>Mail us:</span>
                                <span>info@mygeneralmed.com</span>
                            </div>
                        </div>
                    </div>
                    <div className={cls.headerButtons}>
                        <button className={cls.headerButton}>
                            <Link href={"/login"}>GET A QUOTES</Link>
                        </button>
                    </div>
                </div>
            </div>
            <nav className={cls.headerNav}>
                <div className={cls.headerNavigation}>
                    <ul>
                        {
                            headerLinks.map(({name, link}, index, array) => {
                                return (
                                    <>
                                        <li key={index}><Link href={link}>{name}</Link></li>
                                        {index != array.length - 1 && <li><span>/</span></li>}
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={cls.headerNavigationLeft}>
                    <div className={cls.headerLinks}>
                        
                    </div>
                    <div className={cls.headerSearch}>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header