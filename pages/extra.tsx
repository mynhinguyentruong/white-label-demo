import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

import React, { useState } from 'react'

import crossmintLogo from '../public/crossmint-logo.svg'
import Checkout from '../components/Checkout'
import Register from '../components/Register'

const Home: NextPage = () => {
  

  
  return (
    <div className={styles.container}>
      <Head>
        <title>White Label Demo</title>
        <meta name="description" content="Generated by crossmint white label app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.crossmint.io/">White Label Demo!</a>
        </h1>
        <p className={styles.description}>
          Get started with our Beta version utilizing {' '}
          <code className={styles.code}>/api/v1-alpha1</code>
          endpoint
        </p>
        <p className='text-2xl'>What we offer ?</p>
        <span>Enterprise solution and requires evaluation of your use case before approval. Reach out to sales@crossmint.io to get started.</span>

        <div className={styles.grid}>
          
          <Register />
          <Link
            href="/extra"
            className={styles.card}
          >
            <>
            <h2>Create a Wallet &rarr;</h2>
            <p>Create [brand-name]s multi-chain custodial wallets for your customers!</p>
            </>
          </Link>
          <Checkout />
          <Link
            href="/wallets/collection"
            className={styles.card}
          >
            <>
            <h2>Dev Console &rarr;</h2>
            <ul>
              <li>Check the current state of a user wallet</li>
              <li>Transfer NFT to another wallet</li>
            </ul>
            </>
          </Link>
          
        </div>  
      </main>


      

      <footer className={styles.footer}>

        <Link
          href="https://www.crossmint.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <>
          Powered by{' '}
          <span className='pt-1'>
            <Image src={crossmintLogo} alt="Crossmint Logo" width={72} height={16} />
          </span>
          Crossmint
          </>
        </Link>
      </footer>
    </div>
  )
}

export default Home