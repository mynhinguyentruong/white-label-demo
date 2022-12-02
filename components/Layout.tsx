import Image from "next/image"
import CrossmintLogo from "../public/brand-logo.png"

import { useRouter } from 'next/router'


function Layout() {
    const router = useRouter()

    
    return (
        <>
            <div className="relative bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="https://www.crossmint.io/">
                                <span className="sr-only">Your Company</span>
                                <Image className="" src={CrossmintLogo} width={100} height={80} alt="Brand Logo"/>
                            </a>
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
                            <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                            <span className="sr-only">Open menu</span>
                            {/* <!-- Heroicon name: outline/bars-3 --> */}
                            
                            </button>
                        </div>
            <nav className="hidden space-x-10 md:flex">
                <div className="relative">
                {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
                    <button type="button" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                    <a href="/flow/1">Shop</a>
                   
                    </button>
                </div>
                <div className="relative">
                {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
                    <button type="button" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                    <a href="/flow/collections">Stores</a>
                   
                    </button>
                </div>
                <div className="relative">
                {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
                <button type="button" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                    <a href="/flow/collections">NFTs</a>
                   
                </button>
                </div>
               

                <div className="relative">
                {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
                <button onClick={() => router.push('/user/collection', undefined, {shallow: true})} type="button" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                    <span>NFT Wallet</span>
                   
                    
                </button>
                </div>
                <a href="https://docs.crossmint.io/docs/white-label-api-info" className="text-base font-medium text-gray-500 hover:text-gray-900">News</a>

                <div className="relative">
                {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
                <button type="button" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                    <span>Support</span>
                   
                    
                </button>

               
                
                </div>
            </nav>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <a href="/flow/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Nhi</a>
                <a href="/flow/login" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Log out</a>
            </div>
            </div>
        </div>

        {/* <!--
            Mobile menu, show/hide based on mobile menu state.

            Entering: "duration-200 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        --> */}
        <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                    <Image className="w-2" src={CrossmintLogo} width={70} height={70} alt="Your Company" />
                <div className="-mr-2">
                    <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    {/* <!-- Heroicon name: outline/x-mark --> */}
                    
                    </button>
                </div>
                </div>
                <div className="mt-6">
                <nav className="grid gap-y-8 z-50 bg-white-900">

                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    {/* <!-- Heroicon name: outline/squares-2x2 --> */}
                    
                    <span className="ml-3 text-base font-medium text-gray-900">Stores</span>
                    </a>

                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    {/* <!-- Heroicon name: outline/arrow-path --> */}
                    
                    <span className="ml-3 text-base font-medium text-gray-900">NFTs</span>
                    </a>
                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    {/* <!-- Heroicon name: outline/arrow-path --> */}
                    
                    <span className="ml-3 text-base font-medium text-gray-900">NFT Wallet</span>
                    </a>
                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    {/* <!-- Heroicon name: outline/arrow-path --> */}
                    
                    <span className="ml-3 text-base font-medium text-gray-900">Support</span>
                    </a>
                </nav>
                </div>
            </div>
           
            </div>
         
        </div>
            </div>
            
        </>
    )
}


export default Layout