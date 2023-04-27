import React, {FC} from "react"
import cls from "./big-service.module.scss"
import Link from "next/link";
import ArrowRight from "@/svgs/arrowRight";
import {AosInterface} from "@/utils/types";

export interface BigServiceProps {
    name: string,
    description: string,
    link?: string
    defaultLink?: string
}

const BigService:FC<BigServiceProps & AosInterface> = ({
    name = "",
    description = "",
    link = "",
    dataAos = "",
    defaultLink = "",
}) => {
    return (
        <Link href={`${defaultLink}/${link}`} className={cls.main} data-aos={dataAos.type} data-aos-duration={dataAos.duration} data-aos-delay={dataAos.delay}>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className={cls.readMore}>
                Read More
                <ArrowRight color={"white"}/>
            </div>
        </Link>
    )
}

export default BigService