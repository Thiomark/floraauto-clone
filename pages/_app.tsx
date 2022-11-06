import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PartsProvider } from '../providers/PartsProvider'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../providers/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AuthProvider>
          <PartsProvider>
          <Component {...pageProps} />
        </PartsProvider>
      </AuthProvider>
    )
}

export default MyApp
