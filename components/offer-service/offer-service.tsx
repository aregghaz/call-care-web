import React, {FC} from "react"
import cls from "./offer-service.module.scss"
import Image from "next/image";
import Link from "next/link";
import {imageType} from "@/utils/types";

export interface OfferServiceProps {
    name: string,
    description: string,
    link: string,
    image: imageType
}

const OfferService:FC<OfferServiceProps> = ({
    name,
    description,
    link,
    image,
}) => {
    return (
        <div className={cls.offerService}>
            <div className={cls.serviceImg}>
                <Image className={cls.imgSize} src={image.src} alt={image.alt} width={image.width} height={image.height} />
            </div>
            <div className={cls.serviceInfo}>
                <div className={cls.serviceTitle}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className={cls.serviceReadMore}>
                    <Link href={link}><button>Read More <Image src={"/images/Arrow 3.svg"} alt={"arrow"} width={40} height={40} /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default OfferService