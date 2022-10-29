import Image from "next/image"
import CrossmintLogo from "../public/crossmint-logo.svg"

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
                                <Image className="" src={CrossmintLogo} width={30} height={30} alt="Brand Logo"/>
                            </a>
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
                            <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                            <span className="sr-only">Open menu</span>
                            {/* <!-- Heroicon name: outline/bars-3 --> */}
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            </button>
                        </div>
            <nav className="hidden space-x-10 md:flex">
                <div className="relative">
                {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
                <button type="button" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                    <a href="/flow/collections">Collections</a>
                   
                </button>
                </div>

                <div className="relative">
                {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
                <button onClick={() => router.push('/flow/wallets', undefined, {shallow: true})} type="button" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
                    <span>My Wallet</span>
                   
                    
                </button>
                </div>
                <a href="https://docs.crossmint.io/docs/white-label-api-info" className="text-base font-medium text-gray-500 hover:text-gray-900">Docs</a>

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
                    <Image className="w-1" src={CrossmintLogo} width={30} height={30} alt="Your Company" />
                <div className="-mr-2">
                    <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    {/* <!-- Heroicon name: outline/x-mark --> */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                </div>
                <div className="mt-6">
                <nav className="grid gap-y-8">
                    

                

                    

                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    {/* <!-- Heroicon name: outline/squares-2x2 --> */}
                    <svg className="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">Integrations</span>
                    </a>

                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    {/* <!-- Heroicon name: outline/arrow-path --> */}
                    <svg className="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">Automations</span>
                    </a>
                </nav>
                </div>
            </div>
            <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Help Center</a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Guides</a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Events</a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Security</a>
                </div>
                <div>
                <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign uppp</a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">Nhi</a>
                </p>
                </div>
            </div>
            </div>
         
        </div>
            </div>
            
        </>
    )
}


export default Layout