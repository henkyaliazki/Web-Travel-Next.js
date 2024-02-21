import clsx from "clsx";
import {useState} from "react";

import type {InputProps} from "./interface";
import {FaEye, FaEyeSlash} from "react-icons/fa"
import style from "./input.module.css"


const Input = ({name, type, label, placeholder, className}: InputProps) => {
    const [hidePassword, setHidPassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    const handleEyeClick = () => {
        setHidPassword((currState) => !currState)
        if (type === 'password' && !hidePassword) {
            setInputType('text')
        } else {
            setInputType('password')
        }
    }
    return (
        <label htmlFor={name} className={clsx(style.label, className)}>
            <div className="mt-3">{label}</div>

            <input
                type={inputType}
                name={name}
                id={name}
                placeholder={placeholder}
                className={style.input}
            />
            
            {type === 'password' ? (
                <button
                    type="button"
                    className={style.eye}
                    onClick={handleEyeClick}
                >
                    {hidePassword ? (
                        <FaEyeSlash className="h-6 w-6 text-gray-100"/>
                    ) : (
                        <FaEye className="h-6 w-6 text-gray-100"/>
                    )}
                </button>
            ) : null}
        </label>
    )
}

export default Input