import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import Main from '../components/layouts/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ultra Eletro - O segundo maior site de produtos eletrônicos do Brasil.</title>
        <meta name="description" content="Compra ou venda produtos eletrônicos de todas as categorias no segundo maior site de produtos tecnológicos do Brasil." />
        <link rel="icon" href="/favicon.png" />
        {/* Add Keywords, UTF-8, pt-br */}
      </Head>

      <Header />

      <Main />

      <Footer/>

    </div>
  )
}
