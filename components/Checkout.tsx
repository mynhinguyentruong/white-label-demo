import styles from '../styles/Home.module.css'

export default function Checkout() {
    return (
        <a href="/checkout" className={styles.card}>
            <h2>Checkout &rarr;</h2>
            <p>Begin the checkout process for a mint</p>
        </a>
    )
}