import React, {FC} from "react"
import cls from "./aboutMedicalCard.module.scss"
import Image from "next/image";

export interface AboutMedicalCardProps{
    title: string,
    icon: string,
    arrow: string
}

const AboutMedicalCard:FC<AboutMedicalCardProps> = ({
    title,
    icon,
    arrow,
}) => {
    return (
        <div className={cls.aboutCard}>
            <div className={cls.titleWrapper}>
                <h1>{title}</h1>
            </div>
            <div className={cls.iconWrapper}>
                <Image src={icon} alt={"icon"} width={120} height={110}/>
            </div>
            <div className={cls.arrowWrapper}>
                <Image className={cls.arr} src={arrow} alt={"icon"} width={100} height={40}/>
            </div>
        </div>
    )
}

export default AboutMedicalCard