import {ReactNode} from "react";

import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";

type Props = {
    children: ReactNode
}
const Layout = ({children}: Props) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout