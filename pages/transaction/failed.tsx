import Link from "next/link"

export default function Fail() {
    return (
        <div className="flex flex-wrap justify-center align-center py-28">
            <h1 className="">
                Minting failed. Go back to my 
                <Link href="/user/collection"><span className="text-green-500 underline cursor-pointer"> wallet</span></Link>

            </h1>
        </div>
    )
}