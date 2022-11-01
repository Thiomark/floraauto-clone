import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PartsProvider } from '../providers/PartsProvider'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <PartsProvider>
    <Component {...pageProps} />
  </PartsProvider>
}

export default MyApp
