import React, {FC} from "react"
import {svgUtil} from "@/svgs/util";

const ArrowRight:FC<svgUtil> = ({
    width = 46,
    height = 24,
    color = "",
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 46 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M45.0607 13.0607C45.6464 12.4749 45.6464 11.5251 45.0607 10.9393L35.5147 1.3934C34.9289 0.807611 33.9792 0.807611 33.3934 1.3934C32.8076 1.97919 32.8076 2.92893 33.3934 3.51472L41.8787 12L33.3934 20.4853C32.8076 21.0711 32.8076 22.0208 33.3934 22.6066C33.9792 23.1924 34.9289 23.1924 35.5147 22.6066L45.0607 13.0607ZM0 13.5H44V10.5H0V13.5Z"/>
        </svg>

    )
}

export default ArrowRight