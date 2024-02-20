import {ReactNode} from "react";

import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";

type Props = {
    children: ReactNode
    noFooter?: boolean
}
const Layout = ({children, noFooter = false}: Props) => {
    return (
        <>
            <Header/>
            {children}
            {noFooter ? null : <Footer/>}
            <Footer/>
        </>
    )
}

export default Layout