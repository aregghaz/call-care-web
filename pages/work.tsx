import React, {FC, useEffect} from "react"
import cls from '../styles/work.module.scss'
import {useSelector} from "react-redux";
import {availablePositionsSelector} from "@/store/slices/work/work.slice";
import Input from "@/components/input/input";

const Work:FC<any> = ({

}) => {
    const availablePositions = useSelector(availablePositionsSelector)
    // const dispatch = useDispatch<AppDispatch>()
    // useEffect(() => {
    //     dispatch(fetchWork())
    // }, [dispatch])
    return (
        <div className={cls.work}>
            <div className={cls.workInfo}>
                <h1>Work With Us</h1>
                <div className={cls.workMenu}>
                    <h2>Available Positions</h2>
                    <ul>
                        {
                            availablePositions.map((position, index) => {
                                return (
                                    <li key={index}>{position}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={cls.workForm}>
                <form action="#">
                    <div className={cls.inputInfos}>
                        <Input type={"text"} inputMode={"text"} name={"position"} className={cls.inputPosition}/>
                        {/*<input type="text" placeholder={"Position Applying For"} className={cls.inputPosition}/>*/}
                        <input type="text" placeholder={"First Name"}/>
                        <input type="text" placeholder={"Last Name"}/>
                        <input type="email" placeholder={"Email"}/>
                        <input type="tel" placeholder={"Phone"}/>
                    </div>
                    <div className={cls.inputComment}>
                        <label htmlFor={"file"}>Upload Your Resume</label>
                        <input type="file" id={"file"} className={cls.file}/>
                        <label htmlFor={"textCom"}>Or Copy and Paste Your Resume Bellow</label>
                        <textarea name="comment" id="textCom" cols="30" rows="10" />
                    </div>
                    <div className={cls.buttonWrapper}>
                        <button className={cls.workSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Work