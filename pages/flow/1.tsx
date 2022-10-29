import Image from "next/image"
import CrossmintLogo from "../../public/crossmint-logo.svg"

import { useRouter } from 'next/router'
import Layout from "../../components/Layout"


function Page() {
    const router = useRouter()

    
    return (
        <>
            <Layout/>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                <h1>Hi Nhi</h1>
            </div>
        </>
    )
}


export default Page