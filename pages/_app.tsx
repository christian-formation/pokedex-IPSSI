import '../styles/index.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Menu from '../src/components/Menu'
import {Provider as MainContext} from '../src/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (<MainContext><div><Menu></Menu> <Component {...pageProps} /></div></MainContext>)
}

export default MyApp
