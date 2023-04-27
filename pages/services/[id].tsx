import React, {FC, useEffect, useState} from "react"
import cls from "../../styles/service.module.scss"
import Image from "next/image";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import axios from "axios";
import databaseInfo from "@/db/dbdata";
import {router} from "next/client";
import LoadingScreen from "@/components/loading-screen/loading-screen";

interface ServiceProps {

}

const Id:FC<ServiceProps> = ({

}) => {
    const selectedService = useSelector(state => state.services)
    const [service, setService] = useState({})
    const selectedId = useRouter().query.id
    useEffect(() => {
        if (Object.keys(selectedService).length <= 0 && selectedId) {
            (async () => {
                const result = await axios.get(`${databaseInfo.db}/${databaseInfo.services}?serviceId=${selectedId}`)
                setService(result.data[0])
            })();
        } else {
            setService(selectedService)
        }
    }, [selectedId])
    return Object.keys(service).length > 0 ? (
        <div className={cls.serviceContainer}>
            <div className={cls.serviceImg}>
                <div className={cls.imgWrapper}>
                    <Image className={cls.servicePsImg} src={"/images/serviceImg.webp"} alt={"service"} width={470} height={470} />
                </div>
            </div>
            <div className={cls.serviceInfo}>
                <div className={`${cls.serviceItem}`}>
                    <h1>{service.serviceName}</h1>
                </div>
                <div className={`${cls.serviceText} ${cls.serviceItem}`}>
                    {
                        (service.serviceDetails ?? []).map((item, index) => {
                            return (
                                <div key={index}>
                                    <h3 className={cls.itemsName}>{item.detailName}</h3>
                                    <p className={cls.itemText}>{item.detailDescription}</p>
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
    ) : <LoadingScreen/>
}

export default Id