import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzaria</title>
        <meta name="description" content="Best Pizza Shop in Khulna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PizzaList/>
    </div>
  )
}
