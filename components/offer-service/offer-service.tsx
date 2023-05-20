import React, {FC} from "react"
import cls from "./offer-service.module.scss"
import Image from "next/image";
import Link from "next/link";
import {AosInterface, imageType} from "@/utils/types";
import Tilt from "react-parallax-tilt";
import ArrowRight from "../../svgs/arrowRight";

export interface OfferServiceProps {
    name: string,
    description: string,
    link: string,
    image: string,
}

const OfferService:FC<OfferServiceProps & AosInterface> = ({
    name,
    description,
    link,
    image,
    dataAos= ""
}) => {
    return (
        <Tilt
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
        >
            <Link href={link} style={{textDecoration: "none"}}>
                <div className={cls.offerService} data-aos={dataAos.type} data-aos-duration={dataAos.duration} data-aos-delay={dataAos.delay}>
                    <div className={cls.serviceImg}>
                        <Image className={cls.imgSize} src={image} alt={"service image"} width={380} height={250} />
                    </div>
                    <div className={cls.serviceInfo}>
                        <div className={cls.serviceTitle}>
                            <h2>{name}</h2>
                            <p>{description}</p>
                        </div>
                        <div className={cls.serviceReadMore}>
                            <button>Read More <ArrowRight/></button>
                        </div>
                    </div>
                </div>
            </Link>
        </Tilt>
    )
}

export default OfferService