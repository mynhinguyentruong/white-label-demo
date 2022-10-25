import { useState } from 'react'
import styles from '../styles/Home.module.css'


function Modal() {
    const [showModal, setShowModal] = useState(false);

    const [body, setBody] = useState({

    })

    async function registerCollection(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    try {
      const response = await fetch('/collections/register', {
        method: 'POST',
        body: JSON.stringify({
          args: {candyMachineId: "8fGujzW6LFnKwPMvZDeEgVhTM1YXqBdbnqnnGZ49vEyB"},
          metadata: {
              title: "New Collection created for whitelabel test",
              description: "yoooooooooooooo",
              imageUrl: "https://nftstorage.link/ipfs/bafybeibgiu46doec6acc7tcoavyud3kpsd44tszkivenwnseer72iq2ob4/1.png",
              social: {twitter: "@crossmint", discord: "@discord"}
          },
          chain: "solana",
          contractType: "candy-machine"
        }),
        headers: {
          'Content-Type': 'application/json',
          'X-PROJECT-ID': process.env.CROSSMINT_X_PROJECT_ID,
          'X-CLIENT-SECRET': process.env.CROSSMINT_X_CLIENT_SECRET
        }
      });
      const data = await response.json();
      // example of response: {
      //   "collectionId": "e844f3de-e3f9-4fcb-abc6-15e1bff5e6d7"
      // }
    } catch(err) {
      throw(err)
    }
    
  }
    return (
        <>
        <a href="#exampleModal" className={styles.card}>
            <h2>Register &rarr;</h2>
            <p>Register and update your NFT collection with Crossmint</p>
            <button 
              type="button" 
              onClick={() => setShowModal(true)}
              className="
              mt-3
              px-6
              py-2.5
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              bg-white
              hover:bg-blue-700 hover:shadow-lg hover:text-white
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out" 
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal"
              >
                Launch demo modal
            </button>
          </a>
        {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Register your NFT collection with Crossmint
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-gray-200 text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-aut bg-gray-200">
                      <form onSubmit={registerCollection}>
                        <div className="overflow-hidden shadow sm:rounded-md">
                          <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                              
                              <div className="col-span-6">
                                <label htmlFor="collection-title" className="block text-sm font-medium text-gray-700">
                                  Collection Title
                                </label>
                                <input
                                  type="text"
                                  name="collection-title"
                                  id="collection-title"
                                  value="New Collection created for whitelabel test"
                                  autoComplete="collection-title"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                              <div className="col-span-6">
                                <label htmlFor="collection-description" className="block text-sm font-medium text-gray-700">
                                  Collection Description
                                </label>
                                <input
                                  type="text"
                                  name="collection-description"
                                  id="collection-description"
                                  value="a description"
                                  autoComplete="collection-description"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
    
                              <div className="col-span-6">
                                <label htmlFor="image-url" className="block text-sm font-medium text-gray-700">
                                Collection Image URL
                                </label>
                                <input
                                  type="text"
                                  name="image-url"
                                  id="image-url"
                                  value="https://nftstorage.link/ipfs/bafybeibgiu46doec6acc7tcoavyud3kpsd44tszkivenwnseer72iq2ob4/1.png"
                                  autoComplete="email"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
    
                              <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="contract-type" className="block text-sm font-medium text-gray-700">
                                  Contract Type
                                </label>
                                <select
                                  id="contract-type"
                                  name="contract-type"
                                  autoComplete="country-name"
                                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                  <option>Candy Machine</option>
                                  <option>Ethereum ERC721</option>
                                  <option>Thirdweb</option>
                                </select>
                              </div>
                              
                              <div className="col-span-6">
                                <label htmlFor="candy-machine" className="block text-sm font-medium text-gray-700">
                                  Candy Machine ID
                                </label>
                                <input
                                  type="text"
                                  name="candy-machine"
                                  id="candy-machine"
                                  value="8fGujzW6LFnKwPMvZDeEgVhTM1YXqBdbnqnnGZ49vEyB"
                                  autoComplete="candy-machine"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                  Twitter
                                </label>
                                <input
                                  type="text"
                                  name="twitter"
                                  id="twitter"
                                  value="@twitter-name"
                                  autoComplete="given-name"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
    
                              <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="discord" className="block text-sm font-medium text-gray-700">
                                  Discord
                                </label>
                                <input
                                  type="text"
                                  name="discord"
                                  value="@discord-name"
                                  id="discord"
                                  autoComplete="family-name"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                    
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Register collection
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
    )
}

export default Modal