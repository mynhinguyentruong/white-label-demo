import { useRouter } from 'next/router'
import Image from 'next/image'

function Page({data}) {
    const router = useRouter()
    const { mintHash } = router.query
    console.log(mintHash)
    const currentNFT = data?.find(nft => {
        console.log("Nft locator",nft.locator)
        return nft.locator === mintHash
    })
    console.log(currentNFT)
    return (
        <div className="bg-white">
  <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
      <p className="mt-4 text-gray-500">{currentNFT?.metadata.description}</p>

      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        {currentNFT?.metadata.attributes.map(attribute => (
            <div className="border-t border-gray-200 pt-4" key={attribute.trait_type}>
                <dt className="font-medium text-gray-900">{attribute.trait_type}</dt>
                <dd className="mt-2 text-sm text-gray-500">{attribute.value}</dd>
            </div>
        ))}
        
      </dl>
    </div>
    <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 my-10 p-10" >
      <Image width={500} height={500} src={currentNFT?.metadata.image} alt="NFT Image" className="rounded-lg bg-gray-100"/>
    </div>
  </div>
</div>

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
    console.log(data)

    return {
      props: {data}, // will be passed to the page component as props

    }
  }

export default Page