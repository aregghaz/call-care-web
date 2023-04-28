import React, {FC} from "react"
import cls from "./general-medical-card.module.scss"
import Link from "next/link";
import Image from "next/image";
import {AosInterface, imageType} from "../../utils/types";
import useScreenSize from "@/hooks/useScreenSize";

export interface GeneralMedicalCardProps {
    name: string,
    description: string,
    image: string,
    link: string,
}

const GeneralMedicalCard:FC<GeneralMedicalCardProps & AosInterface> = ({
    name,
    description,
    image,
    link,
    dataAos = "" ,
}) => {
    const screenSize = useScreenSize()
    return (
        <div
            className={`${cls.generalCard}`}
            style={{
                backgroundImage: `url(${image})`
            }}
            data-aos={dataAos.type}
            data-aos-duration={dataAos.duration}
            data-aos-delay={dataAos.delay}
        >
            <div className={cls.generalCardContent} style={screenSize.width <= 1024 ? {
                opacity: 1,
                visibility: "visible",
                top: 0,
            } : {}}>
                    <div className={cls.generalCardButton}>
                        <Link href={link}>
                            <Image src={"/images/arrowRightBlack.svg"} alt={"arror right black"} width={20} height={17}/>
                        </Link>
                    </div>
                    <h2>{name}</h2>
                    <p>{description}</p>
            </div>
        </div>
    )
}

export default GeneralMedicalCard