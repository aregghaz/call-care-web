import React, {FC} from "react"
import cls from "../../styles/service.module.scss"
import Image from "next/image";

interface ServiceProps {

}

const Service:FC<ServiceProps> = ({

}) => {
    return (
        <div className={cls.serviceContainer}>
            <div className={cls.serviceImg}>
                <div className={cls.imgWrapper}>
                    <Image className={cls.servicePsImg} src={"/images/serviceImg.webp"} alt={"service"} width={470} height={470} />
                </div>
            </div>
            <div className={cls.serviceInfo}>
                <div className={`${cls.serviceItem}`}>
                    <h1>Therapy`</h1>
                </div>
                <div className={`${cls.serviceText} ${cls.serviceItem}`}>
                    {
                        new Array(5).fill("").map(item => {
                            return (
                                <div>
                                    <h3 className={cls.itemsName}>Physical Therapy</h3>
                                    <p className={cls.itemText}>Physical therapy can be beneficial for a wide range of conditions,  <br/> including sports injuries, chronic pain, arthritis,back pain, post-surgical  <br/> rehabilitation, and neurological disorders such as stroke or Parkinson's disease. </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`${cls.serviceItem}`}>
                    <div className={cls.companyCont}>
                        <Image src={"/images/mailIcon.svg"} alt={"mail"} width={30} height={30}/>
                        <p>info@mygeneralmed.com</p>
                    </div>
                    <div className={cls.companyCont}>
                        <Image src={"/images/phoneIcon.svg"} alt={"phone"} width={30} height={30} />
                        <p>888-543-9468</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service