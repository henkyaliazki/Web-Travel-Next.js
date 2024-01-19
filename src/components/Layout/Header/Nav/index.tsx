import NavItem from "components/Layout/Header/NavItem";

const Nav = () => {
    return (
        <nav className="flex items-center gap-5">
            <NavItem
                label="Beranda"
                href="/"/>
            <NavItem
                label="Kontak"
                href="/"/>
            <NavItem
                label="Paket"
                href="/"/>
            <NavItem
                label="Testimonial"
                href="/"/>
        </nav>
    )
}

export default Nav