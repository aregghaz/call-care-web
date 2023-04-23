import React, {FC} from "react"
import cls from "./big-service.module.scss"
import Link from "next/link";
import ArrowRight from "@/svgs/arrowRight";

export interface BigServiceProps {
    name: string,
    description: string,
    link?: string
}

const BigService:FC<BigServiceProps> = ({
    name = "",
    description = "",
    link = "",
}) => {
    return (
        <div className={cls.main}>
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