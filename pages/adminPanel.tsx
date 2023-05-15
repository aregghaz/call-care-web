import cls from "../styles/adminPanel.module.scss"
import React, {FC} from "react"
import Image from "next/image";
import Tilt from "react-parallax-tilt";


const AdminPanel:FC = ({

    }) => {
        return(
            <>
                <div className={cls.adminMain}>
                    <div className={cls.adminMainImg}></div>
                    <div className={cls.adminMainContent}>
                        <h1>CalCare Admin Panel</h1>
                        <h2>Streamlining Medical Transportation with <br /> CalCares Advanced Admin Panel</h2>
                        <p>
                            CalCares admin panel could include features that enable the company to
                            manage its drivers, such as tracking their locations and the status of
                            their vehicles in real-time. This feature helps the management team to
                            respond quickly to any emergency situations that may arise and ensures
                            that patients are transported safely and efficiently.
                        </p>
                        <button>Visit Now</button>
                    </div>
                </div>
                <div className={`${cls.adminMain} ${cls.adminMain2}`}>

                    <div className={`${cls.adminMainContent} ${cls.adminMainContent2}`}>
                        <h1>Dashboard Admin</h1>
                        <h2>Efficient Management Made Easy: A Closer Look at CalCares Admin Panel Dashboard</h2>
                        <p>
                            The admin panel dashboard provides a comprehensive view of the companys operations,
                            including driver performance, vehicle utilization, and the number of trips completed
                            in a day. The dashboard also displays upcoming trips and schedules, allowing the
                            management team to monitor and adjust resources in real-time.
                        </p>
                    </div>
                    <div className={`${cls.adminMainImg} ${cls.adminMainImg2}`}>

                    </div>
                </div>

                <div className={`${cls.adminMain} ${cls.adminMain2} ${cls.adminMain3}`}>

                    <div className={`${cls.adminMainContent} ${cls.adminMainContent2} ${cls.adminMainContent3}`}>
                        <h1>CalCar Trips</h1>
                        <h2>Optimizing Medical Transportation with CalCares Admin Panel Trips Feature</h2>
                        <p>
                            The admin panel trips feature also generates reports on trip data, such as
                            trip duration, distance traveled, and any incidents that occur during the trip.
                            These reports provide valuable insights that CalCare can use to optimize its
                            transportation services continually and improve patient safety and satisfaction.
                        </p>
                    </div>
                    <div className={`${cls.adminMainImg} ${cls.adminMainImg2} ${cls.adminMainImg3}`}>

                    </div>
                </div>
                <div className={`${cls.adminMain} ${cls.adminMain2}`}>

                    <div className={`${cls.adminMainContent} ${cls.adminMainContent2}`}>
                        <h1>Notifications</h1>
                        <h2>Real-Time Alerts and Updates: CalCares Admin Panel Notification System for Efficient Medical Transportation</h2>
                        <p>
                            CalCares admin panel notification system is a valuable tool for keeping the companys management
                            team informed about important updates and alerts related to medical transportation services.
                            The notification system sends real-time alerts and updates to the management team,
                            allowing them to respond quickly to any issues that may arise.
                        </p>
                    </div>
                    <div className={`${cls.adminMainImg} ${cls.adminMainImg2} ${cls.adminMainImg4}`}>

                    </div>
                </div>
            </>
        )
}

export default AdminPanel