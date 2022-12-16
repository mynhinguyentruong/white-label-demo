import Layout from "../components/Layout";
import {
    BlockchainTypes,
    CrossmintEnvironment,
    CrossmintEVMWalletAdapter,
} from "@crossmint/connect";

import { useState } from "react";
import Image from "next/image";

export default function YourCustomConnectButton() {
    const [address, setAddress] = useState(undefined);
    const [nfts, setNfts] = useState([]);
    const [crossmintConnect, setCrossmintConnect] = useState(null)

    console.log(address)
    console.log(address)
    console.log(address)

    async function connectToCrossmint() {
        // Initialize the Crossmint connect.
        const _crossmintConnect = new CrossmintEVMWalletAdapter({
            apiKey: process.env.API_KEY,
            chain: BlockchainTypes.ETHEREUM, // BlockchainTypes.ETHEREUM || BlockchainTypes.POLYGON. For solana use BlockchainTypes.SOLANA
        });

        setCrossmintConnect(_crossmintConnect)

        // Ask the user to sign in and give access to their publicKey
        const address = await _crossmintConnect.connect();

        // If the user successfully connects to Crossmint, the address will be returned.
        if (address) {
            setAddress(address);
        }

        const res = await fetch(`https://www.crossmint.io/api/v1-alpha1/wallets/eth:${address}/nfts`, {
            headers: {
                'Content-Type': 'application/json',
                'X-PROJECT-ID': process.env.PROD_PROJECT_ID,
                'X-CLIENT-SECRET': process.env.API_KEY
            }
        });
        const data = await res.json();
        setNfts(data);
        console.log(data)
        console.log(data)
        console.log(data)

    }



    return (
        <>
            <Layout/>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4 py-10">
                <button
                    onClick={connectToCrossmint}
                    className="px-6 py-2 font-semibold text-black bg-white rounded-md hover:bg-gray-700 hover:text-white border rounded-lg"
                >
                    {address ? address.slice(0, 6) + "..." : "Connect to Crossmint Wallet"}
                </button>
                <button onClick={signMessage}>Sign Message</button>
            </div>
            {(address && nfts) && (
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {nfts?.map(nft => (
                        <a href={`/flow/wallets/${nft.locator}`} className="group"  key={nft.mintHash}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <Image width={280} height={320} src={nft.metadata.image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <h3 className="mt-4 text-sm font-bold text-gray-700">{nft.metadata.name}</h3>
                            <p className="mt-1 text-xs text-gray-900 truncate">mintHash: {nft.locator}</p>
                        </a>
                    ))}
                </div>
            )}
        </>
);
}


