import Layout from "../../components/Layout";
import CollectionImage from "../../public/spring-collection.png";
import TigerOne from "../../public/summer-collection.png";
import TigerThree from "../../public/tiger-4.png";
import TigerTwo from "../../public/winter-collection.png";
import Image from "next/image";

function Page() {
  function saveCreditCardNumberToClipBoard() {
    const stringNumber = "4242 4242 4242 4242";
    navigator.clipboard.writeText(stringNumber);
  }
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
      <div className="">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="font-bold  text-3xl ">NFT Collections</h2>
          <p className="mb-10 italic">Available NFT Collections To Purchase</p>

          <div className="mb-4 space-y-3 italic">
            <p>
              This is a test NFT collection using Whitelabel checkout to allow
              for crosschain and fiat purchases.
            </p>
            <p>
              To buy with credit card, please use the credit card number below
              and fill all other information randomly:{" "}
            </p>
            <p onClick={saveCreditCardNumberToClipBoard} className="font-bold underline cursor-pointer">4242 4242 4242 4242

            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-16">
            <a href="#" className="group" onClick={mintNft}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  width={400}
                  height={420}
                  src={CollectionImage}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Spring Collection</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                0.0001 ETH
              </p>
            </a>

            <a href="#" className="group" onClick={mintNft}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  width={400}
                  height={420}
                  src={TigerOne}
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Summer Collection</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                0.0001 ETH
              </p>
            </a>

            <a href="#" className="group" onClick={mintNft}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  width={400}
                  height={420}
                  src={TigerTwo}
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Winter Collection</h3>
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
