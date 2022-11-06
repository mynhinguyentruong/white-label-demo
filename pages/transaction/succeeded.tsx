
export default function Success() {
    return (
    
        <div className="flex flex-wrap justify-center align-center pt-48 text-wrap">
            <h1 className="">
                Minted Successfully. Open my  
                {" "}<a onClick={() => window.open("http://localhost:3000/user/collection")}><span className="text-green-500 underline cursor-pointer">wallet</span></a>

            </h1>
        </div>
    )
}