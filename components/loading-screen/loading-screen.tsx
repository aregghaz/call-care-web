import React, {FC} from "react"
import ReactLoading from "react-loading"
const LoadingScreen = ({
    fullscreen = true
}: {fullscreen?: boolean}) => {
    return (
        <div style={{
            width: "100%",
            height: fullscreen ? "100vh" : "100%",
            display: "grid",
            placeItems: "center",
        }}>
            <ReactLoading
                type={"bars"}
                color={"#D33834"}
                height={100}
                width={100}
            />
        </div>
    )
}

export default LoadingScreen