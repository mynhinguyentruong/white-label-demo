import Layout from "../../components/Layout"

function Page() {
    return (
        <>
        <Layout/>
        <div className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6">
               <h1 className="font-bold text-5xl my-3">
                    No Collections Found
               </h1>
               <p>We couldn't find anything in your collection</p>
               <p>Visit <a href="/flow/collections" className="hover:text-green-700 text-green-400">Collections </a> to buy NFT on our site</p>
            </div>
        </>
    )
}

export default Page