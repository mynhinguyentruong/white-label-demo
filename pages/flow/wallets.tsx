import Layout from "../../components/Layout"

import Image from "next/image"



function Page({data}) { // data is an array
    return (
        <>
            <Layout/>
            {data.length > 0 ? (
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="font-bold mb-10 text-3xl pb-10">My NFTs</h2>
                
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {data.map(nft => (
                           
                            <a href={`/flow/wallets/${nft.locator}`} className="group"  key={nft.mintHash}>
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <Image width={280} height={320} src={nft.metadata.image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                                </div>
                                <h3 className="mt-4 text-sm font-bold text-gray-700">{nft.metadata.name}</h3>
                                <p className="mt-1 text-xs text-gray-900 truncate">mintHash: {nft.locator}</p>
                            </a>
                            
                        ))}

                    </div>
                </div>
            ) : (<div className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6">
               <h1 className="font-bold text-5xl my-3">
                    No NFTs Found
               </h1>
               <p>We couldn't find anything in your collection</p>
               <p>Visit <a href="/flow/collections" className="hover:text-green-700 text-green-400">Collections </a> to buy NFT on our site</p>
            </div>)}
        </>
    )
}

export async function getServerSideProps(context) {

    const res = await fetch("https://staging.crossmint.io/api/v1-alpha1/wallets/sol:9Q4uKgXZNo6pjJq5XDMToyGqeM4BgRTdRcg4Puixcivq/nfts", {
        headers: {
            'Content-Type': 'application/json',
            'X-PROJECT-ID': process.env.CROSSMINT_X_PROJECT_ID,
            'X-CLIENT-SECRET': process.env.CROSSMINT_X_CLIENT_SECRET
        }
    })
    const data = await res.json()

    return {
      props: {data}, // will be passed to the page component as props

    }
  }

export default Page