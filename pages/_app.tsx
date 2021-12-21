import '../styles/index.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Menu from '../src/components/Menu'

function MyApp({ Component, pageProps }: AppProps) {
  return (<div><Menu></Menu> <Component {...pageProps} /></div>)
}

export default MyApp
