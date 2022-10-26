import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PartsProvider } from '../providers/PartsProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return <PartsProvider>
    <Component {...pageProps} />
  </PartsProvider>
}

export default MyApp
