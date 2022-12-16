
export default function Fail() {
    return (
        <div className="flex flex-wrap justify-center align-center py-28">
            <h1 className="">
                Minting failed. Go back to my 
                <a onClick={() => window.open("http://localhost:3000/user/collection")}><span className="text-green-500 underline cursor-pointer"> wallet</span></a>

            </h1>
        </div>
    )
}