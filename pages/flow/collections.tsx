import Layout from "../../components/Layout";
import CollectionImage from "../../public/collection-image.png";
import TigerOne from "../../public/tiger-2.png";
import TigerTwo from "../../public/tiger-3.png";
import TigerThree from "../../public/tiger-4.png";
import Image from "next/image";

function Page() {
  async function mintNft() {
    try {
      const res = await fetch(
        `https://staging.crossmint.io/api/v1-alpha1/checkout/mint`,
        {
          method: "POST",
          body: JSON.stringify({
            clientId: "aa407fba-284b-4f30-92cc-c6204de1ca22",
            userId: "2",
            emailTo: "nhi@paella.dev",
            paymentMethod: "fiat",
            price: "0.0001",
            mintArgs: {
              type: "erc-1155",
              totalPrice: "0.0001",
              environment: "staging",
              _id: "1",
              to: "adfaf",
              _count: 1,
            },
            collection: {
              title: "Cool",
              photo:
                "https://gateway.ipfscdn.io/ipfs/QmPbHFfbQkCcoKEk3hRoAqSqLs45KdjAnSP1siq5ToLxVE/collection-image.png",
              description:
                "La préservation de la pointe du Cap Ferret a besoin de support financi…",
            },

            redirect: {
              continue: "http://localhost:3000/transaction/succeeded",
              cancel: "http://localhost:3000/transaction/failed",
            },
          }),
          headers: {
            "Content-Type": "application/json",
            "X-PROJECT-ID": process.env.CROSSMINT_X_PROJECT_ID,
            "X-CLIENT-SECRET": process.env.CROSSMINT_X_CLIENT_SECRET,
          },
        }
      );
      const data = await res.json();
      console.log("checkout url", data.checkoutUrl);
      window.open(data.checkoutUrl, "popup", "width=600,height=900");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Layout />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="font-bold  text-3xl ">NFT Collections</h2>
          <p className="mb-10 pb-10 italic">
            Available NFT Collections To Purchase
          </p>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" className="group" onClick={mintNft}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  width={280}
                  height={320}
                  src={CollectionImage}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Tiger One</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                0.0001 ETH
              </p>
            </a>

            <a href="#" className="group" onClick={mintNft}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  width={280}
                  height={320}
                  src={TigerOne}
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Tiger Two</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                0.0001 ETH
              </p>
            </a>

            <a href="#" className="group" onClick={mintNft}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  width={280}
                  height={320}
                  src={TigerTwo}
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Tiger Three</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                0.0001 ETH
              </p>
            </a>

            <a href="#" className="group" onClick={mintNft}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  width={280}
                  height={320}
                  src={TigerThree}
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Tiger Three</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                0.0001 ETH
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
