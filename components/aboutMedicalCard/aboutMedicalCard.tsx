import React, {FC} from "react"
import cls from "./aboutMedicalCard.module.scss"
import Image from "next/image";
import {AosInterface} from "@/utils/types";

export interface AboutMedicalCardProps{
    title: string,
    icon: string,
    arrow: string
}

const AboutMedicalCard:FC<AboutMedicalCardProps & AosInterface> = ({
    title,
    icon,
    arrow,
    dataAos = ""
}) => {
    return (
        <div className={cls.aboutCard} data-aos={dataAos.type} data-aos-duration={dataAos.duration} data-aos-delay={dataAos.delay}>
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