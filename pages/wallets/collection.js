import Image from 'next/image'
import { useState } from 'react'

function Collection({ nfts }) {

    const [showModal, setShowModal] = useState(false);
    const [body, setBody] = useState({
        chain: "solana",
        tokenId: 0,
        fromAddress: "D6bDg4DcCpsprQEmnUdcWhpkj2pMDxEJa615oyvS3sQL",
        toAddress: "0x3AaF856286212779F169F3DcF908AE1d3349649f",
        tokenMintAddress: "E7qT2wTeWBqEXhhEBtPSBj3FNP69TMBwgDddwJywFqdb"
    });

    async function exportNFT() {
        const response = await fetch("/wallets/transfer", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'X-PROJECT-ID': process.env.CROSSMINT_X_PROJECT_ID,
                'X-CLIENT-SECRET': process.env.CROSSMINT_X_CLIENT_SECRET
            }
        });
        // if status: pending-verfication -> do something
    };
    
    return (
        <>
            <div className='flex justify-center'>
                <div className='rounded-lg shadow-lg bg-white max-w-md m-3'>
                    <Image src={nfts[0].metadata.image} width={500} height={500} />
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Meta data</h5>
                        {nfts[0].metadata.attributes?.map(attribute => (
                            <>
                            <p className="text-gray-700 text-base mb-4">Trait Type: {attribute.trait_type}</p>
                            <span className="text-gray-700 text-base mb-4">Value: {attribute.value}</span>
                            </>
                        ))}
                        <button 
                            onClick={() => setShowModal(true)}
                            className='text-xl inline-block bg-transparent hover:bg-green-500 text-green-700 font-bold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'
                        >Export
                        </button>
                    </div>
                </div>
                
                
            </div>
     
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Export Your Clients NFT to to external wallet
                            </h3>
                            <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="bg-gray-200 text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-aut bg-gray-200">
                    
                        <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                            
                            <div className="col-span-6">
                                <label htmlFor="fromAddress" className="block text-sm font-medium text-gray-700">
                                From Address
                                </label>
                                <input
                                type="text"
                                name="fromAddress"
                                id="fromAddress"
                                value={body.fromAddress}
                                autoComplete="fromAddress"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="toAddress" className="block text-sm font-medium text-gray-700">
                                To New Address
                                </label>
                                <input
                                type="text"
                                name="toAddress"
                                id="toAddress"
                                value={body.toAddress}
                                autoComplete="toAddress"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="tokenMintAddress" className="block text-sm font-medium text-gray-700">
                                Contract Address
                                </label>
                                <input
                                type="text"
                                name="tokenMintAddress"
                                id="tokenMintAddress"
                                value={body.tokenMintAddress}
                                autoComplete="tokenMintAddress"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="chain" className="block text-sm font-medium text-gray-700">
                                Chain
                                </label>
                                <select
                                id="chain"
                                name="chain"
                                autoComplete="chain"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                <option>Solana</option>
                                <option>Ethereum </option>
                                <option>Polygon</option>
                                </select>
                            </div>
                            
                    
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                            onClick={exportNFT}
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                            Confirm Export
                            </button>
                        </div>
                        </div>
                                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                    
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}

      </>
    )
    
}

export async function getStaticProps() {
    const res = await fetch('https://staging.crossmint.io/api/v1-alpha1/wallets/sol:D6bDg4DcCpsprQEmnUdcWhpkj2pMDxEJa615oyvS3sQL/nfts', {
        headers: {
            'Content-Type': 'application/json',
            'X-PROJECT-ID': process.env.CROSSMINT_X_PROJECT_ID,
            'X-CLIENT-SECRET': process.env.CROSSMINT_X_CLIENT_SECRET
          }
    })
    const data = await res.json();
    const {nfts} = data;

    return {
      props: { nfts }, // will be passed to the page component as props
      revalidate: 60
    }
  }

export default Collection

