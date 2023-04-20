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
                <Link href={"/"}><PinterestIcon color={colors}/></Link>
            </li>
            <li>
                <Link href={"/"}><LinkedinIcon color={colors}/></Link>
            </li>
            <li>
                <Link href={"/"}><FacebookIcon color={colors}/></Link>
            </li>
            <li>
                <Link href={"/"}><TwitterIcon color={colors}/></Link>
            </li>
        </ul>
    )
}

export default SocialLinks