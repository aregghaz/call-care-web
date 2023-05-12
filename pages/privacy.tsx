import React, {FC, useEffect, useState} from "react";
import cls from "../styles/terms.module.scss"
import {TermsProps} from "@/pages/terms";
import axios from "axios";
import databaseInfo from "@/db/dbdata";
import LoadingScreen from "@/components/loading-screen/loading-screen";
import ErrorWindow from "@/components/error-window/error-window";
import jsonData from "../public/db.json"
import {useSelector} from "react-redux";
import {globalError, globalSelector} from "@/store/slices/global/global.slice";

const Privacy:FC<TermsProps> = ({
    address,
    email,
    date,
}) => {
    const [data, setData] = useState<TermsProps>({
        version: "",
        url: "",
        address: "",
        email: "",
        date: "",
    })
    const privacyData = useSelector(globalSelector)
    const error = useSelector(globalError)
    useEffect(() => {
        setData(privacyData)
    }, [privacyData])
    return error ? <ErrorWindow/> : Object.values(data).length > 0 ? (
        <div className={cls.terms}>
            <strong className={cls.strong} >Privacy Policy</strong>  <p className={cls.p} >
            CalCare built the Calcare app as
            a Free app. This SERVICE is provided by
            CalCare at no cost and is intended for use as
            is.
        </p>  <p className={cls.p} >
            This page is used to inform visitors regarding our
            policies with the collection, use, and disclosure of Personal
            Information if anyone decided to use our Service.
        </p>  <p className={cls.p} >
            If you choose to use our Service, then you agree to
            the collection and use of information in relation to this
            policy. The Personal Information that we collect is
            used for providing and improving the Service. We will not use or share your information with
            anyone except as described in this Privacy Policy.
        </p>  <p className={cls.p} >
            The terms used in this Privacy Policy have the same meanings
            as in our Terms and Conditions, which are accessible at
            Calcare unless otherwise defined in this Privacy Policy.
        </p>  <p className={cls.p} > <strong className={cls.strong} >Information Collection and Use</strong></p>  <p className={cls.p} >
            For a better experience, while using our Service, we
            may require you to provide us with certain personally
            identifiable information. The information that
            we request will be retained by us and used as described in this privacy policy.
        </p> {/**/}  <p className={cls.p} > <strong className={cls.strong} >Log Data</strong></p>  <p className={cls.p} >
            We want to inform you that whenever you
            use our Service, in a case of an error in the app
            we collect data and information (through third-party
            products) on your phone called Log Data. This Log Data may
            include information such as your device Internet Protocol
            (“IP”) address, device name, operating system version, the
            configuration of the app when utilizing our Service,
            the time and date of your use of the Service, and other
            statistics.
        </p>  <p className={cls.p} > <strong className={cls.strong} >Cookies</strong></p>  <p className={cls.p} >
            Cookies are files with a small amount of data that are
            commonly used as anonymous unique identifiers. These are sent
            to your browser from the websites that you visit and are
            stored on your device&apos;s internal memory.
        </p>  <p className={cls.p} >
            This Service does not use these “cookies” explicitly. However,
            the app may use third-party code and libraries that use
            “cookies” to collect information and improve their services.
            You have the option to either accept or refuse these cookies
            and know when a cookie is being sent to your device. If you
            choose to refuse our cookies, you may not be able to use some
            portions of this Service.
        </p>  <p className={cls.p} > <strong className={cls.strong} >Service Providers</strong></p>  <p className={cls.p} >
            We may employ third-party companies and
            individuals due to the following reasons:
        </p> <ul className={cls.ul}><li>To facilitate our Service;</li> <li>To provide the Service on our behalf;</li> <li>To perform Service-related services; or</li> <li>To assist us in analyzing how our Service is used.</li></ul>  <p className={cls.p} >
            We want to inform users of this Service
            that these third parties have access to their Personal
            Information. The reason is to perform the tasks assigned to
            them on our behalf. However, they are obligated not to
            disclose or use the information for any other purpose.
        </p>  <p className={cls.p} > <strong className={cls.strong} >Security</strong></p>  <p className={cls.p} >
            We value your trust in providing us your
            Personal Information, thus we are striving to use commercially
            acceptable means of protecting it. But remember that no method
            of transmission over the internet, or method of electronic
            storage is 100% secure and reliable, and we cannot
            guarantee its absolute security.
        </p>  <p className={cls.p} > <strong className={cls.strong} >Links to Other Sites</strong></p>  <p className={cls.p} >
            This Service may contain links to other sites. If you click on
            a third-party link, you will be directed to that site. Note
            that these external sites are not operated by us.
            Therefore, we strongly advise you to review the
            Privacy Policy of these websites. We have
            no control over and assume no responsibility for the content,
            privacy policies, or practices of any third-party sites or
            services.
        </p>  <p className={cls.p} > <strong className={cls.strong} >Children’s Privacy</strong></p> {/**/} <div> <p className={cls.p} >
            We do not knowingly collect personally
            identifiable information from children. We
            encourage all children to never submit any personally
            identifiable information through
            the Application and/or Services.
            We encourage parents and legal guardians to monitor
            their children&apos;s Internet usage and to help enforce this Policy by instructing
            their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child
            has provided personally identifiable information to us through the Application and/or Services,
            please contact us. You must also be at least 16 years of age to consent to the processing
            of your personally identifiable information in your country (in some countries we may allow your parent
            or guardian to do so on your behalf).
        </p></div>  <p className={cls.p} > <strong className={cls.strong} >Changes to This Privacy Policy</strong></p>  <p className={cls.p} >
            We may update our Privacy Policy from
            time to time. Thus, you are advised to review this page
            periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on
            this page.
        </p>  <p className={cls.p} >This policy is effective as of {data.date}</p>  <p className={cls.p} > <strong className={cls.strong} >Contact Us</strong></p>  <p className={cls.p} >
            If you have any questions or suggestions about our
            Privacy Policy, do not hesitate to contact us at {data.email}.
        </p>
        </div>
    ) : <LoadingScreen/>
}

export default Privacy