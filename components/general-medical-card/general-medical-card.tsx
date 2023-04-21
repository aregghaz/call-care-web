import React, {FC} from "react"
import cls from "./general-medical-card.module.scss"
import Link from "next/link";
import Image from "next/image";
import {imageType} from "../../utils/types";

export interface GeneralMedicalCardProps {
    name: string,
    description: string,
    image: string,
    link: string,
}

const GeneralMedicalCard:FC<GeneralMedicalCardProps> = ({
    name,
    description,
    image,
    link,
}) => {
    return (
        <div
            className={`${cls.generalCard}`}
            style={{
                backgroundImage: `url(${image})`
            }}
        >
            <div className={cls.generalCardContent}>
                <div className={cls.generalCardButton}>
                    <Link href={{link}}>
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