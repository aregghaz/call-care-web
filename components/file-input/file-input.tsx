import React, {FC, useState} from "react";
import cls from "./file-input.module.scss";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface FileInputProps {
    name?: string,
    changeHandler?: Function,
    error?: string,
    maxFileSize?: number,
    allowedFileExt: Array<string>,
    label?: string

}

const FileInput:FC<FileInputProps> = ({
    error= "",
    maxFileSize = Infinity,
    allowedFileExt= [],
    changeHandler,
    name,
    label
                                      }) => {
    const [fileName, setFileName] = useState<string>("")
    const [selfError, setSelfError] = useState<string>(error)
    return (
        <>
            <div className={`${cls.main} ${error && cls.inputError}`}>
                <label className={cls.label} htmlFor={"file"}>{label}<sub>{maxFileSize / 1024}mb</sub></label>
                <div className={`${cls.fileWrapper} ${error && cls.inputError}`}>
                    <input type="file" id={"file"} className={cls.file} onChange={(e) => {
                        setFileName("")
                        changeHandler ? changeHandler(null,name) : () => {}
                        if (e.target.files && e.target.files.length > 0) {
                            console.log(e.target.files[0])
                            if (e.target.files[0].size <= maxFileSize * 1024) {
                                if (allowedFileExt.includes(e.target.files[0].type.split("/")[1])) {
                                    setFileName(e.target.files[0].name)
                                    changeHandler ? changeHandler(e.target.files[0],name) : () => {}
                                    setSelfError("")
                                } else {
                                    setSelfError(`File extension must be ${allowedFileExt.join(" ")}`)
                                }
                            } else {
                                setSelfError(`File size extends ${maxFileSize / 1024}mb`)
                            }
                        } else {
                            setSelfError("Please include a file")
                        }

                        // if (!e.target.files || e.target.files.length === 0) {
                        //     setSelfError("Please include a file");
                        //     return;
                        // }
                        //
                        // const file = e.target.files[0];
                        //
                        // if (file.size > maxFileSize * 1024) {
                        //     setSelfError(`File size exceeds ${maxFileSize / 1024}MB`);
                        //     return;
                        // }
                        //
                        // const fileExtension = file.type.split("/")[1];
                        //
                        // if (!allowedFileExt.includes(fileExtension)) {
                        //     setSelfError(`File extension must be ${allowedFileExt.join(" ")}`);
                        //     return;
                        // }
                        //
                        // setFileName(file.name);
                        // changeHandler ? changeHandler(file, name) : () => {};
                        // setSelfError("");

                    }}/>
                    {fileName && <span>{fileName}</span>}
                </div>
                {selfError && <span className={cls.errorMessage}>{selfError}</span>}
            </div>
        </>
    )
}

export default FileInput