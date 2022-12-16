import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Checkout() {
    return (
        <Link href="/checkout" className={styles.card}>
            <>
            <h2>Checkout &rarr;</h2>
            <p>Begin the checkout process for a mint</p>
            </>
        </Link>
    )
}