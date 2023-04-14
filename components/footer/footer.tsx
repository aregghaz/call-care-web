import cls from "./footer.module.scss";
import Image from "next/image";
import React, {FC} from "react";

const Footer:FC<any> = ({

}) => {
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
                        <li>About Us</li>
                        <li>Meet Our Team</li>
                        <li>Our Portfolio</li>
                        <li>Latest News</li>
                        <li>Contact Us</li>
                    </ul>
                </li>
                <li className={cls.footerContentCol}>
                    <ul>
                        <li className={cls.footerContentTitle}>Services</li>
                        <li>Modern Designing</li>
                        <li>Marketing Strategy</li>
                        <li>UI/UX designing</li>
                        <li>App Development</li>
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
                        <div className={cls.footerContentSearchInput}>
                            <input
                                type={"text"}
                                placeholder={"Search"}
                            />
                            <button>
                                <Image src={"/images/searchWithDots.svg"} alt={"search icon"} width={22} height={23}/>
                            </button>
                        </div>
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