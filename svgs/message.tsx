import {svgUtil} from "@/svgs/util";
import {FC} from "react";
const MessageIcon:FC<svgUtil> = ({width = 16, height= 20}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 0.726166H0.5V15.2773H19.5V0.726166ZM17.6 13.4738H2.4V5.82382L10 10.1445L17.6 5.82382V13.4738ZM17.6 3.72499L10 8.0457L2.4 3.72499V2.52617H17.6V3.72499Z" fill="black"/>
        </svg>
    )
}

export default MessageIcon