import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavigationTabProvider from "../context/NavigationTabContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <NavigationTabProvider>
      <Component {...pageProps} />
      </NavigationTabProvider>

  )
}

export default MyApp
