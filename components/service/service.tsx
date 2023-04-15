import React, {FC} from "react"
import cls from "./service.module.scss"
import Image from "next/image";
import {imageType} from "../../utils/types";

export interface ServiceProps {
    name: string,
    description: string,
    image: imageType,
    className?: string,
}

const Service:FC<ServiceProps> = ({
<<<<<<< HEAD
    name= "",
    description = "",
    image = {
        src: "",
        alt: "",
        width: 0,
        height: 0,
    },
    className= ""
=======
    name,
    description,
    image,
>>>>>>> 3c04be6986063797f588105a3fab31abf3b09f47
}) => {
    return (
        <li className={`${cls.service} ${className}`}>
            <div className={cls.serviceContent}>
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height}/>
                <h2>{name}</h2>
                <span>{description}</span>
            </div>
        </li>
    )
}

export default Service