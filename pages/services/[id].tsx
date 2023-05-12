import React, {FC, useEffect, useState} from "react"
import cls from "../../styles/service.module.scss"
import Image from "next/image";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import LoadingScreen from "@/components/loading-screen/loading-screen";
import ErrorWindow from "../../components/error-window/error-window";
import {servicesListSelector} from "@/store/slices/services/services.slice";

interface ServiceProps {

}

const Id: FC<ServiceProps> = ({}) => {
    const router = useRouter()
    const servicesList = useSelector(servicesListSelector)
    const [service, setService] = useState({})
    const [error, setError] = useState("")
    useEffect(() => {
        setService(servicesList.find(item => item.serviceId === router.query.id) ?? {})
    }, [router.query, servicesList])
    return Object.keys(service).length > 0 ? (
        <div className={cls.serviceContainer}>
            <div className={cls.serviceImg}>
                <div className={cls.imgWrapper}>
                    <Image className={cls.servicePsImg} src={"/images/serviceImg.webp"} alt={"service"} width={470}
                           height={470}/>
                </div>
            </div>
            <div className={cls.serviceInfo}>
                <div className={`${cls.serviceItem}`}>
                    <h1>{service.serviceName}</h1>
                </div>
                <div className={`${cls.serviceText} ${cls.serviceItem}`}>
                    {
                        <p className={cls.itemText}>{service.serviceDetails}</p>
                        // (service.serviceDetails ?? []).map((item, index) => {
                        //     return (
                        //         <p className={cls.itemText}>{item.detailDescription}</p>
                        //     )
                        // })
                    }
                </div>
                <div className={`${cls.serviceItem}`}>
                    <div className={cls.companyCont}>
                        <Image src={"/images/mailIcon.svg"} alt={"mail"} width={30} height={30}/>
                        <p>info@mygeneralmed.com</p>
                    </div>
                    <div className={cls.companyCont}>
                        <Image src={"/images/phoneIcon.svg"} alt={"phone"} width={30} height={30}/>
                        <p>888-543-9468</p>
                    </div>
                </div>
            </div>
        </div>
    ) : error ? <ErrorWindow/> : <LoadingScreen/>
}

export default Id


// <React.Fragment key={index}>
{/*<div>*/
}
{/*    <h3 className={cls.itemsName}>{item.detailName}</h3>*/
}
{/*</div>*/
}
// {index !== service.serviceDetails.length - 1 ? <div className={cls.separator}></div> : null}
// </React.Fragment>