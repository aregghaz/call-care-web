import React, {FC} from "react"
import cls from "./social-links.module.scss";
import Link from "next/link";
import PinterestIcon from "../../svgs/pinterest";
import LinkedinIcon from "../../svgs/linkedin";
import FacebookIcon from "../../svgs/facebook";
import TwitterIcon from "../../svgs/twitter";

interface SocialLinksProps {
    className?: string,
    colors?: string,
}

const SocialLinks:FC<SocialLinksProps> = ({
    className= "",
    colors= ""
}) => {
    return (
        <ul
            className={`${cls.headerLinks} ${className}`}
            style={{
                fill: colors,
            }}
        >
            <li>
                <Link target={"_blank"} href={"https://www.pinterest.com/"}><PinterestIcon color={colors}/></Link>
            </li>
            <li>
                <Link target={"_blank"} href={"https://www.linkedin.com/"}><LinkedinIcon color={colors}/></Link>
            </li>
            <li>
                <Link target={"_blank"} href={"https://www.facebook.com/"}><FacebookIcon color={colors}/></Link>
            </li>
            <li>
                <Link target={"_blank"} href={"https://twitter.com/?lang=ru"}><TwitterIcon color={colors}/></Link>
            </li>
        </ul>
    )
}

export default SocialLinks