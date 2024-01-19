import Image from "next/image";
import travelLogo from 'public/assets/travelo-logo-header.png'

import Container from "components/Container";
import Search from "components/Layout/Header/Search";
import Nav from "components/Layout/Header/Nav";
import Button from "components/Button";

const Header = () => {
    return (
        <header className="h-[85px] bg-white shadow-lg p-4">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <Image
                            src={travelLogo}
                            alt="travelo Logo"
                            placeholder="blur"
                            height="48"
                            width="182"
                        />
                        <Search/>
                    </div>
                    <div className="flex gap-5">
                        <Nav/>
                        <Button className="w-[190px]">
                            Masuk
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header