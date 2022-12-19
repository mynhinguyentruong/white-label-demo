import { createContext, useState } from 'react';

import { useRouter } from 'next/router';

export const NavigationTabContext = createContext([]);


export default function NavigationTabProvider({ children }) {
    const router = useRouter()


    const [navigation, setNavigation] = useState([
        { name: 'Products', href: '/flow/1', current: true },
        { name: 'Stores', href: '/flow/1', current: false },
        { name: 'NFTs', href: '/flow/collections', current: false },
        { name: 'NFT Wallet', href: '/user/collection', current: false },
        { name: 'Support', href: 'https://docs.crossmint.io/docs', current: false },
    ])

    const [isLoading, setIsLoading] = useState(false)

    function something(item) {
        setNavigation(prevState => {
            return prevState.map(state => state.current ? {...state, current: false} : (item.name === state.name ? {...state, current: true} : state))
        })
        console.log("current global state",navigation)
        console.log("current global state",navigation)
        console.log("current global state",navigation)
        router.push(item.href);
        setIsLoading(true);
    }

    return (
        <NavigationTabContext.Provider value={{navigation,something}}>
            {children}
        </NavigationTabContext.Provider>
    )

}
