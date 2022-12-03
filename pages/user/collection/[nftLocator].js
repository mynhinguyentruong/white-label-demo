import { useRouter } from 'next/router'
import Image from 'next/image'

import { QrCodeIcon } from "@heroicons/react/24/outline"

import { useState } from "react"

import Layout from "../../../components/Layout"

function Page({ data }) {

    const [showQRModal, setShowQRModal] = useState(false);

    const router = useRouter()
    const { nftLocator } = router.query
    console.log(nftLocator)
    const currentNFT = data?.find(nft => {
        console.log("Nft locator",nft.locator)
        return nft.locator === nftLocator
    })
    const { chain, metadata, mintHash } = currentNFT

    return (
        <>
        <Layout />
        <div className="relative flex flex-1 w-full py-10">
            <div className="flex justify-center flex-1 w-full item-start">
                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-x-[70px] max-w-[1300px]">
                    <div className="flex flex-col items-center justify-start py-10">
                        <Image src={metadata.image} className="w-full rounded-xl" alt={metadata.name} width={500}
                            height={500} priority 
                            // placeholder='blur' blurDataURL='' 
                            />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full mt-8">
                        <div className="flex justify-between w-full">
                            <h1 className="mr-2 text-3xl font-bold">{metadata?.name || "NFT"}</h1>
                            <div className="flex items-center gap-x-2">
                                <button className='rounded px-7 py-2 bg-transparent border border-gray-500 enabled:hover:bg-custom-tertiary-hover enabled:hover:text-green-500'>Export</button>
                                <button
                                    id="qr-button"
                                    tiny="true"
                                    type="tertiary"
                                    onClick={() => setShowQRModal(true)}
                                    className="px-[28px] py-2 border border-gray-500 rounded enabled:hover:text-green-500"
                                >
                                    <QrCodeIcon className="w-6 h-6" />
                                </button>
                               
                            </div>
                        </div>

                        {/* {metadata && (
                            <p className="self-start text-[#6E6D79] py-4">
                                {metadata?.name}
                            </p>
                        )} */}

                        {metadata?.description && (
                            <p className="self-start text-[#6E6D79] pt-4">{metadata?.description}</p>
                        )}

                        {metadata?.attributes &&
                            metadata.attributes.length > 0 && (
                                <>
                                    <h2 className="self-start mt-12 mb-5 text-xl font-bold">Attributes</h2>

                                    <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
                                        {metadata.attributes?.map((x) => (
                                            <div key={x.trait_type} className="flex w-full flex-col items-center justify-center border-[#CBD1DC] border rounded-lg min-h-[85px] px-2 py-4">
                                                <p className="overflow-hidden font-bold text-center overflow-ellipsis mb-0.5">{x.value}</p>
                                                <p className="text-sm text-center">{x.trait_type}</p>
                                            </div>
                                        
                                        ))}
                                    </div>
                                </>
                            )}

                        <h2 className="self-start mt-12 text-xl font-bold mb-7">Details</h2>

                        <div className="grid grid-cols-2 w-full border-b text-sm border-[#CBD1DC] pb-4 mb-4">
                            <p className="text-secondary-text">
                                {chain === 'solana' ? "Mint Hash" : "TokenID"}
                            </p>
                            <p className="text-[#424852] truncate">
                                {chain === 'solana' ? mintHash : tokenId}
                            </p>
                        </div>

                        {/* {chain === 'ERC_1155' && (
                            <div className="grid grid-cols-2 w-full border-b text-sm border-[#CBD1DC] pb-4 mb-4">
                                <p className="text-[#67797F]">Balance</p>
                                <p className="text-[#424852] truncate">{tokenInformation.balance}</p>
                            </div>
                        )} */}

                        {/* {chain !== 'solana' && (
                            <div className="grid grid-cols-2 w-full border-b text-sm border-[#CBD1DC] pb-4 mb-4">
                                <p className="text-secondary-text">Contract</p>
                                <p className="text-[#424852] truncate">{address}</p>
                            </div>
                        )} */}

                        <div className="grid w-full grid-cols-2 text-sm">
                            <p className="text-secondary-text">Blockchain</p>
                            <p className="text-[#424852]">{chain.charAt(0).toUpperCase() + chain.slice(1)}</p>
                        </div>

                        {chain === 'solana' && (
                            <a
                                className="self-start mt-8 text-sm text-link text-green-500 hover:underline hover:animate-bounce"
                                href={`https://www.solaneyes.com/address/${mintHash}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className='px-10 py-3 rounded outline'>View on explorer</button>
                                
                            </a>
                        )}
                    </div>
                </div>
            </div>
            {/* <ExportDisplayWrapper
                show={showExport}
                exportTransaction={exportTransaction}
                nftLocator={nftLocator}
                canVerifyOTP={canVerifyOTP}
                onProcessFinished={onProcessFinished}
                onClose={() => setShowExport(false)}
            /> */}

            {/* <NFTQRCode nftLocator={nftLocator} showQRModal={showQRModal} setShowQRModal={setShowQRModal} /> */}
        </div>
        </>
    )
}

export default Page


export async function getServerSideProps(context) {
    // https://staging.crossmint.io/api/v1-alpha1/wallets/sol:9Q4uKgXZNo6pjJq5XDMToyGqeM4BgRTdRcg4Puixcivq/nfts
    const res = await fetch("https://staging.crossmint.io/api/v1-alpha1/wallets/sol:5kmhoBPJmuM5ZF8nB62rhR9PrLAxm6UMzFmU85kjDNjt/nfts", {
        headers: {
            'Content-Type': 'application/json',
            'X-PROJECT-ID': process.env.CROSSMINT_X_PROJECT_ID,
            'X-CLIENT-SECRET': process.env.CROSSMINT_X_CLIENT_SECRET
        }
    })
    const data = await res.json()

    return {
      props: { data }, // will be passed to the page component as props

    }
}
