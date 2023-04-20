import React, {FC} from "react"
import {svgUtil} from "@/svgs/util";

const LinkedinIcon:FC<svgUtil> = ({
    width = 22,
    height = 22,
    color = ""
}) => {
    return (
<<<<<<< HEAD
        <svg fill={color} width={width} height={height} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
=======
        <svg width={width} height={height} fill={color} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
>>>>>>> 5c3f47112f2ecfe936fb352514cba2ff59af14c9
            <path d="M4.88281 22V7.40039H0.341797V22H4.88281ZM2.58789 5.44727C4.05273 5.44727 5.22461 4.22656 5.22461 2.76172C5.22461 1.3457 4.05273 0.173828 2.58789 0.173828C1.17188 0.173828 0 1.3457 0 2.76172C0 4.22656 1.17188 5.44727 2.58789 5.44727ZM21.8262 22H21.875V13.9922C21.875 10.0859 20.9961 7.05859 16.4062 7.05859C14.209 7.05859 12.7441 8.2793 12.1094 9.40234H12.0605V7.40039H7.71484V22H12.2559V14.7734C12.2559 12.8691 12.5977 11.0625 14.9414 11.0625C17.2852 11.0625 17.334 13.2109 17.334 14.9199V22H21.8262Z"/>
        </svg>
    )
}

export default LinkedinIcon