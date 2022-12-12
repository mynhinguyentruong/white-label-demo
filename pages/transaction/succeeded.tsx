import Image from "next/image";
import {ReactNode, useEffect, useState} from "react";
import NFTImage from "../../public/nfts-animation.gif";
import {PhotoIcon} from "@heroicons/react/24/solid";
import {router} from "next/client";


export default function Success() {

    const [isTimedOut, setIsTimedOut] = useState(false)
    const [countdown, setCountdown] = useState(5);

    function getImage() {
        return <Image src={NFTImage} alt="Minting" width={200} height={125}/>;
    }

    function getIcon() {
        return <PhotoIcon className="w-5 mr-0 text-custom-stroke-focus"/>;

    }

    useEffect(() => {

        if (countdown >= 1) {
            setTimeout(() => {
                setCountdown((prevState) => prevState - 1)
            }, 1000)
        }
        else {
            router.push("/completed")
        }
    })

    return (
        <div className="flex flex-col items-center justify-start w-full pt-0 overflow-x-hidden xs:pt-32">
            <div className="w-full">
                <div className="flex items-center justify-center mb-14 pt-6 min-h-[141px]">{getImage()}</div>
                <CheckoutLayoutContainer className="px-4 py-8 mb-3">
                    <div className="flex items-center justify-between w-full mb-5">
                        <h2 className="mb-0 text-lg font-medium text-custom-text-secondary">
                            Almost there
                        </h2>
                        <span>Estimated time</span>
                    </div>
                    <div className="w-full mb-5">
                        <ProgressBar/>
                    </div>
                    <div className="w-full">
                        <p className="text-right text-xs">
                            ~1 minutes left
                        </p>
                    </div>
                </CheckoutLayoutContainer>
                <CheckoutLayoutContainer className="px-4 py-8">
                    <div className="flex items-center justify-between w-full mb-5">
                        <h3 className="font-medium text-custom-text-secondary font-semibold text-custom-text-primary text-base mb-3">Order
                            status</h3>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div
                                className="p-2 rounded bg-transparent border border-custom-stroke-focus w-[40px] h-[40px] flex justify-center items-center mr-5">
                                {getIcon()}
                            </div>
                            <div>
                                <p className="text-custom-text-primary">Fulfilling order</p>
                                <p className="text-xs text-custom-text-secondary">Purchasing order on blockchain</p>
                            </div>
                        </div>
                        <div>

                            <div role="status">
                                <svg aria-hidden="true"
                                     className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>

                        </div>
                    </div>
                </CheckoutLayoutContainer>
            </div>


            <div className="mt-6 mb-24">
                Powered by mybrand
            </div>
        </div>
    )


}

export const CheckoutLayoutContainer = ({children, className, ...props}) => (
    <div
        className={classNames(
            "flex flex-col w-full max-w-full rounded-lg bg-custom-card-fill xs:items-center",
            className
        )}
        {...props}
    >
        {children}
    </div>
);

export function classNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

export function ProgressBar() {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const numberOfIterations = 10;
    const duration = 100000;
    const loadingTransitionDuration = duration / numberOfIterations;

    return (
        <div className="relative w-full bg-gray-200 rounded">
            <div style={{width: "100%"}} className="absolute top-0 h-3 rounded shim-red "></div>
        </div>
    )
}

export function Loader({color, size}) {
    return (
        <span className="animate-fade">
            <div
                className={`border-t-transparent ${
                    size ? `w-${size} h-${size}` : "w-6 h-6"
                } border-2 border-solid rounded-full animate-spin ${
                    color ? color : "dark:border-white border-custom-text-primary"
                } `}
            />
        </span>
    );
}