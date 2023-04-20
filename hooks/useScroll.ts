import {useEffect, useState} from "react";

type windowScrollType = {
    x: number,
    y: number,
}

const useScroll = () => {
    const [scroll, setScroll] = useState<windowScrollType>({x: -1, y: -1})

    const scrollHandler = () => {
        setScroll({
            x: window.scrollX,
            y: window.scrollY,
        })
    }

    useEffect(() => {
       window.addEventListener("scroll", scrollHandler)

        return () => {
           window.removeEventListener("scroll", scrollHandler)
        }

    }, [])

    return scroll
}

export default useScroll