import { createContext, useState } from 'react';

import { useRouter } from 'next/router';

export const NavigationTabContext = createContext([]);


export default function NavigationTabProvider({ children }) {
    const router = useRouter()


    const [navigation, setNavigation] = useState([
        { name: 'Shop', href: '/flow/1', current: true },
        { name: 'Stores', href: '/flow/1', current: false },
        { name: 'NFTs', href: '/flow/collections', current: false },
        { name: 'NFT Wallet', href: '/user/collection', current: false },
    ])

    const [isLoading, setIsLoading] = useState()

    function something(item) {
        setNavigation(prevState => {
            return prevState.map(state => state.current ? {...state, current: false} : (item.name === state.name ? {...state, current: true} : state))
        })
        console.log("current global state",navigation)
        console.log("current global state",navigation)
        console.log("current global state",navigation)
        router.push(item.href);
    }

    return (
        <NavigationTabContext.Provider value={{navigation,something}}>
            {children}
        </NavigationTabContext.Provider>
    )

}
