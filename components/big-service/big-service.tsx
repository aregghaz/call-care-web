import React, {FC} from "react"
import cls from "./big-service.module.scss"
import Link from "next/link";
import ArrowRight from "@/svgs/arrowRight";
import {AosInterface} from "@/utils/types";

export interface BigServiceProps {
    name: string,
    description: string,
    link?: string
}

const BigService:FC<BigServiceProps & AosInterface> = ({
    name = "",
    description = "",
    link = "",
    dataAos = ""
}) => {
    return (
        <div className={cls.main} data-aos={dataAos.type} data-aos-duration={dataAos.duration} data-aos-delay={dataAos.delay}>
            <h2>{name}</h2>
            <p>{description}</p>
            <Link href={link}>
                Read More
                <ArrowRight color={"white"}/>
            </Link>
        </div>
    )
}

export default BigService