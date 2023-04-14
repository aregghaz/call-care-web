import React, {FC} from "react"
import cls from "./service.module.scss"
import Image from "next/image";

type imageType = {
    src: string,
    alt: string,
    width: number | string,
    height: number | string,
}

export interface ServiceProps {
    name: string,
    description: string,
    image: imageType

}

const Service:FC<ServiceProps> = ({
    name= "",
    description = "",
    image = {
        src: "",
        alt: "",
        width: 0,
        height: 0,
    }
}) => {
    return (
        <li className={cls.service}>
            <div className={cls.serviceContent}>
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height}/>
                <h2>{name}</h2>
                <span>{description}</span>
            </div>
        </li>
    )
}

export default Service