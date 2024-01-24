import styles from "./TopSection.module.css"
import Container from "components/Container";
import Button from "components/Button";
import InfoItems from "containers/Home/TopSection/InfoItem";

const TopSection = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col pt-[112px] pb-[58px]">
                    <div className="flex flex-col mb-[174px]">

                        <h1 className="text-heading-2 font-bold font-label text-gray-100 w-[500px] mb-8">
                            Jelajahi Bumi Dengan Satu Sentuhan
                        </h1>

                        <p className="text-heading-3 text-gray-70 w-[516px] mb-7">
                            Jelajahi bumi yang indah dengan satu sentuhan dengan pesan tiket
                            di Travel kamu akan dapatkan pelayanan terbaik untuk wisata
                            liburanmu kemana saja dan kapan saja
                        </p>

                        <Button className="w-[190px]">Lihat Paket</Button>
                    </div>
                    <div className="flex gap-40 mx-auto">
                        <InfoItems
                            label="+40"
                            subJudul="Negara"
                        />
                        <InfoItems
                            label="+1500"
                            subJudul="Penginapan"
                        />
                        <InfoItems
                            label="+150"
                            subJudul="Tempat Wisata"
                        />
                        <InfoItems
                            label="+60.000"
                            subJudul="Pelanggan"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default TopSection;