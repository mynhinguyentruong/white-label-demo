import Link from "next/link"

export default function Success() {
    return (
    
        <div className="flex flex-wrap justify-center align-center pt-48 text-wrap">
            <h1 className="">
                Minted Successfully. Open my  
                {" "}<Link href="/user/collection"><span className="text-green-500 underline cursor-pointer">wallet</span></Link>

            </h1>
        </div>
    )
}