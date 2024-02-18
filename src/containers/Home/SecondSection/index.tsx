import React from "react";

import Container from "components/Container";
import PromoCarousel from "containers/Home/SecondSection/PromoCarousel";
import Package from "containers/Home/SecondSection/Package";
import Categories from "containers/Home/SecondSection/Categories";

import styles from "./SecondSection.module.css"
import 'react-multi-carousel/lib/styles.css'
import Testimonials from "containers/Home/SecondSection/Testimonials";

const SecondSection = () => {
    return (
        <section className={styles.section}>
            <Container>
                <PromoCarousel/>
                <Package/>
                <Categories/>
                <Testimonials/>
            </Container>
        </section>
    )
}

export default SecondSection