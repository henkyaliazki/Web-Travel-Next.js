import Image from "next/image";

import Container from "components/Container";
import FooterInfo from "components/Layout/Footer/FooterInfo";
import styles from './Footer.module.css'
import traveLogo from 'public/assets/travelo-logo-footer.png'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container size="lg">
                <div className="flex bg-white p-16">
                    <figure>
                        <Image
                            src={traveLogo}
                            alt="traveLogo"
                            placeholder="blur"
                            height="98"
                            width="136"
                        />
                    </figure>
                    <div className="flex flex-1 justify-between ml-[106px]">
                        <FooterInfo
                            title="Info"
                            content={[
                                {
                                    label: 'Tentang Kami',
                                    href: '/'
                                },
                                {
                                    label: 'Testimonial',
                                    href: '/'
                                },
                                {
                                    label: 'Kontak',
                                    href: '/'
                                }
                            ]}
                        />

                        <FooterInfo
                            title="Perusahaan"
                            content={[
                                {
                                    label: 'Syarat & Ketentuan',
                                    href: '/'
                                },
                                {
                                    label: 'Kebijakan Privasi',
                                    href: '/'
                                },
                                {
                                    label: 'Blog',
                                    href: '/'
                                },
                                {
                                    label: 'Bantuan Pelayanan',
                                    href: '/'
                                }

                            ]}
                        />

                        <FooterInfo
                            title="Kontak"
                            content={[
                                'Jl. Daan Mogot No.12',
                                'Jakarta-Barat, Jakarta',
                                'Indonesia',
                                '(021)000221',
                                'travel@travelindo.com'
                            ]}
                        />
                    </div>
                </div>
            </Container>
            <div className="bg-blue-100 p-3">
                <p className="text-heading-5 text-white font-bold text-center">
                    Copyright 2024 Travel. All Right Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer