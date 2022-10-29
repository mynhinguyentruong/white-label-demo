import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { createContext, useState } from "react";

export const UserContext = createContext(null)

function UserContextProvider({children}) {

  const [email, setEmail] = useState("")

  function updateEmail(e) {
    setEmail(e.target.value)
  }

  return (
    <UserContext.Provider value={{email, updateEmail}}>
      {children}
    </UserContext.Provider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
