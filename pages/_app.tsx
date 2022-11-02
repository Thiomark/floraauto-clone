import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PartsProvider } from '../providers/PartsProvider'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../providers/AuthProvider';
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth';

function MyApp({ Component, pageProps }: AppProps<{session: Session}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider>
          <PartsProvider>
          <Component {...pageProps} />
        </PartsProvider>
      </AuthProvider>
    </SessionProvider>
    )
}

export default MyApp
