import CrossmintLogo from "../../public/logo-text.png"
import Image from "next/image"
import Link from "next/link";

import { useState } from "react"

function Page() {
    const [email, setEmail] = useState("")

    return (
        <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 py-12">
          <div>
            <div className="w-full flex justify-center">
            <Image
              
              src={CrossmintLogo}
              alt="Your Company"
              width={150}
              height={100}
            />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Bring your own auth to sign your user in {email}
            </p>
           
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="h-10 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                
                />
              </div>
              
            </div>
            <div>
            <Link href="/flow/1">
              <button
                type="button"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </Link>
            </div>
          </form>
          <hr/>
        </div>
      </div>
        </>
    )
}

export default Page