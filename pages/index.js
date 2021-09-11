import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../layout/Layout'
import Navbar from '../components/Navbar'
import Service from '../components/Service'
import TopSlide from '../components/TopSlide'
import Catagory from '../components/Catagory'
import OfferBord from '../components/OfferBord'
import Footer from '../components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { firebase } from '../firebase/Firebase'
import { SET_USER, SET_PRODUCTS } from '../redux/actions'
import Products from '../components/Products'

export default function Home({ products }) {
  const dispatch = useDispatch()
  dispatch(SET_PRODUCTS(products))

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(SET_USER(user));
    } else {
      dispatch(SET_USER(user));
    }
  });

  const state = useSelector((state) => state.userReducer)
  console.log(state)
  return (
    <>
      <Header />
      <Navbar />
      <Layout>
        <TopSlide />
        <Service />
        <Catagory />
        <Products />
        <OfferBord />
        <Footer rounded={true} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const products = await fetch("http://localhost:8080/api/product").then(
    (res) => res.json()
  );


  return {
    props: {
      products
    },
  };
}

