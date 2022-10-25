import Collection from "../components/Collection"

function CheckoutPage({  }) {
    // Render data...
    return (
        <div  className="flex-col w-full h-full justify-center items-center">
            <h1 className="text-3xl font-bold">Available Collections</h1>
            <div className="flex overflow-x-scroll hover:overflow-scroll space-x-12 bg-gray-200 p-10">
                <Collection title={"Collection Name"} price={"0.0001"} />
                <Collection title={"Collection Name"} price={"0.0001"} />
                <Collection title={"Collection Name"} price={"0.0001"} />
                <Collection title={"Collection Name"} price={"0.0001"} />
                <Collection title={"Collection Name"} price={"0.0001"} />
                <Collection title={"Collection Name"} price={"0.0001"} />
                <Collection title={"Collection Name"} price={"0.0001"} />
                <Collection title={"Collection Name"} price={"0.0001"} />
                <Collection title={"Collection Name"} price={"0.0001"} />
                <Collection title={"Collection Name"} price={"0.0001"} />
            </div>
            {/* <a href={data.checkoutUrl}>
                <button className="text-xl bg-transparent hover:bg-green-500 text-green-700 font-bold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">Checkout</button>
            </a> */}
            <h1 className="text-3xl font-bold">Current User Wallet</h1>
            <div>
                <h3>userId: {"..."}</h3>
                <h3>No NFTs Found</h3>
                <p>We couldn't find anything in your wallet</p>
            </div>
        </div>
    )
  }



// export async function getServerSideProps() {

    // fetch collections available

    // const res = await fetch(`https://staging.crossmint.io/api/v1-alpha1/checkout/mint`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         clientId: "e844f3de-e3f9-4fcb-abc6-15e1bff5e6d7",
    //         userId: "6346b401fdf86137e454caac",
    //         emailTo: "nhi@paella.dev",
    //         mintTo: "D6bDg4DcCpsprQEmnUdcWhpkj2pMDxEJa615oyvS3sQL",
    //         paymentMethod: "fiat",
    //         mintConfig: {
    //             type: "candy-machine",
    //             totalPrice: "0.0001",
    //             environment: "staging"
    //         },
    //         collection: {
    //             title: "whitelabel update collection test"
    //         }
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-PROJECT-ID': process.env.CROSSMINT_X_PROJECT_ID,
    //       'X-CLIENT-SECRET': process.env.CROSSMINT_X_CLIENT_SECRET
    //     }
    // })
    // const data = await res.json()

    // return {
    //   props: { data }, // will be passed to the CheckoutPage component as props
    // }
//}

export default CheckoutPage
