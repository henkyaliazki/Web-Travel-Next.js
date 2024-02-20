import clsx from "clsx";

import type {InputProps} from "./interface";
import style from "./input.module.css"


const Input = ({name, type, label, placeholder, className}: InputProps) => {
    return (
        <label htmlFor={name} className={clsx(style.label, className)}>
            <div className="mt-3">{label}</div>

            <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className={style.input}
            />
        </label>
    )
}

export default Input