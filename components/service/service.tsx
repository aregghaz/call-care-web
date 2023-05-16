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
    image = "",
    className= "",
    dataAos= {}
}) => {
    return (
        <div className={className} data-aos={dataAos.type} data-aos-duration={dataAos.duration} data-aos-delay={dataAos.delay}>
            <Link href={"../../services"} className={cls.nav}>
                <li className={`${cls.service} ${className}`}>
                    <div className={cls.serviceContent}>
                        <Image src={image} alt={"service Icon"} width={100} height={100}/>
                        <h2>{name}</h2>
                        <span>{description}</span>
                    </div>
                </li>
            </Link>
        </div>
    )
}

export default Service