// import type {AppProps} from 'next/app'
import 'tailwindcss/tailwind.css'

export default function App({Component, pageProps}) {
    return <Component {...pageProps} />
}