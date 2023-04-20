import React, {FC} from "react"
import {svgUtil} from "@/svgs/util";

const FacebookIcon:FC<svgUtil> = ({
    width = 25,
    height = 25,
<<<<<<< HEAD
    color = ""
=======
    color= ""
>>>>>>> 5c3f47112f2ecfe936fb352514cba2ff59af14c9
}) => {
    return (
        <svg width={width} height={height} fill={color} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.6094 12.625C24.6094 5.93555 19.1895 0.515625 12.5 0.515625C5.81055 0.515625 0.390625 5.93555 0.390625 12.625C0.390625 18.6797 4.78516 23.709 10.5957 24.5879V16.1406H7.51953V12.625H10.5957V9.98828C10.5957 6.96094 12.4023 5.25195 15.1367 5.25195C16.5039 5.25195 17.8711 5.49609 17.8711 5.49609V8.47461H16.3574C14.8438 8.47461 14.3555 9.40234 14.3555 10.3789V12.625H17.7246L17.1875 16.1406H14.3555V24.5879C20.166 23.709 24.6094 18.6797 24.6094 12.625Z"/>
        </svg>
    )
}

export default FacebookIcon