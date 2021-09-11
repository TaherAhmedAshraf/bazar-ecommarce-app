import React from 'react'
import CartItem from '../components/CartItem.jsx'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function cart() {
    return (
        <>
            <div className='bg-gray-100 min-h-[100vh]'>
                <Header />
                <Navbar />
                <CartItem />
                <div className='bg-darkBlue'>
                    <div className='container mx-auto'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}
