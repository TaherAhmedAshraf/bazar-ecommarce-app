import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../layout/Layout'
import Navbar from '../components/Navbar'
import Service from '../components/Service'
import TopSlide from '../components/TopSlide'
import Catagory from '../components/Catagory'

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Layout>
        <TopSlide />
        <Service />
        <Catagory />
      </Layout>
    </>
  )
}
