import Layout from "../../components/Layout"

function Page({data}) {
    return (
        <>
            <Layout/>
            {data.length > 0 ? <h1>There are NFT</h1> : (<div className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6">
               <h1 className="font-bold text-5xl my-3">
                    No NFTs Found
               </h1>
               <p>We couldn't find anything in your collection</p>
               <p>Visit <a href="/flow/collections" className="hover:text-green-700 text-green-400">Collections </a> to buy NFT on our site</p>
            </div>)}
        </>
    )
}

export async function getStaticProps(context) {

    const res = await fetch("https://staging.crossmint.io/api/v1-alpha1/wallets/eth:0x4dacC710CC1419Eb383a558C40a5d95630eb175e/nfts", {
        headers: {
            'Content-Type': 'application/json',
            'X-PROJECT-ID': process.env.CROSSMINT_X_PROJECT_ID,
            'X-CLIENT-SECRET': process.env.CROSSMINT_X_CLIENT_SECRET
        }
    })
    const data = await res.json()

    return {
      props: {data}, // will be passed to the page component as props
      revalidate: 10
    }
  }

export default Page