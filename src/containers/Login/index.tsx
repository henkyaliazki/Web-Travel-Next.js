import Layout from "components/Layout";
import Button from "components/Button";
import Input from "components/Input";

import {useComponentsLogic} from "containers/Login/hooks";
import styles from "./Login.module.css"

const Login = () => {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors
    } = useComponentsLogic()
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
                    <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-8">
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

                        <Button type="submit" fullWidth>
                            Masuk
                        </Button>
                    </form>
                    <p className="text-heading-5 text-gray-70 my-8 text-center">
                        Atau masuk dengan
                    </p>
                    <Button className="mb-4" variant="google">
                        Masuk dengan google
                    </Button>
                    <Button variant="facebook">
                        Masuk dengan facebook
                    </Button>
                </div>
            </section>
        </Layout>
    )
}

export default Login