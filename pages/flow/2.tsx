import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

function Page() {
    return (
        <>
        Flow 2
        <CrossmintPayButton
                clientId="bdcf62da-5392-4b01-b7b9-457f88322ec4"
                mintConfig={{"type":"candy-machine", "totalPrice": "0.0001", "count": "1"}}
                environment="staging"
            />

        </>
    )
}

export default Page