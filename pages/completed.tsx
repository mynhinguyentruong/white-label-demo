import NFTImage from "../public/nft-image.png"
import Image from "next/image";

export default function Completed() {
    return (
        <CheckoutLayoutContainer>
            <h2 className="mt-10 mb-6 font-bold text-center text-gray-700 text-3xl">Completed!</h2>
            <div className="flex justify-center">
                <div className="min-w-[175px] min-h-[175px] max-w-[175px] max-h-[175px] sm:max-w-[116px] sm:min-w-[116px] sm:min-h-[116px] flex justify-center items-center sm:max-h-[116px] bg-white">
                    <div
                        className="w-full h-full max-w-full max-h-full overflow-hidden relative flex items-center justify-center"
                    >
                        <Image
                            src={NFTImage}
                            className={`object-cover w-full h-full rounded-lg`}

                            alt={"NFT"}
                        />
                    </div>
                </div>
            </div>
            <div role="purchase-summary-wrapper" className="w-full p-7 mb-7">
                <h2 className="my-5">Purchase summary</h2>
                <KeyValueComponent
                    id={"item-name"}
                    title="Item name"
                    value="NFT"
                />

                    <KeyValueComponent
                        title={`Item ID`}
                        value={`#1`}
                    />

                <KeyValueComponent title={`Item price`} value={"0.001"} />
            </div>
            <div className="flex justify-center items-center">
            <a
                className="text-sm text-link text-green-500 hover:underline hover:animate-bounce align-center items-center justify-center"
                target="_blank"
                rel="noreferrer"
                href="/flow/wallets"
            >
                <button className='px-28 py-3 rounded outline'>Open my wallet</button>

            </a>
            </div>

        </CheckoutLayoutContainer>

    )
}

export  function KeyValueComponent({ title, value, size = "sm", id }) {
    const sizeClass = size === "sm" ? "text-sm" : "text-[18px]";

    return (
        <div className="flex justify-between mb-2">
            <p id={id ? id + "-title" : undefined} className={`mr-2 text-custom-text-primary ${sizeClass}`}>
                {title}
            </p>
            <p id={id ? id + "-value" : undefined} className={`text-custom-text-secondary text-end ${sizeClass}`}>
                {value}
            </p>
        </div>
    );
}

export const CheckoutLayoutContainer = ({children, ...props}) => (
    <div
        className="flex flex-col w-full max-w-full rounded-lg bg-custom-card-fill xs:items-center"

        {...props}
    >
        {children}
    </div>
);