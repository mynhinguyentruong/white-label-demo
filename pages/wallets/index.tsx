import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Wallet() {

    const [wallet, setWallet] = useState("")
    const [chain, setChain] = useState("solana")
    const [userId, setUserId] = useState("")

    console.log(userId)
    async function createNewWallet() {
        try {
            console.log(userId)
            const response = await fetch("/wallets/create", {
                method: 'POST',
                body: JSON.stringify({
                    userId,
                    chain
                }),
                headers: {
                  'Content-Type': 'application/json',
                  'X-PROJECT-ID': process.env.CROSSMINT_X_PROJECT_ID,
                  'X-CLIENT-SECRET': process.env.CROSSMINT_X_CLIENT_SECRET
                }
            });
            const data = await response.json();
            setWallet(data)
            // data: {"chain":"solana","publicKey":"CJKr2xziPk2ce6NiWScQ5WemuScwsk4AdjxmEei9hhyR"}
        } catch(err) {
            throw(err)
        }
    }

    return (
        <>
            <h3>
                    Ideally, you would want this unique identifier (userId) to be associate with your client's account

            </h3>
            <h4>With this unique id, you can check the content of the wallet associated with this userId</h4>
            <div  className="flex h-screen justify-evenly items-center">
                
                <div className="flex">
                    <button className="" onClick={() => setUserId(uuidv4())}>Generate random userId: </button>
                    <div>{userId}</div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="chain" className="block text-sm font-medium text-gray-700">
                        Chain
                    </label>
                    <select
                        value={chain}
                        onChange={(e) => setChain(e.target.value)}
                        id="chain"
                        name="chain"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="solana">Solana</option>
                        <option value="ethereum">Ethereum </option>
                        <option value="polygon">Polygon</option>
                    </select>
                </div>
                <button 
                onClick={createNewWallet}
                className="text-xl bg-transparent hover:bg-green-500 text-green-700 font-bold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">Create a new wallet
                </button>
                
                <div className="select-all">{wallet?.publicKey}</div>
            </div>
        </>

    )
}

export default Wallet;
