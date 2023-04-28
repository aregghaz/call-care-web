import React, {FC} from "react"
import cls from "./service.module.scss"
import Image from "next/image";
import {imageType} from "../../utils/types";
import Link from "next/link";
import {AosInterface} from "../../utils/types";
export interface ServiceProps {
    name: string,
    description: string,
    image: imageType,
    className?: string,
}

const Service:FC<ServiceProps & AosInterface> = ({
    name= "",
    description = "",
    image = {
        src: "",
        alt: "",
        width: 0,
        height: 0,
    },
    className= "",
    dataAos= {}
}) => {
    return (
        <div className={className} data-aos={dataAos.type} data-aos-duration={dataAos.duration} data-aos-delay={dataAos.delay}>
            <Link href={"../../services"} className={cls.nav}>
                <li className={`${cls.service} ${className}`}>
                    <div className={cls.serviceContent}>
                        <Image src={image.src} alt={image.alt} width={image.width} height={image.height}/>
                        <h2>{name}</h2>
                        <span>{description}</span>
                    </div>
                </li>
            </Link>
        </div>
    )
}

export default Service