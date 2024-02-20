import Layout from "components/Layout";

import styles from "./Login.module.css"
import Button from "components/Button";
import Input from "components/Input";

const Login = () => {
    return (
        <Layout noFooter>
            <section className={styles.section}>
                <div className={styles.wrapperForm}>
                    <p className="textt-heading-3 font-label font-extrabold">Masuk</p>
                    <div className="flex mt-3">
                        <p className="text-heading-5 text-gray-50 font-semibold">
                            Belum punya akun?
                        </p>
                        <a href="#" className="text-heading-5 text-blue-100 font-semibold ml-2 hover:underline">
                            Daftar di sini
                        </a>
                    </div>
                    <form action="" className="flex flex-col mt-8">
                       <Input
                           name="email"
                           type="email"
                           label="Email"
                           placeholder="Masukan email anda."
                           className="mb-6"
                           />
                        <Input
                           name="password"
                           type="password"
                           label="Kata sandi"
                           placeholder="Masukan kata sandi anda."
                           />
                        <a
                            href="#"
                           className="text-heading-5 text-blue-100 font-semi-bold mt-8 mb-4 hover:underline">
                            Lupa kata sandi ?
                        </a>

                        <Button>Masuk</Button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default Login