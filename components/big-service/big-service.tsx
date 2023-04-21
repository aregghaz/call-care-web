import React, {FC} from "react"
import cls from "./big-service.module.scss"
import Link from "next/link";
import ArrowRight from "@/svgs/arrowRight";

export interface BigServiceProps {

}

const BigService:FC<BigServiceProps> = ({

}) => {
    return (
        <div className={cls.main}>
            <h2>Service name</h2>
            <p>Ambulatory Service is mobility at your front door.</p>
            <Link href={"/"}>
                Read More
                <ArrowRight color={"white"}/>
            </Link>
        </div>
    )
}

export default BigService