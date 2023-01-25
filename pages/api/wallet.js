
export default async function handler(req, res) {
    const response = await fetch("https://staging.crossmint.io/api/v1-alpha1/wallets/sol:5kmhoBPJmuM5ZF8nB62rhR9PrLAxm6UMzFmU85kjDNjt/nfts", {
        headers: {
            'Content-Type': 'application/json',
            'X-PROJECT-ID': process.env.CROSSMINT_X_PROJECT_ID,
            'X-CLIENT-SECRET': process.env.CROSSMINT_X_CLIENT_SECRET
        }
    })
    const data = await response.json();
    console.log(data)
    console.log(data)
    console.log(data)

    res.status(200).json(data)
}