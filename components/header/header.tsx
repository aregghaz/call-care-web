import React, {FC, useEffect, useRef, useState} from "react"
import cls from "./header.module.scss"

import Link from "next/link";
import NavLink from "next/link"
import Image from "next/image";

const headerLinks = [
    {
        name: "Home",
        link: "/homeik",
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

    const [searchOpen, setSearchOpen] = useState<boolean>(false)

    const handleSearchOpen = () => {
        setSearchOpen(!searchOpen)
    }

    const [burgerAnim, setBurgerAnim] = useState<boolean>(false)

    const handleBurger = () => {
      setBurgerAnim(!burgerAnim)
    }

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
                                <Image src={"/images/locationIcon.svg"} alt={""} width={50} height={50}/>
                            </div>
                            <div className={cls.infoText}>
                                <span>Location:</span>
                                <span>We Answer Calls 24/7</span>
                            </div>
                        </div>
                        <div className={cls.seperator}></div>
                        <div className={cls.headerInfo}>
                            <div className={cls.infoIcon}>
                                <Image src={"/images/letterIcon.svg"} alt={""} width={50} height={50}/>
                            </div>
                            <div className={cls.infoText}>
                                <span>Mail us:</span>
                                <span>info@mygeneralmed.com</span>
                            </div>
                        </div>
                    </div>
                    <div className={cls.headerButtons}>
                        <button className={cls.headerButton}>
                            <Link href={"/login"}>Login</Link>
                        </button>
                    </div>
                </div>
            </div>
            <nav className={cls.headerNav}>

                <div className={cls.headerNavigation}>
                    <div className={cls.burgerMenuWrapper} onClick={handleBurger}>
                        <span className={`${cls.line} ${cls.lineTop} ${burgerAnim && cls.open}`}></span>
                        <span className={`${cls.line} ${cls.lineCenter} ${burgerAnim && cls.open}`}></span>
                        <span className={`${cls.line} ${cls.lineBottom} ${burgerAnim && cls.open}`}></span>
                    </div>
                    <ul>
                        {
                            headerLinks.map(({name, link}, index, array) => {
                                return (
                                    <>
                                        <li key={index}><NavLink href={link}>{name}</NavLink></li>
                                        {index != array.length - 1 && <li key={index + array.length}><span className={cls.menuSpan}>/</span></li>}
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className={`${cls.burgerOpenWrapper} ${burgerAnim && cls.open}`}>
                    <div className={`${cls.burgerOpenWrapperContent} ${burgerAnim && cls.open}`}>
                        <h1>HELLO WOLRD TIGO TIGO TIGO</h1>
                    </div>
                </div>
                <div className={cls.headerNavigationLeft}>
                    <div className={`${cls.headerLinks} ${searchOpen && cls.out}`}>
                        <Image src="/images/pinterestLogo.svg" alt="" width={25} height={25}/>
                        <Image src="/images/linkedIn.svg" alt="" width={25} height={25}/>
                        <Image src="/images/facebookLogo.svg" alt="" width={25} height={25}/>
                        <Image src="/images/twitterLogo.svg" alt="" width={25} height={25}/>

                    </div>
                    <div className={`${cls.searchOpenBox} ${searchOpen && cls.open}`} ></div>
                    <div className={cls.headerSearch}>
                        <div onClick={handleSearchOpen}>
                            <Image src="/images/searchIcon.svg" alt="" width={40} height={40}/>
                        </div>

                    </div>
                    {/*{searchOpen && <div>*/}
                    {/*    <div className={cls.searchOpenWrapper}></div>*/}
                    {/*</div>}*/}
                </div>


            </nav>
        </header>

    )
}

export default Header