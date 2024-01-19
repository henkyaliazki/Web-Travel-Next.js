import cN from "classnames"

import styles from './Button.module.css'
type Props ={
    children: string
    className?: string
    fullWidth?: string
    outlined?: string
}
const  Button = ({children,className='',fullWidth,outlined}: Props)=>{
    return(
        <button className={cN(styles.button,className,{
            [styles.fullWidth]: fullWidth,
            [styles.outlined]: outlined
        })}>
            {children}
        </button>
    )
}
export default Button