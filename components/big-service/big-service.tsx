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
    loadService?: Function
}

const BigService:FC<BigServiceProps & AosInterface> = ({
    name = "",
    description = "",
    link = "",
    dataAos = "",
    defaultLink = "",
                                                           loadService
}) => {
    return (
        <div
            className={cls.main}
            data-aos={dataAos.type}
            data-aos-duration={dataAos.duration}
            data-aos-delay={dataAos.delay}
            onClick={() => {
                if (loadService) loadService() // argument is given by bind
            }}
        >
            <h2>{name}</h2>
            <p>{description}</p>
            <div className={cls.readMore}>
                <span>
                    Read More
                </span>
                <ArrowRight color={"black"} width={35} height={35} className={cls.arr} />
            </div>
        </div>
    )
}

export default BigService