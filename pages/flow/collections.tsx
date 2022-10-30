import Layout from "../../components/Layout"
import Image from "next/image"

import CollectionImage from "../../public/collection-image.png"

import TigerOne from "../../public/tiger-2.png"
import TigerTwo from "../../public/tiger-3.png"
import TigerThree from "../../public/tiger-4.png"

import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

function Page() {


    async function mintNft() {
        const res = await fetch(`https://staging.crossmint.io/api/v1-alpha1/checkout/mint`, {
            method: 'POST',
            body: JSON.stringify({
                clientId: "e844f3de-e3f9-4fcb-abc6-15e1bff5e6d7",
                userId: "1",
                mintTo: "0x4dacC710CC1419Eb383a558C40a5d95630eb175e",
                emailTo: "nhi@paella.dev",
                paymentMethod: "fiat",
                mintConfig: {
                    type: "candy-machine",
                    totalPrice: "0.0001",
                    environment: "staging"
                },
                collection: {
                    title: "Test Demo",
                    photo: "https://gateway.ipfscdn.io/ipfs/QmPbHFfbQkCcoKEk3hRoAqSqLs45KdjAnSP1siq5ToLxVE/collection-image.png"
                },
                redirect: {
                    continue: "http://localhost:3000/flow/wallets",
                    cancelled: "http://localhost:3000/flow/wallets"
                }
            }),
            headers: {
              'Content-Type': 'application/json',
              'X-PROJECT-ID': process.env.CROSSMINT_X_PROJECT_ID,
              'X-CLIENT-SECRET': process.env.CROSSMINT_X_CLIENT_SECRET
            }
        })
        const data = await res.json()
        window.open(data.checkoutUrl, 'popup', 'width=600,height=900')
    }
    return (
        <>
        <Layout/>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <a href="#"className="group" onClick={mintNft}>
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <Image width={280} height={320} src={CollectionImage} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">Tiger One</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">0.0001 ETH</p>
                    </a>
                    <CrossmintPayButton 
                        clientId="a42d8e00-f8ee-4dad-8e2a-c78235a53de9"
                        mintConfig='{"type":"erc-721","totalPrice":"0.005", "price": "0.005", quantity: "1"}'
                        mintTo="0x4dacC710CC1419Eb383a558C40a5d95630eb175e"
                        environment="staging"/>

                    <a href="#" className="group" onClick={mintNft}>
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <Image width={280} height={320} src={TigerOne} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">Tiger Two</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">0.0001 ETH</p>
                    </a>

                    <a href="#" className="group" onClick={mintNft}>
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <Image width={280} height={320} src={TigerTwo} alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">Tiger Three</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">0.0001 ETH</p>
                    </a>

                    <a href="#" className="group" onClick={mintNft}>
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <Image width={280} height={320} src={TigerThree} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">Tiger Three</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">0.0001 ETH</p>
                    </a>

                </div>
            </div>
        </div>
        </>
    )
}

export default Page