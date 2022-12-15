import Image from "next/image"
import CrossmintLogo from "../../public/crossmint-logo.svg"

import { useRouter } from 'next/router'
import Link from "next/link"
import Layout from "../../components/Layout"
import {CrossmintSolanaWalletAdapter} from "@crossmint/connect"




function Page() {
    const router = useRouter()

    
    return (
        <>
            <Layout/>

          
<div className="">
  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  <h2 className="font-bold mb-10 text-3xl pb-10">Products</h2>

    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image width={280} height={320} src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a>

      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image width={280} height={320} src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a>

      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image width={280} height={320} src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
      </a>

      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image width={280} height={320} src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a>

   
    </div>
  </div>
</div>

        
        </>
    )
}


export default Page