import { useRouter } from 'next/router'

function Page() {
    const router = useRouter()
    const { mintHash } = router.query
    return (
        <div>
            Mint Hash: { mintHash }
        </div>
    )
}

export default Page